import {Image, Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomePage.jsx';
import MyPageScreen from '../pages/MyPage.jsx';
import VolunteerScreen from '../pages/VolunteerPage.jsx';
import MapScreen from '../pages/MapPage.jsx';
import GardeningScreen from '../pages/GardeningPage.jsx';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderTopColor: '#DDDDDD',
    borderTopWidth: 1,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 12,
  },
  tabIcon: {
    width: 26,
    height: 26,
  },
  headerLogo: {
    width: 60,
    height: 60,
  },
  headerTitleText: {
    color: '#fff',
    fontSize: 20,
  },
});

function CustomHeaderTitle({title}) {
  return (
    <View style={styles.headerTitleContainer}>
      <Image
        style={styles.headerLogo}
        source={require('../assets/Header_Icon.png')}
      />
      <Text style={styles.headerTitleText}>{title}</Text>
    </View>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      ScreenOptions={{
        style: styles.tabContainer,
        showLabel: false,
        showIcon: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <CustomHeaderTitle title="Home" />,
          headerTitleStyle: {color: '#fff', fontWeight: 'normal'},
          headerStyle: {
            backgroundColor: '#77EBC1',
          },
        }}
      />
      <Tab.Screen
        name="Volunteer"
        component={VolunteerScreen}
        options={{
          headerTitle: () => <CustomHeaderTitle title="Volunteer" />,
          headerTitleStyle: {color: '#fff', fontWeight: 'normal'},
          headerStyle: {
            backgroundColor: '#77EBC1',
          },
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerTitle: () => <CustomHeaderTitle title="Map" />,
          headerTitleStyle: {color: '#fff', fontWeight: 'normal'},
          headerStyle: {
            backgroundColor: '#77EBC1',
          },
        }}
      />
      <Tab.Screen
        name="Gardening"
        component={GardeningScreen}
        options={{
          headerTitle: () => <CustomHeaderTitle title="Gardening" />,
          headerTitleStyle: {color: '#fff', fontWeight: 'normal'},
          headerStyle: {
            backgroundColor: '#77EBC1',
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MyPageScreen}
        options={{
          headerTitle: () => <CustomHeaderTitle title="Profile" />,
          headerTitleStyle: {color: '#fff', fontWeight: 'normal'},
          headerStyle: {
            backgroundColor: '#77EBC1',
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
