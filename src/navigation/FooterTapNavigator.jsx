import { StyleSheet, Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigator from './HomeStackNavigator'
// import CartStackNavigator from './CartStackNavigator'
// import OrderStackNavigator from './OrderStackNavigator'


/* import Cart from '../screens/Cart'
import Order from '../screens/Order' */
//import { Header } from 'react-native/Libraries/NewAppScreen'


import Header from '../components/Header'
import { colors } from '../global/colors'

import { FontAwesome5 } from "@expo/vector-icons";

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
                <FontAwesome5 name="store" size={24} color={focused ? "black" : colors.lightGray} />
              </View>
            );
          },
        }}
      />
      {/* <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5 name="shopping-cart" size={24} color={focused ? "black" : colors.lightGray} />
              </View>
            );
          },
        }}
      /> */}
      {/* <Tab.Screen
        name="Order"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5
                  name="receipt"
                  size={24}
                  color={focused ? "black" : colors.lightGray}
                />
              </View>
            );
          },
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default FooterTapNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.green700,
        height: 60
    }
})