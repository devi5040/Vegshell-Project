import {View, Text} from 'react-native';
import React from 'react';
import styles from './headings.style';

const Heading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topHeading}>Welcome To</Text>
      <Text style={styles.secondHeading}>Vegshell</Text>
    </View>
  );
};

export default Heading;
