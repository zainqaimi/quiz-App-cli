import React from 'react';
import './gesture-handler';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider, useTheme} from 'react-native-paper';
import AppNavigation from './src/navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const theme = useTheme();
  return (
    <Provider>
      <SafeAreaView style={styles.container}>
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
