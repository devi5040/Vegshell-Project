import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './communityCard.style';
import {useNavigation} from '@react-navigation/native';
import {SERVER_URL} from '@env';
import {COLORS} from '../../constants';

const CommunityCard = ({item}) => {
  const navigation = useNavigation();

  const timestamp = new Date(item.updatedAt);

  // Extract date components
  const dd = String(timestamp.getDate()).padStart(2, '0'); // Day
  const mm = String(timestamp.getMonth() + 1).padStart(2, '0'); // Month (January is 0)
  const yyyy = timestamp.getFullYear(); // Year

  // Format the date as dd-mm-yyyy
  const formattedDate = `${dd}-${mm}-${yyyy}`;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('community-detail', {item})}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: `${item.landImage}`}} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.cityName}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.price}>{item.soilType} Soil</Text>
            <Text style={styles.price}>{item.landArea} Acres</Text>
          </View>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              marginVertical: 5,
              color: COLORS.secondary,
            }}>
            Uploaded On : {formattedDate}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CommunityCard;
