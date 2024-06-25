import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import HomeStackNavigator from './HomeStackNavigator'
import FooterTapNavigator from './FooterTapNavigator'

const Navigator = () => {
  return (
    <NavigationContainer>
      {/* <HomeStackNavigator /> */}
      <FooterTapNavigator />

    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})