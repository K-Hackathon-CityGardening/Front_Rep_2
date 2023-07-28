import {View, Text, StyleSheet} from 'react-native'
import * as React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>Home ScreenSS</Text>
    </View>
  );
}

export default HomeScreen;
