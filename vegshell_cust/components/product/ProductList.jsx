import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './productList.style';
import ProductCardView from './ProductCardView';
import Icons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants';
import {useState, useEffect} from 'react';
import axios from 'axios';
//dummy data

const ProductList = ({navigation}) => {
  const [products, setProduct] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.post('http://3.1.249.239/api/get-products');
      setProduct(response.data);
    } catch (error) {
      console.log('====================================');
      console.log('Arrey error yaar', error);
      console.log('====================================');
      setProduct(null);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name="arrow-back-sharp" size={24} color={COLORS.secondary} />
        </TouchableOpacity>
        <Text style={styles.title}>Products</Text>
        <View></View>
      </View>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({item}) => <ProductCardView item={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  );
};

export default ProductList;
