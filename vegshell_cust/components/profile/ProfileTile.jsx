import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Iconss from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './profileTile.style';
import {COLORS} from '../../constants';

const ProfileTile = ({onPress, title, icon, font}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.outer}>
        <View style={styles.inner}>
          {font === 1 ? (
            <Icon name={icon} size={24} color={COLORS.gray} />
          ) : font === 2 ? (
            <Icons name={icon} size={20} color={COLORS.gray} />
          ) : (
            <Iconss name={icon} size={22} color={COLORS.gray} />
          )}
          <Text style={styles.text}>{title}</Text>
        </View>
        <Iconss
          name="right"
          size={18}
          color={COLORS.gray2}
          style={styles.rightIcon}
        />
      </View>
      <View style={styles.divider} />
    </TouchableOpacity>
  );
};

export default ProfileTile;
