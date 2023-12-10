import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';{/*wp=> width device screen, hp 0> height device screen */}
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigation = useNavigation();
    
    return(
        <View style= {styles.container}>
            {/*background image*/}
            <Image
                source={require('../../assets/images/WelcomePage.jpg')}
                style = {styles.image}
            />
            <View style = {styles.contentContainer}> 
                <LinearGradient
                // Background Linear Gradient
                colors={['rgba(3,105,161,0.8)', 'transparent']}
                style= {styles.linearGradient}
                />
                <View style = {styles.textstyle}>
                    <Text style = {styles.title}>Welcome to Guangzhou!</Text>
                    <Text style={styles.subtitle}>Exploring the best in Guangzhou</Text>
                </View>
            <TouchableOpacity onPress={()=> navigation.navigate('Main')} style = {styles.button}>
                <Text style= {styles.buttonText}>Let's go!</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-end',
    }, //this work 
    image: {
      position: 'absolute',
      width:'100%',
      height: '100%'
    }, // this work 
    contentContainer: {
      position: 'relative',
      padding: wp(5),
      paddingBottom: hp(15),
      justifyContent: 'flex-end',
    }, // this is working 
    linearGradient: {
      width: wp(100),
      height: hp(100),
      position: 'absolute',
      bottom: 0
    }, // this work
    textstyle: {
      marginBottom: wp(5)
    },
    title: {
      color: 'white',
      fontSize: wp(12),
      fontWeight: 'bold',
    },
    subtitle: {
      color: '#c0c0c0',
      fontSize: wp(4),
      fontWeight: 'medium',
    },
    button: {
      backgroundColor: '#ff4500',
      alignSelf: 'center',
      paddingVertical: wp(3),
      paddingHorizontal: wp(12),
      borderRadius: wp(7),
    },
    buttonText: {
      color: 'white',
      fontSize: wp(5),
      fontWeight: 'bold',
    }
  }); 