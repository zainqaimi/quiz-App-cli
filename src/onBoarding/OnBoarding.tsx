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
    navigation.replace('Home');
  };
  return (
    <View style={styles.container}>
      <Text>OnBoarding</Text>
      <CustomButton
        text="Done"
        mode="outlined"
        disabled={false}
        onPress={() => {
          handleDone();
        }}
        textColor="white"
        style={styles.btn}
      />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'yellow',
  },
  btn: {
    width: '100%',
    backgroundColor: 'green',
  },
});
