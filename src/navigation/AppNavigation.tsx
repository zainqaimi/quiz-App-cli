// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {NavigationContainer} from '@react-navigation/native';
// import SplashScreen from '../onBoarding/SplashScreen';
// import OnBoarding from '../onBoarding/OnBoarding';
// import DrawerNavigation from './DrawerNavigation';

// const Stack = createNativeStackNavigator();

// const AppNavigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Splash"
//         screenOptions={{headerShown: false}}>
//         <Stack.Screen name="Splash" component={SplashScreen} />
//         <Stack.Screen name="OnBoarding" component={OnBoarding} />
//         <Stack.Screen name="Home" component={DrawerNavigation} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigation;
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import SplashScreen from '../onBoarding/SplashScreen';
import OnBoarding from '../onBoarding/OnBoarding';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Main" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}
