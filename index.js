/**
 * @format
 */

import {AppRegistry, useColorScheme} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import { PaperProvider } from 'react-native-paper';
import { MD3LightTheme , MD3DarkTheme, PaperProvider } from 'react-native-paper';
import { lightScheme } from './src/themes/lightScheme';
import { darkScheme } from './src/themes/darkScheme';

const LightTheme = {
    ...MD3LightTheme,
    colors: lightScheme
}
const DarkTheme = {
    ...MD3DarkTheme,
    colors: darkScheme
}


export default function Main() {
    const colorScheme = useColorScheme()
    const theme = colorScheme === 'dark'? DarkTheme : LightTheme
    return (
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    );
  }
AppRegistry.registerComponent(appName, () => Main);
