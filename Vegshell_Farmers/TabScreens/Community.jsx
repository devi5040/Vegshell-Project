import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, SIZES} from '../constants';
import CommunityCard from '../components/community/CommunityCard';
import axios from 'axios';
import {SERVER_URL} from '@env';

const Community = () => {
  const [responseData, setResponse] = useState();
  const getLandData = async () => {
    try {
      const response = await axios.post(`${SERVER_URL}/api/community/get-land`);
      setResponse(response.data);
      console.log('====================================');
      console.log(responseData);
      console.log('====================================');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLandData();
  }, [responseData]);
  return (
    <SafeAreaView style={{marginBottom: 120}}>
      <Text style={styles.topText}>Community</Text>
      <FlatList
        data={responseData}
        numColumns={1}
        keyExtractor={item => item._id}
        renderItem={({item}) => <CommunityCard item={item} />}
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
    paddingTop: SIZES.xxLarge,
    paddingVertical: 5,
    paddingHorizontal: 50,
  },
});

export default Community;
