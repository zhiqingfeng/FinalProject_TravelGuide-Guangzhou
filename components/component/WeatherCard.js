import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

{/*the weather information */}
const WeatherCard = ({ weather }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.city}>{weather.name}</Text>
      <Text style={styles.temperature}>{`${Math.round(weather.main.temp)}°C`}</Text>
      <View style={styles.weatherDetails}>
        <Image
          source={{ uri: `http://openweathermap.org/img/w/${weather.weather[0].icon}.png` }}
          style={styles.weatherIcon}
        />
        <Text>{weather.weather[0].description}</Text>
      </View>
      <View style={styles.additionalDetails}>
        <Text style={styles.detailsText}>{`Max: ${Math.round(weather.main.temp_max)}°C   Min: ${Math.round(weather.main.temp_min)}°C`}</Text>
        <Text style={styles.detailsText}>{`Humidity: ${weather.main.humidity}%`}</Text>
        <Text style={styles.detailsText}>{`Wind: ${weather.wind.speed} m/s`}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'aliceblue',//'#87CEEB', // Sky Blue //backgroundColor: '#D3D3D3', // Light Gray
        borderRadius: 20,
        padding: 10,
        width: '90%',
        marginBottom: 15,
        marginHorizontal: wp(5),
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  city: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  temperature: {
    fontSize: 20,
  },
  weatherDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  weatherIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  additionalDetails: {
    marginTop: 10,
  },
  detailsText: {
    fontWeight: 'bold',
    padding: 1,
  },
})

export default WeatherCard;