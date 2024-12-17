import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation, DrawerActions} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
}
