import {View, Text} from 'react-native';
import React from 'react';
import {Provider, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  const theme = useTheme();
  return (
    <Provider>
      <SafeAreaView>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.primary,
          }}>
          <Text>quiz update checking</Text>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
