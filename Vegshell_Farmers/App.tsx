/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigationBar from "./navigation/BottomNavigationBar";

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {CommunityDetails, EquipmentDetails, TutorialDetail } from "./components";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="bottom-navigation"
            component={BottomNavigationBar}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="tutorial-detail"
            component={TutorialDetail}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="equipment-detail"
            component={EquipmentDetails}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="community-detail"
            component={CommunityDetails}
            options={{ headerShown: false }}
          />
          
        </stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
