import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Fontisto';
import styles from './home.style';
import {COLORS} from '../constants/theme';
import axios from 'axios';
import {
  Carousel,
  Categories,
  Headings,
  NewProducts,
  Welcome,
} from '../components/home';
import {useSelector} from 'react-redux';

const Home = () => {
  const login = useSelector(state => state.auth.isAuthenticated);
  const userData = useSelector(state => state.auth.user);
  // const products = useSelector((state) => state.products.product);
  // const error = useSelector((state) => state.products.error);
  // console.log(products);
  // const dispatch = useDispatch();

  // getAllProduct();
  const [products, setProduct] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.post('http://3.1.249.239/api/get-products');
      //console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      setProduct(null);
      console.log('ERRor');
    }
  };
  useEffect(() => {
    getAllProducts();
  }, [products]);

  return (
    <SafeAreaView style={{marginBottom: 70}}>
      <ScrollView>
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <Icons name="phone" size={24} color={COLORS.secondary} />
            {login ? (
              <Text style={styles.location}>{userData.phone}</Text>
            ) : (
              <View />
            )}
            <View style={{alignItems: 'flex-end'}}>
              <View style={styles.cartCount}>
                <Text style={styles.cartNumber}>8</Text>
              </View>
              <TouchableOpacity>
                <Icon name="shopping-bag" size={24} color={COLORS.secondary} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Welcome />
        <Carousel />
        <Headings title="New Arrivals" isProduct={true} />
        <NewProducts products={products} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
