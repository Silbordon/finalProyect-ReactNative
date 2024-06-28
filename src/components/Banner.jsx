
import { Image, Pressable, StyleSheet, View, ScrollView, Text } from "react-native";
import { colors } from "../global/colors";

// import { NavigationProp, useNavigation } from "@react-navigation/native";


const Banner = ({navigation}) => {
  return (
    <View style={styles.containerBanner}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/dog3.jpeg")}
          />
          <Pressable
            onPress={() => navigation.navigate('Adoptions')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.9 : 1,
            })
            }>
              <Text style={styles.textBanner}>ADOPTAME</Text>
          </Pressable>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/gatoperro.jpeg")}
          />
          <Pressable
            onPress={() => navigation.navigate('Donations')}
            style={({ pressed }) => ({
              marginHorizontal: 4,
              paddingBottom: 20,
              paddingHorizontal: 7,
              opacity: pressed ? 0.9 : 1,
            })
            }>
              <Text style={styles.textBanner}>TU DONACION SALVA VIDAS</Text>
          </Pressable>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/nosotros.jpeg")}
          />
          <Pressable
            onPress={() => navigation.navigate('AboutUs')}
            style={({ pressed }) => ({
              marginHorizontal: 4,
              paddingBottom: 20,
              paddingHorizontal: 7,
              opacity: pressed ? 0.9 : 1,
            })
            }>
              <Text style={styles.textBanner}>NUESTRA MISION</Text>
          </Pressable>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/gatos2.jpeg")}
          />
          <Pressable
            onPress={() => navigation.navigate('Adoptions')}
            style={({ pressed }) => ({
              marginHorizontal: 4,
              paddingBottom: 20,
              paddingHorizontal: 7,
              opacity: pressed ? 0.9 : 1,
            })
            }>
              <Text style={styles.textBanner}>ADOPTAME</Text>
          </Pressable>
        </View>

        </ScrollView>
        </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  containerBanner: {
    flex: 1,
    marginHorizontal: 1,
  },
  imageContainer: {
    width: 380,
    marginRight: 10,
    flex: 1,
    borderRadius: 5,
    borderRadius: 18,
    shadowColor: colors.grayNatural,
    shadowOffset: {
        width: 0,
        height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    backgroundColor: colors.gray100,
    elevation: 9,
},
  image: {
    borderRadius: 10,
    flex: 1,
    height: 300,
    width: 380
  },
  textBanner:{
    fontFamily: 'Poppins-Bold',
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: 12,
    paddingBottom: 5,
    fontSize: 15,
    color: colors.green900
  }

});
