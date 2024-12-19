import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import CustomDrawer from '../components/customDrawer/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={() => (
        <>
          <CustomDrawer label="Inbox" focusedIcon="inbox" />
          <CustomDrawer label="Home" focusedIcon="home" />
          <CustomDrawer label="profile" focusedIcon="inbox" />
        </>
      )}
      screenOptions={{headerShown: false, drawerStyle: {width: '30%'}}}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
