import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, SIZES} from '../constants';
import TutorialCard from '../components/tutorials/TutorialCard';
import axios from 'axios';
import {SERVER_URL} from '@env';

const Tutorial = () => {
  const [tutorial, setTutorial] = useState();
  const getTutorial = async () => {
    try {
      const response = await axios.post(
        `${SERVER_URL}/api/tutorial/get-tutorial`,
      );
      setTutorial(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTutorial();
  }, [tutorial]);
  return (
    <SafeAreaView style={{marginBottom: 120}}>
      <Text style={styles.topText}>Tutorials</Text>
      <FlatList
        data={tutorial}
        numColumns={1}
        keyExtractor={item => item._id}
        renderItem={({item}) => <TutorialCard item={item} />}
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
    paddingVertical: 5,
  },
});

export default Tutorial;
