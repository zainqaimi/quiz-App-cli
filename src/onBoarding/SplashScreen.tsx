import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../utils/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type SplashNavProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

export default function SplashScreen() {
  const navigation = useNavigation<SplashNavProp>();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.img} />;
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
