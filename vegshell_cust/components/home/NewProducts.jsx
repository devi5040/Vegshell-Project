import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './newProducts.style';
import {ProductCardView} from '../product';
import {SIZES} from '../../constants';

//dummy data

const NewProducts = ({products}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => {
          return item._id;
        }}
        renderItem={({item}) => <ProductCardView item={item} />}
        horizontal
        contentContainerStyle={{columnGap: SIZES.medium}}
      />
    </View>
  );
};

export default NewProducts;
