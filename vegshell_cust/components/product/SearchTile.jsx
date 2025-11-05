import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './searchTile.style';
import {useNavigation} from '@react-navigation/native';

const SearchTile = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('product-details', {item})}>
      <View style={styles.tileWrapper}>
        <View style={styles.wrapper}>
          <Image style={styles.image} source={{uri: `${item.imageUrl}`}} />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{item.productName}</Text>
          <Text style={styles.desc} numberOfLines={2}>
            {item.productDescription}
          </Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.priceText}>Rs. {item.productPrice}/ KG</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchTile;
