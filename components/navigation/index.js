import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen'
import SightseeingScreen from '../screens/SightseeingScreen';
import FoodScreen from '../screens/FoodScreen';
import CulturalScreen from '../screens/CulturalScreen';
import BusScreen from '../screens/ToolScreen/BusScreen';
import MetroScreen from '../screens/ToolScreen/MetroScreen';
import FlightScreen from '../screens/ToolScreen/FlightScreen';
import TrainScreen from '../screens/ToolScreen/TrainScreen';
import HotelScreen from '../screens/ToolScreen/HotelScreen';
import MapScreen from '../screens/MapScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CalendarScreen from '../screens/CalendarScreen';
//import { HomeIcon, MapIcon, HeartIcon } from 'react-native-heroicons/outline';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{ 
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <EntypoIcon name='home' size={25} strokeWidth={3} color={color} /> // color provided by the Tab Navigator
            ),
          }} 
        />
        <Tab.Screen 
          name='Map' 
          component={MapScreen} 
          options={{ 
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name='map-pin' size={25} strokeWidth={3} color={color} />
            ), 
            }} 
        />
        <Tab.Screen
          name='Favorite'
          component={FavoriteScreen}
          options={{
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <AntDesignIcon name='heart' size={25} strokeWidth={3} color={color} />
            ),
            }}
        />
        <Tab.Screen
          name='Calendar'
          component={CalendarScreen}
          options={{
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <AntDesignIcon name='calendar' size={25} strokeWidth={3} color={color} />
            ),
            }}
        />
      </Tab.Navigator>
    );
  };

  const StackTabs = () => {
    return(
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Welcome' component={WelcomeScreen} />
          <Stack.Screen name='Main' component={BottomTabs} />
          <Stack.Screen name='Sightseeing' component={SightseeingScreen} options={{ headerShown: true }} />
          <Stack.Screen name='Food' component={FoodScreen} options={{ headerShown: true }} />
          <Stack.Screen name='Cultural' component={CulturalScreen} options={{ headerShown: true }} />
          <Stack.Screen name='Bus' component={BusScreen} options={{ headerShown: true }} />
          <Stack.Screen name='Metro' component={MetroScreen} options={{ headerShown: true }} />
          <Stack.Screen name='Flight' component={FlightScreen} options={{ headerShown: true }} />
          <Stack.Screen name='Train' component={TrainScreen} options={{ headerShown: true }} />
          <Stack.Screen name='Hotel' component={HotelScreen} options={{ headerShown: true }} />

        </Stack.Navigator>
    )
  }
  
  const Navigation = () => {
    return (
      <NavigationContainer>
        <StackTabs />
      </NavigationContainer>
    );
  };

export default Navigation;
