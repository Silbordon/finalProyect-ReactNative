// import { Text, View, StyleSheet, FlatList } from 'react-native';
// import testimonios from '../data/testimonios'
// import CardTestimonials from './TestimonialItem';


// export const HorizontalCarousel = () => {

  
//   return (
//     <View
//       style={styles.carouselContainer}
//     >
//           <Text
//             style={{
//               fontSize: 30,
//               fontWeight: '300',
//             //   marginLeft: 10,
//             //   marginBottom: 10
//             }}
//           >
//            TESTIMONIOS
//           </Text>
        
      


//       <FlatList 
//         data={ testimonios }
//         renderItem={ ({ item }) => (
//           <Text>{item}1</Text>
//         ) }
//         keyExtractor={ (item, index) => `${item.id}-${ index }` }
//         horizontal
//         showsHorizontalScrollIndicator={ false }
//       />
      
      
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     carouselContainer:{
//         backgroundColor: 'green',
//         flex: 1
//     },
// })

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TestimonialItem from './TestimonialItem';

const testimonios = [
  {
    id: 1,
    nombre: "Familia Pérez",
    tipo_mascota: "perro",
    foto: require('../../assets/images/perro1.jpg'),
    mensaje: "Adoptamos a Max hace un año y ha sido la mejor decisión que hemos tomado. Es un perro cariñoso y lleno de energía, ¡nuestra casa nunca ha sido tan feliz!"
  },
  {
    id: 2,
    nombre: "Familia Gómez",
    tipo_mascota: "gato",
    foto: require('../../assets/images/gato1.jpg'),
    mensaje: "Adoptamos a Luna cuando era solo una gatita asustada en la calle. Ahora es la reina de la casa, cariñosa y juguetona. Gracias por permitirnos ser su familia."
  },
  // Agrega más testimonios según sea necesario
];

const HorizontalCarousel = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={testimonios}
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
    marginTop: 20,
  },
});

export default HorizontalCarousel;
