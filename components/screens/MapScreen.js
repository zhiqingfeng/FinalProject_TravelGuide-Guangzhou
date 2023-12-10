import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Alert, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [address, setAddress] = useState('');
  const [region, setRegion] = useState({
    latitude: 23.1291, // Guangzhou latitude
    longitude: 113.2644, // Guangzhou longitude
    latitudeDelta: 0.032,
    longitudeDelta: 0.02,
  });
  const [restaurants, setRestaurants] = useState([]);

  // Fetch coordinates from the Google API and show the address on the map
  // Use Google geocoding API
  const showAddress = async () => {
    try {
      const apiKey = 'AIzaSyCqGF17P9UlQRPJrviMQujURWvmhw-hsPs'; // Replace with actual API key
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${apiKey}`;
      console.log('Geocoding API URL:', url);
      const response = await fetch(url);
      const responseData = await response.json();
      console.log('Geocoding API Response:', responseData);

      if (responseData.results && responseData.results.length > 0) {
        console.log('responseData:', responseData)
        setRegion({
          ...region,
          latitude: responseData.results[0].geometry.location.lat,
          longitude: responseData.results[0].geometry.location.lng,
        });

        await showRestaurants();
      } else {
        Alert.alert('Error', 'No results found for the given address');
      }
    } catch (err) {
      console.error('Error in showAddress:', err);
      Alert.alert('Error', 'Something went wrong in fetch');
    }
  };

  // Show nearby restaurants
  // Use Google Places API
  const showRestaurants = async () => {
    try {
      if (region.latitude && region.longitude) {
        const apiKey = 'AIzaSyCqGF17P9UlQRPJrviMQujURWvmhw-hsPs'; 
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${region.latitude},${region.longitude}&radius=500&type=restaurant&key=${apiKey}`;
        const response = await fetch(url);
        const responseData = await response.json();
        setRestaurants(responseData.results);
      } else {
        Alert.alert('Warning', 'No coordinates available');
      }
    } catch (err) {
      Alert.alert('Error', 'Something went wrong in fetch');
    }
  };

  return (
    <View style={styles.container}>
      <MapView style={{ flex: 5 }} region={region}>
        {restaurants.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.geometry.location.lat,
              longitude: marker.geometry.location.lng,
            }}
            title={marker.name}
            description={marker.vicinity}
          />
        ))}
      </MapView>
      <View style={styles.container}>
        <TextInput
          placeholder="Type address"
          style={{ height: 40, fontSize: 18 }}
          onChangeText={(text) => setAddress(text)}
        />
        <TouchableOpacity title="Show" onPress={showAddress} style= {styles.button}>
            <Text style={styles.buttonText}>SHOW</Text>
        </TouchableOpacity>
        <Text style= {styles.text}>Here you can see the nearby restaurant!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
    //fontWeight: 'bold',
    fontSize: 18
  },
  button: {
    backgroundColor: 'orange', 
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white', 
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
