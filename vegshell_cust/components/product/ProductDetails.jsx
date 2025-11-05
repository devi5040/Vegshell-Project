import {View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import styles from './productDetails.style';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Iconss from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icons from 'react-native-vector-icons/Fontisto';
import {COLORS} from '../../constants';
import {useSelector} from 'react-redux';
import axios from 'axios';

const ProductDetails = ({navigation}) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  const route = useRoute();
  const {item} = route.params;

  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToCartHandler = async () => {
    if (!isAuthenticated) navigation.navigate('login');
    else {
      const cartItem = item._id;
      const userId = user._id;
      const quantity = count;
      try {
        const result = await axios.post(
          'http://3.1.249.239/api/cart/add-item',
          {userId, cartItem, quantity},
        );
        ToastAndroid.show(result.data, ToastAndroid.SHORT);
        navigation.navigate('Cart');
      } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Iconss name="arrow-back-sharp" size={24} color={COLORS.secondary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Iconss name="heart" size={30} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
      <Image source={{uri: `${item.imageUrl}`}} style={styles.image} />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.productName}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item.productPrice}/Kg</Text>
          </View>
        </View>

        {/* rating */}
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map(index => (
              <Iconss key={index} name="star" size={20} color="gold" />
            ))}
            <Text style={styles.ratingText}>(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <Icon name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>{count}</Text>
            <TouchableOpacity onPress={() => decrement()}>
              <Icon name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>{item.productDescription}</Text>
        </View>
        {/*need to add a cart Button and buy now button */}
        <View style={styles.cartContainer}>
          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.buyBtnText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartBtn} onPress={addToCartHandler}>
            <Icons name="shopping-bag" size={24} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
