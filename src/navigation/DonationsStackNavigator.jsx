import { StyleSheet} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Donation from '../screens/Donation';

const Stack = createNativeStackNavigator();

const DonationsStackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="DonationScreen"
    screenOptions={{headerShown: false}}
  >
    <Stack.Screen name="DonationScreen" component={Donation} />
  </Stack.Navigator>
  )
}

export default DonationsStackNavigator

const styles = StyleSheet.create({})




