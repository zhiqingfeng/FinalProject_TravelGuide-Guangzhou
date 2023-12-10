// FaviousScreen.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';


const FavoriteScreen = () => {

  const [ favoriteData, setFavoriteData ] = useState([]);

  useEffect(() => {
    const loadFavoriteData = async () => {
      try {
        // get the liked data from each categories
        const likedDataSightseeing = await AsyncStorage.getItem('likedDataSightseeing');
        const likedData2 = await AsyncStorage.getItem('likedData2');
        const likedData3 = await AsyncStorage.getItem('likedData3');
        //combine all the likedData 
        const allLikedData = [
          ...(likedDataSightseeing ? JSON.parse(likedDataSightseeing) : []).filter(item => item.liked), //check if likedData is not null/undefined, if yes it parses the JSON data using JSON-parse, otherwise return empty arrary [];
          ...(likedData2 ? JSON.parse(likedData2) : []).filter(item => item.liked),
          ...(likedData3 ? JSON.parse(likedData3) : []).filter(item => item.liked),
        ];
  
        setFavoriteData(allLikedData);
      } catch (error) {
        console.error('Error loading liked data:', error);
      }
    };
    loadFavoriteData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.title}>Favorite Items</Text>
          {favoriteData.map((item, index) => (
            
          <View key={index} style={styles.favoriteItem}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Image source={item.image} style={styles.itemImage}/>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
      ))}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 12,
    color: '#333333', // Orange color
    textTransform: 'capitalize',
    etterSpacing: 0.5,
  },
  favoriteItem: {
    backgroundColor: 'white',
    padding: 16, // Adjust the padding to add space around the content
    borderRadius: 8,
    marginBottom: 16,
  },
  itemImage: {
    width: '90%',
    height: 200,
    //resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 8,
    alignSelf:'center', 
  },
  itemDescription: {
    fontSize: 17,
    color: '#555', // Dark gray text color
    padding: 20,
  }
});

export default FavoriteScreen;
