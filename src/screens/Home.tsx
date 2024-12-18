import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import CustomButton from '../components/CustomButton';

export default function Home() {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: theme.colors.primary}]}>
      <Text>Home</Text>
      <CustomButton
        text="Drawer open"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        mode="outlined"
        textColor="white"
        style={{marginTop: 20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    color: 'white',
  },
});
