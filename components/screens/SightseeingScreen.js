import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, Image, Text, TouchableOpacity, StyleSheet, SafeAreaView, View } from 'react-native';
//import { HeartIcon } from 'react-native-heroicons/outline';
import Icon from 'react-native-vector-icons/AntDesign';
import { sightseeingData } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SightseeingScreen() {

    const [sightseeing, setSightseeing] = useState(sightseeingData);

    useEffect(() => { // to keep the likedData even the app run again 
        const loadLikeData = async () => {
            try{
                const storedLikedData = await AsyncStorage.getItem('likedDataSightseeing'); //AsyncStorage.getItem TO store the updated liked data as a JSON string
                setSightseeing(storedLikedData ? JSON.parse(storedLikedData) : sightseeingData);
            }catch (error) {
                console.error('Error loading liked data:', error);
            }
        };

        loadLikeData();
    }, []); // [] empty array means that this effect runs once on mount

    const toggleLike = async (index) => {
      try {
          const updatedData = [...sightseeing];
          updatedData[index].liked = !updatedData[index].liked;
  
          await AsyncStorage.setItem('likedDataSightseeing', JSON.stringify(updatedData));
          console.log('Liked data stored successfully');
  
          setSightseeing(updatedData);
      } catch (error) {
          console.error('Error storing liked data:', error);
      }
  };

    return (
      <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {sightseeing.map((section, index) => {
          //console.log(`Index: ${index}, Image: ${section.image}, Title: ${section.title}, Description: ${section.description}`);
          return (
            <SafeAreaView key={section.title} style={styles.safeArea}>
              <TouchableOpacity onPress={() => toggleLike(index)} style={styles.likeButton}>
                {section.liked ? (
                  <Icon name='heart' size={24} color='#FF0000' />
                ) : (
                  <Icon name='heart' size={24} color='gray' />
                )}
              </TouchableOpacity>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Image source={section.image} style={styles.sectionImage} />
              <Text style={styles.sectionDescription}>{section.description}</Text>
            </SafeAreaView>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0, // remove the gap
      },
    scrollViewContent: {
        padding: 16,
      },
    backButton: {
        flexDirection: 'row',
        alignItems: 'left',
        backgroundColor: '#f9f9f9', // Background color
        padding: 12,
        borderRadius: 8,
        margin: 16,
      },
      backButtonText: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333', // Text color
      },
      likeButton: {
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 1,
      },    
      safeArea: {
        backgroundColor: 'white',
        padding: 16, // Adjust the padding to add space around the content
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
      },
      sectionTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        padding: 10,
        marginBottom: 12,
        color: '#333333', // Orange color
        textTransform: 'capitalize',
        letterSpacing: 0.5,
      },
      sectionImage: {
        width: '90%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 8,
        borderRadius: 8,
        alignSelf:'center', 
      },
      sectionDescription: {
        fontSize: 17,
        color: '#555', // Dark gray
        padding: 20,
      }
});

//created the FaviousScreen for collecting the data of toggleLike from Sightseeing&Food&Cultural Screens.