import React, { useEffect, useState } from 'react';
import { ScrollView, Image, Text, StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { foodData } from '../constants';
//import { HeartIcon } from 'react-native-heroicons/outline';
import Icon from 'react-native-vector-icons/AntDesign';

export default function FoodScreen() {
    
    const navigate = useNavigation();
    const [foodData2, setFoodData2] = useState(foodData);
    
    useEffect(() => {
        const loadLikeData2 = async () => {
            try{
                const storedLikedData2 = await AsyncStorage.getItem('likedData2');
                if(storedLikedData2) {
                    setFoodData2(JSON.parse(storedLikedData2));
                }
            }catch (error) {
                console.error('Error loading liked data:', error);
            }
        };
    loadLikeData2();
    }, []);

    const toggleLike = async (index) => {
        try{
            const updatedData2 = [...foodData2];
            updatedData2[index].liked = !updatedData2[index].liked;

            await AsyncStorage.setItem('likedData2', JSON.stringify(updatedData2));
            console.log('Like data stored successfully');

            setFoodData2(updatedData2);
        }catch(error){
            console.error('Error stroing liked data:', error);
        }
    };

    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/*Food sections*/}
                {foodData2.map((food, index) => (
                    <SafeAreaView key={food.title} style={styles.safeArea}>
                        <TouchableOpacity onPress={() => toggleLike(index)} style={styles.likeButton}>
                            {food.liked ? (
                                <Icon name='heart' size={24} color='#FF0000' />
                            ) : (
                                <Icon name='heart' size={24} color='gray' />
                            )}
                        </TouchableOpacity>
                        <Text style={styles.sectionTitle}>{food.title}</Text>
                        <Image source={food.image} style={styles.sectionImage} />
                        <Text style={styles.sectionDescription}>{food.description}</Text>
                    </SafeAreaView>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0, 
      },
    scrollViewContent: {
        padding: 16,
      },
    backButton: {
        flexDirection: 'row',
        alignItems: 'left',
        backgroundColor: '#f9f9f9', 
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
        padding: 16, 
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
