import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import LocationModal from '../components/LocationModal';

function VolunteerScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const showLocation = () => {
    setIsModalVisible(true);
  };

  const showLocationClose = () => {
    setIsModalVisible(false);
  };

  const handleRegionSelect = region => {
    setSelectedRegion(region);
  };

  const handleCitySelect = city => {
    setSelectedCity(city);
  };

  // 예시로 5개의 volunteerbox 컴포넌트를 만듭니다.
  const renderVolunteerBoxes = () => {
    const boxes = [];
    for (let i = 0; i < 5; i++) {
      boxes.push(
        <View key={i} style={styles.volunteerbox}>
          <Text>
            {selectedRegion} {'>'} {selectedCity}
          </Text>
        </View>
      );
    }
    return boxes;
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.locationSelector}>
        <View style={styles.locationBox}>
          <MaterialIcons
            style={styles.locationIcon}
            name="edit-location"
            size={24}
            color="black"
          />
          <Text>
            {selectedRegion} {'>'} {selectedCity}
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Octicons
            name="diff-added"
            size={30}
            color="black"
            onPress={showLocation}
          />
        </TouchableOpacity>
        <LocationModal
          isVisible={isModalVisible}
          onClose={showLocationClose}
          selectedRegion={selectedRegion}
          selectedCity={selectedCity}
          onRegionSelect={handleRegionSelect}
          onCitySelect={handleCitySelect}
        />
      </View>
      <View style={styles.volunteerContainer}>
        {renderVolunteerBoxes()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    padding: 30,
  },
  locationSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  locationBox: {
    flexDirection: 'row',
    width: '80%',
    height: 40,
    borderRadius: 15,
    backgroundColor: '#77EBC1',
    elevation: 6,
    shadowColor: 'black',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
  },
  locationIcon: {
    alignItems: 'flex-start',
    marginRight: '20%',
    marginLeft: '5%',
  },
  volunteerContainer: {
    marginTop: 10,
  },
  volunteerbox: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    elevation: 6,
    shadowColor: 'black',
    alignItems: 'center',
    marginBottom: 5, // 5의 간격을 두고 정렬
  },
});

export default VolunteerScreen;
