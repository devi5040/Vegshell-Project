import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './equipmentDetails.style';
import {useRoute} from '@react-navigation/native';
import {SERVER_URL} from '@env';
import {Linking} from 'react-native';

const EquipmentDetails = () => {
  const route = useRoute();
  const {item} = route.params;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item.equipmentName}</Text>
      <View style={styles.imageContainer}>
        <Image source={{uri: `${item.equipmentImage}`}} style={styles.image} />
      </View>
      <View style={styles.details}>
        <Text style={styles.desc}>{item.equipmentDescription}</Text>
        <Text style={styles.price}>
          {item.rent}/- per {item.rentType}
        </Text>
        <TouchableOpacity
          style={styles.rentBtn}
          onPress={() => {
            Linking.openURL(`tel:9113624552`);
          }}>
          <Text style={styles.rentText}>Rent Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EquipmentDetails;
