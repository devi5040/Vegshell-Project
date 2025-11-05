import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, SIZES} from '../constants';
import EquipmentCard from '../components/equipment/EquipmentCard';
import axios from 'axios';
import {SERVER_URL} from '@env';

const Equipment = () => {
  const [responseData, setResponse] = useState();
  const getEquipmentData = async () => {
    try {
      const response = await axios.post(
        `${SERVER_URL}/api/equipment/get-equipment`,
      );
      setResponse(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEquipmentData();
  }, [responseData]);
  return (
    <SafeAreaView>
      <Text style={styles.topText}>Equipments</Text>
      <FlatList
        data={responseData}
        numColumns={2}
        keyExtractor={item => item._id}
        renderItem={({item}) => <EquipmentCard item={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: COLORS.secondary,
    textAlign: 'center',
  },
  seperator: {
    height: 16,
  },
  container: {
    alignItems: 'center',
    paddingTop: SIZES.xxLarge,
    paddingHorizontal: '5%',
    paddingVertical: 5,
  },
});

export default Equipment;
