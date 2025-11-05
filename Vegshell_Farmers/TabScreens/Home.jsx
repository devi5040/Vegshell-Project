import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Carousel, Heading, Weather} from '../components/home';

const Home = () => {
  const windowHeight = Dimensions.get('window').height;
  return (
    <ScrollView style={{marginBottom: 70}}>
      <ImageBackground
        source={require('../assets/images/weather.jpg')}
        style={{opacity: 1, minHeight: windowHeight}}>
        <Heading />
        <Carousel />
        <Weather />
      </ImageBackground>
    </ScrollView>
  );
};

export default Home;
