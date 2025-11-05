import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './productCardView.style';
import {useNavigation} from '@react-navigation/native';

const ProductCardView = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('product-details', {item});
      }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: `${item.imageUrl}`}} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.productName}
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            Rs. {item.productPrice}/kg
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
