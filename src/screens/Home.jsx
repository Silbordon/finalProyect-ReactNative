import { StyleSheet, View, Text, ScrollView, Image, Pressable } from 'react-native'
import { colors } from '../global/colors'
import Banner from '../components/Banner';
import SectionHome from '../components/SectionHome';
import  HorizontalCarousel  from '../components/HorizontalCarousel';



const Home = ({ navigation, route }) => {

    return (
        <ScrollView>
            <Banner />
            <View style={styles.sectionContainer}>
                <SectionHome
                    url={require('../../assets/images/logo.png')}
                    title={'CONOCENOS'}
                    content={'Somos un equipo de personas impulsadas por la empatía hacia los animales, reconociéndolos como nuestros semejantes debido a su capacidad para experimentar placer, alegría, dolor y sufrimiento.'}
                    onclickFc={() => console.log("sil ver mas")}
                />
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/gato3.jpeg')}
                    />
                    <Pressable
                        onPress={() => console.log("btn-dona")}
                        style={({ pressed }) => ({
                            width: 200,
                            display: 'flex',
                            marginTop: 10,
                            alignItems: 'center',
                            opacity: pressed ? 0.9 : 1,
                            backgroundColor: pressed ? colors.green100 : colors.grayNatural,
                            borderRadius: 18
                        })
                        }
                    >
                        <Text style={styles.btnHome}>Dona y ayudanos a salvar mas vidas</Text>
                    </Pressable>
                </View>
                <SectionHome
                    url={require('../../assets/images/pup_15.png')}
                    title={'ADOPTA'}
                    content={'Al pensar en adoptar, es crucial tener en cuenta diversos factores para garantizar una convivencia armoniosa. Evalúa el espacio disponible en tu hogar, el tiempo que puedes dedicar al juego y paseo, así como los costos asociados con la alimentación, atención veterinaria y cuidado durante las vacaciones. Asegúrate de que tu elección de mascota se ajuste a tu estilo de vida y a la cantidad de tiempo que puedes comprometer.'}
                    onclickFc={() => console.log("sil ver mas")}
                />
            </View>
            <HorizontalCarousel />
        </ScrollView>

    );
}

export default Home

const styles = StyleSheet.create({
    sectionContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    image: {
        flex: 1,
        borderRadius: 100
    },
    imageContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    btnHome: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        padding: 7,
        borderRadius: 20
    }

});