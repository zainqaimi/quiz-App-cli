import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../utils/types';
type OnboardNavProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
const OnBoarding = () => {
  const navigation = useNavigation<OnboardNavProp>();
  const handleDone = () => {
    navigation.replace('Login');
  };
  return (
    <View>
      <Text>OnBoarding</Text>
      <CustomButton
        text="Done"
        icon="correct"
        mode="outlined"
        disabled={false}
        onPress={() => {
          handleDone;
        }}
      />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
