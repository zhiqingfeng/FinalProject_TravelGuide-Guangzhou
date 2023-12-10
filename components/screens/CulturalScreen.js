import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
//import { HeartIcon } from 'react-native-heroicons/outline';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { culturalData } from '../constants';

export default function CulturalScreen() {

    const navigation = useNavigation();
    const [culturalData2, setCulturalData2] = useState(culturalData);
   
    useEffect(() => {
        const loadLikeData3 = async () => {
            try{
                const storedLikedData3 = await AsyncStorage.getItem('likedData3');
                if(storedLikedData3) {
                    setCulturalData2(JSON.parse(storedLikedData3));
                }
            }catch (error) {
                console.error('Error loading liked data:', error);
            }
        };
    loadLikeData3();
    }, []);

    const toggleLike = async (index) => {
        try{
            const updatedData3 = [...culturalData2];
            updatedData3[index].liked = !updatedData3[index].liked;

            await AsyncStorage.setItem('likedData3', JSON.stringify(updatedData3));
            console.log('Like data stored successfully');

            setCulturalData2(updatedData3);
        }catch(error){
            console.error('Error stroing liked data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/*Cultural sections*/}
                {culturalData2.map((cultural, index) => (
                    <SafeAreaView key={cultural.title} style={styles.safeArea}>
                        <TouchableOpacity onPress={() => toggleLike(index)} style={styles.likeButton}>
                            {cultural.liked ? (
                                <Icon name='heart' size={24} color='#FF0000' />
                            ) : (
                                <Icon name='heart' size={24} color='gray' />
                            )}
                        </TouchableOpacity>
                        <Text style={styles.sectionTitle}>{cultural.title}</Text>
                        <Image source={cultural.image} style={styles.sectionImage} />
                        <Text style={styles.sectionDescription}>{cultural.description}</Text>
                    </SafeAreaView>
                ))}
            </ScrollView>
        </View>
    )
};

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
        color: '#333333', 
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
        color: '#555', 
        padding: 20,
      }
});