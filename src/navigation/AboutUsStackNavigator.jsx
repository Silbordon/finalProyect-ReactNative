import { StyleSheet} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutUs from '../screens/AboutUs'

const Stack = createNativeStackNavigator();

const AboutUsStackNavigator = () => {
  return (
    <Stack.Navigator
            initialRouteName="AboutUsScreen"
            screenOptions={{headerShown: false}}
          >
            <Stack.Screen name="AboutUsScreen" component={AboutUs} />
          </Stack.Navigator>
  )
}

export default AboutUsStackNavigator

const styles = StyleSheet.create({})





