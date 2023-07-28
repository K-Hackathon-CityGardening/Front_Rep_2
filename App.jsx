import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './components/BottomNavigator.jsx';
import { View } from 'react-native';
import TextInputExample from './login/LoginPage.jsx';

function App() {
  return (
    <View>
      <TextInputExample />
    </View>
    /*<NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>*/
  );
}

export default App;

