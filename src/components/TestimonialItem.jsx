import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TestimonioItem = ({ testimonio }) => {
  return (
    <View style={styles.container}>
      <Image source={testimonio.foto} style={styles.image} />
      <Text style={styles.text}>{testimonio.mensaje}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 10,
    padding: 15,
    width: 300, // Ancho del item del testimonio
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});

export default TestimonioItem;
