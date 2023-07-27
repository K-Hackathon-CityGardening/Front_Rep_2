import {Modal, View, Text, Pressable, StyleSheet} from 'react-native';
import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  modalContent: {
    height: '80%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '6%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 2,
    backgroundColor: '#FFFFFF',
  },
  regionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  selectedRegionButton: {
    backgroundColor: '#007AFF',
  },
  regionButtonText: {
    fontSize: 16,
    color: 'black',
  },
  cityList: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  cityButton: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  selectedCityButton: {
    backgroundColor: '#007AFF',
  },
  cityButtonText: {
    fontSize: 16,
    color: 'black',
  },
});

function LocationModal({
  isVisible,
  onClose,
  selectedRegion,
  selectedCity,
  onRegionSelect,
  onCitySelect,
}) {
  const regions = ['서울', '경기', '강원', '제주'];
  const cities = {
    서울: ['전체', '강남구', '강동구', '강서구', '광진구'],
    경기: ['전체', '수원시', '성남시', '용인시', '부천시'],
    강원: ['전체', '춘천시', '원주시', '강릉시', '속초시'],
    제주: ['전체', '제주시', '서귀포시'],
  };

  const handleRegionSelect = region => {
    onRegionSelect(region);
    onCitySelect('');
  };

  const handleCitySelect = city => {
    onCitySelect(city);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a location</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            {regions.map(region => (
              <Pressable
                key={region}
                style={[
                  styles.regionButton,
                  selectedRegion === region && styles.selectedRegionButton,
                ]}
                onPress={() => handleRegionSelect(region)}>
                <Text style={styles.regionButtonText}>{region}</Text>
              </Pressable>
            ))}
          </View>
          {selectedRegion && (
            <View style={styles.rightContainer}>
              {cities[selectedRegion].map(city => (
                <Pressable
                  key={city}
                  style={[
                    styles.cityButton,
                    selectedCity === city && styles.selectedCityButton,
                  ]}
                  onPress={() => handleCitySelect(city)}>
                  <Text style={styles.cityButtonText}>{city}</Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}

export default LocationModal;
