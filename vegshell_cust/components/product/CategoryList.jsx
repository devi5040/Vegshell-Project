import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from './productList.style';
import Icons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants';
import CategoryCardView from './CategoryCardView';

const category = [
  {
    id: 1,
    cTitle: 'Fruits',
    image: require('../../assets/images/Vegetables/v1.jpg'),
  },
  {
    id: 2,
    cTitle: 'Vegetables',
    image: require('../../assets/images/Vegetables/v2.jpg'),
  },
  {
    id: 3,
    cTitle: 'Vegshell Special',
    image: require('../../assets/images/Vegetables/v3.jpg'),
  },
];

const CategoryList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name="arrow-back-sharp" size={24} color={COLORS.secondary} />
        </TouchableOpacity>
        <Text style={styles.title}>Categories</Text>
        <View></View>
      </View>
      <FlatList
        data={category}
        numColumns={2}
        renderItem={({item}) => <CategoryCardView item={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  );
};

export default CategoryList;
