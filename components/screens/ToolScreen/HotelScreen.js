import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';
import { hotelData } from '../../constants';
//import { HeartIcon } from 'react-native-heroicons/outline';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const HotelScreen = () => {
  const renderHotelItem = (hotel) => (
    <TouchableOpacity
      key={hotel.id}
      style={styles.hotelContainer}
      onPress={() => handleHotelPress(hotel.bookingUrl)}
    >
      <Image source={hotel.image} style={styles.hotelImage} />
      <View style={styles.hotelInfo}>
        <Text style={styles.hotelName}>{hotel.name}</Text>
        <Text style={styles.hotelLocation}>
          <FeatherIcon name="map-pin" size={18} color='gray' />
            {hotel.location} 
        </Text>
        <Text style={styles.hotelPrice}>{hotel.price}</Text>
        <View style={styles.ratingContainer}>
          {Array.from({ length: Math.floor(hotel.rating) }).map((_, index) => (
            <EntypoIcon name='heart' key={index} size={16} color='orange' style={styles.heartIcon} />
          ))}
          {hotel.rating % 1 !== 0 && ( //remainder(% --> divided by 1 and not equal to ! == ) 
            <EntypoIcon name='heart' size={16} color="red" style={styles.heartIcon} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleHotelPress = (bookingUrl) => {
    // Open the hotel booking URL in the external browser
    Linking.openURL(bookingUrl);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {hotelData.map(renderHotelItem)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  hotelContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  hotelImage: {
    width: '45%',
    height: '100%',
    
  },
  hotelInfo: {
    flex: 1,
    padding: 5,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    padding:5,
  },
  hotelLocation: {
    fontSize: 16,
    padding:5,
  },
  hotelPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E8B57', // This is Sea Green
    padding:5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    padding:5,
    marginTop:1
  },
  starIcon: {
    marginRight: 2,
  },
});

export default HotelScreen;
