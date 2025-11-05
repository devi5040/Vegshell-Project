import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './equipmentCard.style';
import {useNavigation} from '@react-navigation/native';
import {SERVER_URL} from '@env';

const EquipmentCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('equipment-detail', {item})}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: `${item.equipmentImage}`}}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.equipmentName}
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            Rs. {item.rent} /{item.rentType}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EquipmentCard;
