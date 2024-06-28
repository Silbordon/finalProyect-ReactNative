import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import AboutUsStackNavigator from "./AboutUsStackNavigator";
import AdoptionStackNavigator from "./AdoptionStackNavigator";
import DonationsStackNavigator from "./DonationsStackNavigator";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AboutUsScreen" component={AboutUsStackNavigator} /> 
            <Stack.Screen name="DonationScreen" component={DonationsStackNavigator} /> 
            <Stack.Screen name="AdoptionScreen" component={AdoptionStackNavigator} /> 
          </Stack.Navigator>
  );
}