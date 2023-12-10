import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, Image, TouchableOpacity, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from "../component/Categories";
import WeatherCard from'../component/WeatherCard';
import { getWeatherData } from "../API/WeatherService";
import axios from "axios";
import UsefulTools from "../component/UsefulTools";



export default function HomeScreen() {

    const [ searchQuery, setSearchQuery ] = useState('');
    const [ weather, setWeather ] = useState(null);

    {/*Google Custom Search Using Google Custom Search JSON */}
    const handleSearch = async () => {
        const apiKey= 'AIzaSyDd1y_fiD6CRDX-OaUycLSgkzQF43l9Y80';
        const cx = '9065580cf44ba434a';

        try {
            const googleSearchURL = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
                searchQuery
              )}&key=${apiKey}&cx=${cx}`;

            const response = await axios.get(googleSearchURL);
            console.log('API Resoponse:', response.data);
            
            const firstResultURL = response.data.items[0].link;
            Linking.openURL(firstResultURL);
        }catch (error) {
            console.error('API ERROR:', error);
        }
    }

    useEffect(() => {
        const fetchWeatherData = async () => {
          try {
            const weatherData = await getWeatherData('Guangzhou');
            setWeather(weatherData);
            console.log('Weather Data:', weatherData);
          } catch (error) {
            console.log('Error fetching weather data:', error);
          }
        };
        fetchWeatherData();
      }, []);
    return(
        <SafeAreaView style = {styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style= {{marginTop:24, marginBottom: 24}}>
            {/*Welcome Text */}
            <View style= {styles.welcomeTextContrainer}>
                <Text style= {{
                    fontSize: wp(7),
                    fontWeight: 'bold',
                    color: '#000000',//black
                    justifyContent: 'space-around',
                    marginLeft: 18
                }}>
                    Let's Discover 
                </Text>
                {/*<TouchableOpacity>*/}
                    <Image source={require('../../assets/images/GuangzhouLogo.jpeg')} style={{height: wp(12), width: wp(12)}} />
                {/*</TouchableOpacity>*/}
            </View>
            {/*Search Bar */}
            <View style = {{ marginHorizontal: 1, marginTop: 10, marginBottom: 0}}>
                <View style= {styles.searchBarContainer}>
                <MagnifyingGlassIcon size={20} strokeWidth={3} color='gray'/>
                <TextInput
                    placeholder="search by Google"
                    placeholderTextColor={'gray'}  
                    style = { styles.textinput}   
                    value= {searchQuery}
                    onChangeText ={(text) => setSearchQuery(text)}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Text style={styles.searchButton}>Search</Text>
                </TouchableOpacity>
                </View>
            </View>

            {/*Weather data*/}
            <View style = {{ marginTop: 15}}>
               {/* <Text style={styles.weatherHeading}>Weather Data</Text>*/}
                {weather && <WeatherCard weather={weather} />}
            </View>

            {/*Categories */} 
            <View style = {{ marginBottom: 10}}>
                <Categories/>
            </View>

            {/*Userful Tools */} 

            {/*Map */} 
            {/*<View>
                <HomeMapView/>
            </View>*/}

            {/*Destinations */}
            {/*<View style = {{ marginBottom: 16}}>
                <Destinations/>
            </View> */}

            {/*Useful Tools*/}
            <View>
                <Text style={styles.toolText}>Useful Tools</Text>
                <UsefulTools />
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'whitesmoke',//'aliceblue'//'whitesmoke'//warm white'#FDF5E6'//light gray '#CCCCCC', 
    },
    welcomeTextContrainer: {
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    searchBarContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: 'white', 
        borderRadius: 9999, 
        padding: 13, 
        marginLeft: 15,
        marginRight: 15,
    },
    searchButton: {
        color: 'dodgerblue',
        marginLeft: 10,
        fontWeight: 'bold'
      },
    textinput: {
        flex:1,
        fontSize: 16,
        marginBottom: 1,
        paddingLeft: 5,
        letterSpacing: 0.05,
    },
    weatherHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    toolText:{
        color: 'black',//'#f3f4f6',//'#ff4500',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft:20,
        marginTop:15,
    }
  });