
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import TestimonialItem from './TestimonialItem';
import testimonyData from '../data/testimonios.json'


const HorizontalCarousel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TESTIMONIOS</Text>  
      <FlatList
        data={ testimonyData}
        renderItem={({ item }) => <TestimonialItem testimonio={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  title:{
      marginHorizontal: 25,
      marginBottom: 10,
      fontFamily: "Poppins-Bold",
      fontSize: 20
  }
});

export default HorizontalCarousel;
