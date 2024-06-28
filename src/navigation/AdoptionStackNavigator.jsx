import { StyleSheet} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Adoptions from '../screens/Adoptions';

const Stack = createNativeStackNavigator();

const AdoptionStackNavigator = () => {
    return (
        <Stack.Navigator
        initialRouteName="AdoptionScreen"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="AdoptionScreen" component={Adoptions} />
      </Stack.Navigator>
      )
}

export default AdoptionStackNavigator

const styles = StyleSheet.create({})







