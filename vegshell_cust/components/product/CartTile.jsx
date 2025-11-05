import {View, Text, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import styles from './cartTile.style';
import {COLORS} from '../../constants';
import {useSelector} from 'react-redux';
import axios from 'axios';

const CartTile = ({item, onDelete}) => {
  const user = useSelector(state => state.auth.user);

  return (
    <View style={styles.cartItem}>
      {item.cartItem !== null && (
        <Image
          source={{
            uri: `${item.cartItem.imageUrl}`,
          }}
          style={styles.cartImage}
        />
      )}
      <View style={styles.details}>
        {item.cartItem !== null && (
          <Text style={styles.name}>{item.cartItem.productName}</Text>
        )}
        {item.cartItem !== null && (
          <Text style={styles.quantity}>{item.quantity}</Text>
        )}
      </View>
      <View style={styles.rightEnd}>
        <TouchableOpacity
          onPress={() => {
            onDelete(item._id);
          }}>
          <Icons name="delete" size={20} color={COLORS.red} />
        </TouchableOpacity>
        <Text style={styles.price}>
          Rs. {item.cartItem.productPrice * item.quantity}
        </Text>
      </View>
    </View>
  );
};

export default CartTile;
