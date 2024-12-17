import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../utils/types';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../onBoarding/SplashScreen';
import OnBoarding from '../onBoarding/OnBoarding';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
