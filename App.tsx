import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {Provider, useTheme} from 'react-native-paper';

import AppNavigation from './src/navigation/AppNavigation';

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
    flex: 1, // Full height
  },
});
