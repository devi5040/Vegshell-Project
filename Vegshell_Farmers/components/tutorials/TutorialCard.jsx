import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './tutorialCard.style';
import {useNavigation} from '@react-navigation/native';

const TutorialCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('tutorial-detail', {item})}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/banner.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../../assets/images/video-icon.png')}
            style={styles.iconOver}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.tutorialName}
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            {item.tutorialTime} Hours
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TutorialCard;
