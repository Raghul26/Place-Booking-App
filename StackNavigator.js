import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './Screen/HomeScreen';
import HotelScreen from "./Screen/HotelScreen"
import HotelBooking from './Screen/HotelBooking';
import TicketScreen from './Screen/TicketScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Hotel" component={HotelScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HotelBooking" component={HotelBooking} options={{ headerShown: false }} />
                <Stack.Screen name="Ticket" component={TicketScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})