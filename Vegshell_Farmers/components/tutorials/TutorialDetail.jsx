import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './tutorialDetail.style';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants';
import {useRoute} from '@react-navigation/native';
import {SERVER_URL} from '@env';

const TutorialDetail = () => {
  const route = useRoute();
  const {item} = route.params;
  const timestamp = new Date(item.updatedAt);

  // Extract date components
  const dd = String(timestamp.getDate()).padStart(2, '0'); // Day
  const mm = String(timestamp.getMonth() + 1).padStart(2, '0'); // Month (January is 0)
  const yyyy = timestamp.getFullYear(); // Year

  // Format the date as dd-mm-yyyy
  const formattedDate = `${dd}-${mm}-${yyyy}`;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item.tutorialName}</Text>
      <View style={styles.videoContainer}>
        <Video
          source={{uri: `${item.tutorialVideo}`}}
          style={styles.video}
          resizeMode="contain"
          controls={true}
          poster="https://vegshell.s3.amazonaws.com/banner.jpg"
          paused={false}
        />
      </View>
      <View style={styles.videoDetail}>
        <Text style={styles.desc}>{item.tutorialDescription}</Text>
        <View style={styles.flexContain}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
            <Ionicons
              name="calendar-number-outline"
              size={24}
              color={COLORS.secondary}
            />
            <Text style={styles.date}>{formattedDate}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Ionicons name="time-outline" size={24} color={COLORS.secondary} />
            <Text style={styles.date}>{item.tutorialTime} Hours</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TutorialDetail;
