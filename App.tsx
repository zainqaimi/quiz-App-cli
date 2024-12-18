import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Provider, useTheme} from 'react-native-paper';

import AppNavigation from './src/navigation/AppNavigation';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const theme = useTheme();
  return (
    <Provider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <AppNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
