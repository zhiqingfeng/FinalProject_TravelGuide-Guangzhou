import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-paper"; 
import { ClockIcon, DevicePhoneMobileIcon, GlobeAltIcon, CurrencyYenIcon } from 'react-native-heroicons/outline';

export default function BusScreen(){
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Bus Services in Guangzhou</Text>

      {/* First Bus Card */}
      <Card style={styles.card}>
        <Card.Cover 
          source={require('../../../assets/images/UsefulTool/Tool_Buscard.jpeg')}
          style={styles.cardCover} 
        />
        <Card.Content>
          <Text style={styles.cardTitle}>Yang Cheng Tong - Transportation Card</Text>
          <Text style={styles.cardDescription}>Yang Cheng Tong is a contactless rechargeable stored value smartcard designed for paying the travel fares in the metro, buses, taxis and ferries in Guangzhou. You can buy the Transportation Card from Metro, 7-11, FamilyMarkt.</Text>
          <Text>
            {"\n"}
            <ClockIcon size={18} color='gray' /> Duration: 24 h{"\n"}
            <CurrencyYenIcon size={18} color='gray' /> Price: Deposite 30 RMB{"\n"}
            <DevicePhoneMobileIcon size={18} color='gray' /> Mobile ticket, Transportation card{"\n"}
            <GlobeAltIcon size={18} color='gray' /> Mandarin, Cantonese, English
          </Text>
        </Card.Content>
      </Card>

      {/* Second Bus Card */}
      <Card style={styles.card}>
        <Card.Cover 
          source={require('../../../assets/images/UsefulTool/Tool_TwinBus.webp')}
          style={styles.cardCover}  
        />
        <Card.Content>
          <Text style={styles.cardTitle}>Guangzhou Twin City Sightseeing Bus</Text>
          <Text style={styles.cardDescription}>The Guangzhou City Sightseeing Bus is a double-decker open-top bus with language guide systems in eight languages (Mandarin, Cantonese, English, French, Spanish, Japanese, Korean, and Arabic). The Guangzhou City Sightseeing Bus has a total of three lines, covering the main areaa of Guangzhou; you can enjoy the city scenery all at once.</Text>
          <Text>
            {"\n"}
            <ClockIcon size={18} color='gray' /> Duration: 50 min{"\n"}
            <CurrencyYenIcon size={18} color='gray' />Price: 5 RMB{"\n"}
            <DevicePhoneMobileIcon size={18} color='gray' /> Mobile ticket, Transportation card{"\n"}
            <GlobeAltIcon size={18} color='gray' /> Mandarin, Cantonese, English, French, Spanish, Japanese, Korean, and Arabic
          </Text>
        </Card.Content>
      </Card>

      {/* Third Bus Card */}
      <Card style={styles.card}>
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
      </Card>

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
});

