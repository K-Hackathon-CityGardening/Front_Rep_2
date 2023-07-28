import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './components/BottomNavigator.jsx';
import { View } from 'react-native';
import {useState} from 'react';
import Login from './login/LoginPage.jsx';

function App() {
  const [isLogin, setIsLogin]=useState(false);

  const isLoginSuccess=()=>
  {
    setIsLogin(true);
  };
  return (
    <View>
      {isLogin ? (
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      ):
      (
        <Login onLoginSuccess={isLoginSuccess} />
      )}
    </View>
  );
}

export default App;

