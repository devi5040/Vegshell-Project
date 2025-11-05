import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Community, Equipment, Home, Tutorial} from '../TabScreens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constants';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  },
};

const BottomNavigationBar = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={focused ? COLORS.secondary : COLORS.gray}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Equipment"
        component={Equipment}
        options={{
          tabBarIcon: ({focused}) => (
            <Icons
              name="agriculture"
              color={focused ? COLORS.secondary : COLORS.gray}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tutorials"
        component={Tutorial}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'book' : 'book-outline'}
              color={focused ? COLORS.secondary : COLORS.gray}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={focused ? 'globe-sharp' : 'globe-outline'}
              color={focused ? COLORS.secondary : COLORS.gray}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigationBar;
