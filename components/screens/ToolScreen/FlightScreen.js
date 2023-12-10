import React from "react";
import { Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";
import { Card } from "react-native-paper"; 
import { MapIcon, PaperAirplaneIcon, ClockIcon, DevicePhoneMobileIcon, GlobeAltIcon, CurrencyYenIcon } from 'react-native-heroicons/outline';
import Icon from 'react-native-vector-icons/Feather';

export default function FlightScreen () {

  // Function to handle the press on the cTrip link
  const handleCTripPress = () => {
    // Replace the URL with the actual cTrip URL
    const cTripUrl = "https://trains.ctrip.com/";
    Linking.openURL(cTripUrl);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Flight information</Text>

      {/* First Flight Card */}
      <Card style={styles.card}>
        <Card.Cover 
          source={require('../../../assets/images/UsefulTool/Tool_Terminal2.jpeg')}
          style={styles.cardCover} 
        />
        <Card.Content>
          <Text style={styles.cardTitle}>Guangzhou Baiyun International Airport</Text>
          <Text style={styles.cardDescription}>Guangzhou Baiyun International Airport, located in Guangzhou, Guangdong, China, is a major international airport and a key aviation hub in the Asia-Pacific region. As the primary airport serving the city of Guangzhou, it plays a pivotal role in connecting the region to domestic and global destinations.</Text>
          <Text>
            {"\n"}
            <Icon name="map-pin" size={18} color='gray' /> Location: Baiyun District{"\n"}
            <PaperAirplaneIcon size={18} color='gray' /> Terminal 1 - Domestic flights {"\n"}      Terminal 2 - International flights{"\n"}
            <GlobeAltIcon size={18} color='gray' /> Mandarin, Cantonese, English
          </Text>
        </Card.Content>
      </Card>

      {/* Second Flight Card */}
      <Card style={styles.card}>
        <Card.Cover 
          source={require('../../../assets/images/UsefulTool/Tool_Ctrip.png')}
          style={styles.cardCover}  
        />
        <Card.Content>
          <Text style={styles.cardTitle}>Booking Option</Text>
          <Text style={styles.cardDescription}>People normally book the flight ticket via Ctrip.com in China. But you are free to book the flight ticket by Skyscanner too.</Text>
          {/*<Text>
            {"\n"}
            <ClockIcon size={18} color='gray' /> Duration: 50 min{"\n"}
            <CurrencyYenIcon size={18} color='gray' />Price: 5 RMB{"\n"}
            <DevicePhoneMobileIcon size={18} color='gray' /> Mobile ticket, Transportation card{"\n"}
            <GlobeAltIcon size={18} color='gray' /> Mandarin, Cantonese, English, French, Spanish, Japanese, Korean, and Arabic
          </Text>*/}
          {/* CTrip Button */}
          <TouchableOpacity style={styles.ctripButton} onPress={handleCTripPress}>
            <Text style={styles.ctripButtonText}>Book your flight ticket on cTrip</Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>

      {/* Third Bus Card */}
      {/*<Card style={styles.card}>
        <Card.Cover 
          source={require('../../../assets/images/UsefulTool/Tool_WaterBus.jpeg')}
          style={styles.cardCover}  
        />
        <Card.Content>
          <Text style={styles.cardTitle}>Guangzhou Water Bus</Text>
          <Text style={styles.cardDescription}>The Guangzhou Water Bus is the short distance ferry. The Water Bus services, succeeding the Bus, Taxi, and Metro, is the fourth public transport system in the city. As per January 2020, the Water Bus system has 12 routes, 35 piers and a fleet of 46 ships in operation</Text>
          <Text>
            {"\n"}
            <ClockIcon size={18} color='gray' /> Duration: 20 min{"\n"}
            <CurrencyYenIcon size={18} color='gray' /> Price: Starting from 2 RMB{"\n"}
            <DevicePhoneMobileIcon size={18} color='gray' /> Mobile ticket, Transportation card{"\n"}
            <GlobeAltIcon size={18} color='gray' /> Mandarin, Cantonese, English
          </Text>
        </Card.Content>
        </Card>*/}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginLeft: 20,
  },
  card: {
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 5,
  },
  cardDescription: {
    fontSize: 16,
    padding: 5,
    color: '#333333'
  },
  cardCover: {
    height: 200,
    width: '90%',
    marginLeft: 20,
    marginTop: 20,
  },
  ctripButton: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  ctripButtonText: {
    color: "white",
    fontSize: 18,
  },  
}
);


