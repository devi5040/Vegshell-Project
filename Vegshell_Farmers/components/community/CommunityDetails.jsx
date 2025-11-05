import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import styles from './communityDetails.style';
import MapView from 'react-native-maps';
import {useRoute} from '@react-navigation/native';
import {SERVER_URL} from '@env';

const CommunityDetails = () => {
  const route = useRoute();
  const {item} = route.params;
  const latitude = parseFloat(item.latitude);
  const longitude = parseFloat(item.longitude);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item.cityName}</Text>
      <View style={styles.videoContainer}>
        <Image style={styles.image} source={{uri: `${item.landImage}`}} />
      </View>
      <View style={styles.videoDetail}>
        <Text style={styles.desc}>{item.landDescription}</Text>
        <View style={styles.flexContain}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
            <Text style={styles.date}>{item.soilType} Soil</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={styles.date}>{item.landArea} acres</Text>
          </View>
        </View>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.091,
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.contactButton}
        onPress={() => {
          Linking.openURL(`tel:9113624552`);
        }}>
        <Text style={styles.contact}>Contact Vegshell</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CommunityDetails;
