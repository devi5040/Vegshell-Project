import {View, Text} from 'react-native';
import React from 'react';
import styles from './welcome.style';
import {COLORS, SIZES} from '../../constants';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>
        Find Fresh Vegetables
      </Text>
      <Text style={styles.welcomeText(COLORS.secondary, 0)}>
        At Affordable Price at VEGSHELL
      </Text>
    </View>
  );
};

export default Welcome;
