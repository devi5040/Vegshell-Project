import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './headings.style';
import {COLORS} from '../../constants';
import Icons from 'react-native-vector-icons/Ionicons';
import {ProductList} from '../product';
import {useNavigation} from '@react-navigation/native';

const Headings = ({title, isProduct}) => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity
          onPress={() => {
            if (isProduct === true) {
              navigate.navigate('productList');
            } else {
              navigate.navigate('categoryList');
            }
          }}>
          <Icons name="grid" size={24} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;
