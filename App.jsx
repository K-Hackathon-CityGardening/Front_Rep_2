import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './components/BottomNavigator.jsx';
import { View } from 'react-native';
import {useState} from 'react';
import Login from './pages/LoginPage';

function App() {
  const [isLogin, setIsLogin]=useState(false);

  const isLoginSuccess=()=>
  {
    setIsLogin(true);
  };

  
  return (
    //서버열려있을때
    /*<View>
      {isLogin ? (
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      ):
      (
        <Login onLoginSuccess={isLoginSuccess} />
      )}
    </View>*/
    //로그인 없이 페이지테스트
   <NavigationContainer>
     <BottomTabNavigator />
   </NavigationContainer>
  );
}

export default App;

