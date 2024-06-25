import { StyleSheet, Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigator from './HomeStackNavigator'
import AdoptionStackNavigator from './AdoptionStackNavigator'
import DonationsStackNavigator from './DonationsStackNavigator'
import AboutUsStackNavigator from './AboutUsStackNavigator'
// import CartStackNavigator from './CartStackNavigator'
// import OrderStackNavigator from './OrderStackNavigator'


/* import Cart from '../screens/Cart'
import Order from '../screens/Order' */
//import { Header } from 'react-native/Libraries/NewAppScreen'


import Header from '../components/Header'
import { colors } from '../global/colors'

import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

const FooterTapNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return <Header title={route.name} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name="Proyecto 4 Patas"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5 name="home" size={28}color={focused ? "black" : colors.lightGray} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Adopciones"
        component={AdoptionStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome6 name="shield-dog" size={28} color={focused ? "black" : colors.lightGray} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Donations"
        component={DonationsStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5 name="hand-holding-heart"  size={28} color={focused ? "black" : colors.lightGray} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="AboutUs"
        component={AboutUsStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5 name="users"  size={28} color={focused ? "black" : colors.lightGray} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default FooterTapNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.green700,
        height: 55
    }
})