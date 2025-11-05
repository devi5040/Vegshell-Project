/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import BottomNavigationBar from "./navigation/BottomNavigationBar";
import {
  CategoryList,
  ProductDetails,
  ProductList,
} from "./components/product";
import { Register, Login, Verify, Checkout } from "./screens";
import { Provider } from "react-redux";
import store from "./redux/store";
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
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="bottom-navigation"
            component={BottomNavigationBar}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="productList"
            component={ProductList}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="categoryList"
            component={CategoryList}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="register"
            component={Register}
            options={{ headerShown: false }}
          />
          <stack.Screen
            name="product-details"
            component={ProductDetails}
            options={{ headerShown: false }}
          />

          <stack.Screen
            name="checkout"
            component={Checkout}
            options={{ headerShown: false }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
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
