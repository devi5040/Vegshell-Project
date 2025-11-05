import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './cart.style';
import NetworkImage from '../components/NetworkImage';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CartTile} from '../components/product';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const profile =
  'https://d326fntlu7tb1e.cloudfront.net/uploads/b5065bb8-4c6b-4eac-a0ce-86ab0f597b1e-vinci_04.jpg';

const Cart = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);

  const sendDeleteRequest = async itemId => {
    const cartItem = itemId;
    const userId = user._id;
    try {
      const response = await axios.post(
        'http://3.1.249.239/api/cart/deleteItem',
        {userId, cartItem},
      );
      getCartItem();
      console.log(response);
      ToastAndroid.show(response.data, ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
    }
  };

  const getCartItem = async () => {
    if (isAuthenticated) {
      const userId = user._id;
      try {
        const response = await axios.post(
          'http://3.1.249.239/api/cart/get-item',
          {userId},
        );
        setData(response.data[0].products);
        console.log('====================================');
        console.log(data);
        console.log('====================================');
      } catch (error) {
        console.log(error);
      }
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    getCartItem();
  }, [data]);
  // console.log("====================================");
  // console.log(data[0].products);
  // console.log("====================================");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartTop}>
        <View />
        <Text style={styles.title}>Cart</Text>
        <NetworkImage source={profile} width={45} height={45} radius={99} />
      </View>

      <View style={styles.itemsContainer}>
        <FlatList
          data={data}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <CartTile item={item} onDelete={sendDeleteRequest} />
          )}
        />

        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate('checkout')}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
