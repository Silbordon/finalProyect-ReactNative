import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraLighItalic': require('./assets/fonts/Poppins-ExtraLightItalic.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 30 }}>Inter Black</Text>
      <Text style={{ fontFamily: 'Poppins-ExtraLighItalic', fontSize: 30 }}>Inter Black</Text>
      <Text style={{ fontFamily: 'Poppins-Light', fontSize: 30 }}>Inter Black</Text>
      <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 30 }}>Inter Black</Text>
      <Text style={{ fontSize: 20 }}>Platform Default</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

