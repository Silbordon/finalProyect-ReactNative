import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../global/colors';

const TestimonioItem = ({ testimonio }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{testimonio.message}</Text>
      <Text style={styles.familyName}>{testimonio.familyName}</Text>
      <Text style={styles.date}>{testimonio.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 8,
    marginHorizontal: 8,
    padding: 15,
    width: 200, 
    elevation: 5, 
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  message: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  familyName:{
    fontFamily:'Poppins-ExtraLighItalic'
  },
  date:{
    fontFamily:'Poppins-ExtraLighItalic'
  }
});

export default TestimonioItem;
