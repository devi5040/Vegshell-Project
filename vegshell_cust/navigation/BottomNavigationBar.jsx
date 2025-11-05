import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, Cart, Search} from '../screens';
import Icons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants/theme';

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
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      {/*Home tab*/}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icons
              name={focused ? 'home' : 'home-outline'}
              color={focused ? COLORS.secondary : COLORS.gray}
              size={24}
            />
          ),
        }}
      />
      {/* Search tab */}
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Icons
              name="search-sharp"
              color={focused ? COLORS.secondary : COLORS.gray}
              size={24}
            />
          ),
        }}
      />
      {/* Cart Tab */}
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <Icons
              name={focused ? 'cart' : 'cart-outline'}
              color={focused ? COLORS.secondary : COLORS.gray}
              size={24}
            />
          ),
        }}
      />
      {/* Profile Tab */}
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Icons
              name={focused ? 'person' : 'person-outline'}
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
