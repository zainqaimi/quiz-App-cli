// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import {Gesture} from 'react-native-gesture-handler';
const gesture = Gesture.Tap()
  .onStart(event => {
    console.log('Gesture started');
  })
  .runOnJS(true); // 🟢 Force callback to run on JS thread
