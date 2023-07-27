import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomePage.jsx';
import MyPageScreen from '../pages/MyPage.jsx';
import VolunteerScreen from '../pages/VolunteerPage.jsx';
import MapScreen from '../pages/MapPage.jsx';
import GardeningScreen from '../pages/GardeningPage.jsx';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Volunteer" component={VolunteerScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Gardening" component={GardeningScreen} />
      <Tab.Screen name="Profile" component={MyPageScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
