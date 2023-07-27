import {View, Text, StyleSheet} from 'react-native';
import * as React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

function VolunteerScreen() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>Volunteer Page</Text>
    </View>
  );
}

export default VolunteerScreen;
