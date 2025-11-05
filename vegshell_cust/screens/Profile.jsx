import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SIZES} from '../constants';
import styles from './profile.style';
import NetworkImage from '../components/NetworkImage';
import Icons from 'react-native-vector-icons/AntDesign';
import ProfileTile from '../components/profile/ProfileTile';
import {useNavigation} from '@react-navigation/native';
import {logout} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';

const profile =
  'https://d326fntlu7tb1e.cloudfront.net/uploads/b5065bb8-4c6b-4eac-a0ce-86ab0f597b1e-vinci_04.jpg';
const bkImg =
  'https://d326fntlu7tb1e.cloudfront.net/uploads/ab6356de-429c-45a1-b403-d16f7c20a0bc-bkImg-min.png';

const Profile = () => {
  const login = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigation();
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(logout());
  };

  //logout function
  return (
    <View>
      <View style={{height: SIZES.height}}>
        <View style={styles.container}>
          <View style={styles.profile}>
            <View style={{flexDirection: 'row'}}>
              <NetworkImage
                source={profile}
                width={45}
                height={45}
                radius={99}
              />
              {login ? (
                <View style={styles.userDetail}>
                  <Text style={styles.text}>{user.username}</Text>
                  <Text style={styles.email}>{user.email}</Text>
                </View>
              ) : (
                <View style={styles.userDetail}>
                  <Text style={styles.text}>username</Text>
                  <Text style={styles.email}>user email</Text>
                </View>
              )}
            </View>
            <TouchableOpacity
              onPress={() => {
                userLogout();
              }}>
              <Icons name="logout" size={24} color="red" />
            </TouchableOpacity>
          </View>
          <View style={styles.sectionContainer}>
            <ProfileTile
              title={'Orders'}
              icon={'pricetag-outline'}
              font={1}
              onPress={() => navigate.navigate('login')}
            />
            <ProfileTile title={'Favourites'} icon={'heart'} font={2} />
            <ProfileTile title={'Payment History'} icon={'creditcard'} />
          </View>
          <View style={styles.sectionContainer}>
            <ProfileTile title={'Coupons'} icon={'tago'} />
            <ProfileTile title={'My Store'} icon={'bag'} font={2} />
            <ProfileTile title={'History'} icon={'globe-outline'} font={1} />
          </View>
          <View style={styles.sectionContainer}>
            <ProfileTile
              title={'Shipping Address'}
              icon={'location-outline'}
              font={1}
            />
            <ProfileTile title={'Service Center'} icon={'customerservice'} />
            <ProfileTile title={'Settings'} icon={'setting'} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
