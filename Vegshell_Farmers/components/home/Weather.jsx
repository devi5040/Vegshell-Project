import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './weather.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants';
import {fetchWeatherForecast} from './api/weather';

const Weather = () => {
  const [data, setData] = useState(null);

  const handleForecast = () => {
    fetchWeatherForecast({cityName: 'Mangalore', days: '7'}).then(data =>
      setData(data),
    );
  };
  useEffect(() => {
    handleForecast();
  }, []);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.infoText}>Puttur, Mangalore</Text>
        <Image
          source={require('../../assets/images/cloud.png')}
          // source={{uri: 'http:' + data.current.condition.icon}}
          style={styles.imageMain}
        />
        <Text style={styles.mainText}>{data?.current?.temp_c}&#176;</Text>
        <Text style={styles.infoText}>{data?.current?.condition?.text}</Text>
      </View>
      <View style={styles.iconBox}>
        <View style={styles.individualIcon}>
          <MaterialIcons name="air" color={COLORS.lightWhite} size={24} />
          <Text style={styles.iconText}>{data?.current.wind_kph}km</Text>
        </View>
        <View style={styles.individualIcon}>
          <Ionicons name="water-outline" color={COLORS.lightWhite} size={24} />
          <Text style={styles.iconText}>{data?.current.humidity}%</Text>
        </View>
        <View style={styles.individualIcon}>
          <Ionicons name="sunny-outline" color={COLORS.lightWhite} size={24} />
          <Text style={styles.iconText}>
            {data?.forecast?.forecastday[0]?.astro?.sunrise}
          </Text>
        </View>
      </View>
      <ScrollView horizontal={true}>
        {data?.forecast.forecastday.map((item, index) => {
          let date = new Date(item.date);
          let options = {weekday: 'long'};
          let dayName = date.toLocaleDateString('en-US', options);
          dayName = dayName.split(',')[0];
          return (
            <View key={index} style={styles.daily}>
              <Ionicons
                name="partly-sunny-outline"
                color={COLORS.lightWhite}
                size={40}
              />
              <Text style={styles.day}>{dayName}</Text>
              <Text style={styles.dayTemp}>{item.day.avgtemp_c}&#176;</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Weather;
