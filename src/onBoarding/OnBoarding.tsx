import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../utils/types';

type OnboardNavProp = NativeStackNavigationProp<
  RootStackParamList,
  'OnBoarding'
>;

const OnBoarding = () => {
  const navigation = useNavigation<OnboardNavProp>();

  const handleDone = () => {
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <Text>OnBoarding</Text>
      <CustomButton text="Done" onPress={handleDone} />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});
