import React from "react";
import { Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native";
import { Card } from "react-native-paper"; 
//import { MapIcon, PaperAirplaneIcon, ClockIcon, DevicePhoneMobileIcon, GlobeAltIcon, CurrencyYenIcon } from 'react-native-heroicons/outline';
import Icon from 'react-native-vector-icons/Fontisto';

export default function FlightScreen () {

  // Function to handle the press on the cTrip link
  const handleTrainPress = () => {
    // Replace the URL with the actual cTrip URL
    const trainUrl = "https://www.12306.cn/en/index.html";
    Linking.openURL(trainUrl);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Train Station Information</Text>

      {/* First train Card */}
      <Card style={styles.card}>
        <Card.Cover 
          source={require('../../../assets/images/UsefulTool/Train_GuangzhouRailwayStation.jpg')}
          style={styles.cardCover} 
        />
        <Card.Content>
          <Text style={styles.cardTitle}>Guangzhou Railway Station</Text>
          <Text style={styles.cardDescription}>This is one of the main railway stations in Guangzhou, serving both high-speed and conventional trains. Trains from Guangzhou Railway Station connect to various destinations within Guangdong Province and other parts of China.</Text>
          <Text style={styles.iconText}>
            {"\n"}
            <Icon name="metro" size={18} color='gray' /> Line2 & Line5: Guangzhou Railiway Station {"\n"}
          </Text>
        </Card.Content>
      </Card>

      {/* Second train Card */}
      <Card style={styles.card}>
        <Card.Cover 
          source={require('../../../assets/images/UsefulTool/Train_GuangzhouEastRailwayStation.jpeg')}
          style={styles.cardCover} 
        />
        <Card.Content>
          <Text style={styles.cardTitle}>Guangzhou East Railway Station</Text>
          <Text style={styles.cardDescription}>It mainly handles high-speed trains and is one of the major transportation hubs in the city. And trains from this station often travel to destinations such as Shenzhen, Hong Kong, Beijing, Shanghai, and other cities along the high-speed rail network.</Text>
          <Text style={styles.iconText}>
            {"\n"}
            <Icon name="metro" size={18} color='gray' /> Line1 & Line3: Guangzhou East Railway Station {"\n"}
          </Text>
        </Card.Content>
      </Card>

      {/* Third train Card */}
      <Card style={styles.card}>
        <Card.Cover 
          source={require('../../../assets/images/UsefulTool/Train_GuangzhouSouthRailwayStation.jpeg')}
          style={styles.cardCover} 
        />
        <Card.Content>
          <Text style={styles.cardTitle}>Guangzhou South Railway Station</Text>
          <Text style={styles.cardDescription}>This station is a major high-speed railway station in Guangzhou and is one of the busiest in China. It is a key station on the Beijing-Guangzhou high-speed rail line, connecting to cities such as Wuhan, Changsha, and other destinations along the route.</Text>
          <Text style={styles.iconText}>
            {"\n"}
            <Icon name="metro" size={18} color='gray' /> Line2 & Line22 & Foshan Line2: Guangzhou South Railway Station {"\n"}
          </Text>
        </Card.Content>
      </Card>

      {/* Fourth train Card */}
      <Card style={styles.card}>
        <Card.Cover 
          source={require('../../../assets/images/UsefulTool/Train_GuangzhouNorthRailwayStation.jpeg')}
          style={styles.cardCover} 
        />
        <Card.Content>
          <Text style={styles.cardTitle}>Guangzhou North Railway Station</Text>
          <Text style={styles.cardDescription}>It primarily serves high-speed trains and is located in the northern part of the city. And its routes are linked to the high-speed rail network, connecting to cities in northern China.</Text>
          <Text style={styles.iconText}>
            {"\n"}
            <Icon name="metro" size={18} color='gray' /> Line 9: Guangzhou North Railway Station {"\n"}
          </Text>
        </Card.Content>
      </Card>

      {/* Last train Card */}
      <Card style={styles.card}>
        <Card.Cover 
          source={require('../../../assets/images/UsefulTool/Tool_Train12306.png')}
          style={styles.cardCover}  
        />
        <Card.Content>
          <Text style={styles.cardTitle}>Booking Option</Text>
          <Text style={styles.cardDescription}>China Train 12306 allows users to book train tickets online for both high-speed trains and conventional trains operating across the vast railway network in China. </Text>
          {/*<Text>
            {"\n"}
            <ClockIcon size={18} color='gray' /> Duration: 50 min{"\n"}
            <CurrencyYenIcon size={18} color='gray' />Price: 5 RMB{"\n"}
            <DevicePhoneMobileIcon size={18} color='gray' /> Mobile ticket, Transportation card{"\n"}
            <GlobeAltIcon size={18} color='gray' /> Mandarin, Cantonese, English, French, Spanish, Japanese, Korean, and Arabic
          </Text>*/}
          {/* CTrip Button */}
          <TouchableOpacity style={styles.trainButton} onPress={handleTrainPress}>
            <Text style={styles.trainButtonText}>Book your train ticket on Train12306</Text>
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
  trainButton: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  trainButtonText: {
    color: "white",
    fontSize: 18,
  },  
  iconText: {
    marginLeft: 10,
    color: 'green',
    fontWeight: 'bold',
  }
}
);


//Installed npm i react-native-vector-icons