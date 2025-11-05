import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./registrationTile.style";

const RegistrationTile = ({ onPress, heading, desc }) => {
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <View>
          <Text style={styles.text}>{heading}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
        <TouchableOpacity style={styles.registration} onPress={onPress}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegistrationTile;
