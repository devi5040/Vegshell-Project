import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './checkout.style';
import {CheckoutItem} from '../components/product';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
//import {RAZORPAY_KEY_ID, SECRET} from '@env';
import axios from 'axios';
import RazorpayCheckout from 'react-native-razorpay';
import {COLORS} from '../constants';

const RAZORPAY_KEY_ID = 'rzp_test_l4l0POOn6NSyTP';
const Checkout = () => {
  const paymentHandler = () => {
    {
      var options = {
        description: 'Credits towards consultation',
        image: 'https://i.imgur.com/3g7nmJC.jpg',
        currency: 'INR',
        key: RAZORPAY_KEY_ID,
        amount: total * 100,
        name: 'VEGSHELL',
        order_id: 'order_DslnoIgkIDL8Zt', //Replace this with an order_id created using Orders API.
        prefill: {
          email: 'gaurav.kumar@example.com',
          contact: '9191919191',
          name: 'Gaurav Kumar',
        },
        theme: {color: COLORS.secondary},
      };
      RazorpayCheckout.open(options)
        .then(data => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`);
        })
        .catch(error => {
          // handle failure
          alert(`Error: ${error.code} | ${error.description}`);
        });
    }
  };
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const navigation = useNavigation();
  if (!isAuthenticated) {
    navigation.navigate('login');
    return null;
  }

  const user = useSelector(state => state.auth.user);

  //Get the cart items
  const getCartItem = async () => {
    let tot = 0;
    const userId = user._id;
    try {
      const response = await axios.post(
        'http://3.1.249.239/api/cart/get-item',
        {userId},
      );
      data.map(item => {
        return (tot += item.cartItem.productPrice * item.quantity);
      });
      setTotal(tot);
      setData(response.data[0].products);
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  };
  useEffect(() => {
    getCartItem();
  }, [total, data]);

  return (
    <SafeAreaView style={{marginHorizontal: 12}}>
      <View style={styles.container}>
        <Text style={styles.company}>VEGSHELL</Text>
        <Text style={styles.checkout}>Checkout</Text>
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.textName}>{user.username}</Text>
        <Text style={styles.textEmail}>{user.email}</Text>
      </View>
      <View style={{height: 40}} />
      <View style={styles.mainContainer}>
        <Text style={styles.mainText}>Items</Text>
        <View>
          <FlatList
            style={{borderBottomWidth: 0.5}}
            data={data}
            keyExtractor={item => item._id}
            renderItem={({item}) => (
              <CheckoutItem item={item} style={{borderBottomWidth: 0.5}} />
            )}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>SubTotal</Text>
            <Text style={styles.totalText}>{total}</Text>
          </View>
        </View>
      </View>
      <View style={{height: 40}} />
      <TouchableOpacity style={styles.btn} onPress={() => paymentHandler()}>
        <Text style={styles.btnText}>Proceed</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Checkout;
