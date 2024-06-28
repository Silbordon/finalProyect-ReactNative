import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { colors } from '../global/colors'



const AboutUs = () => {
    return (
        <ScrollView>
            <View style={styles.aboutContainer}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/nosotros.jpeg')}
                />
                <View style={styles.container}>
                    <View>
                        <Text style={styles.mision}><Text style={styles.title}>Proyecto 4 Patas</Text> nace de la convicción de que para efectuar una transformación real, es esencial comprometerse de forma directa.
                            Somos un equipo de personas impulsadas por la empatía hacia los animales, reconociéndolos como nuestros semejantes debido a su capacidad para experimentar placer, alegría, dolor y sufrimiento.
                        </Text>
                    </View>

                    <View style={styles.stepContainer}>
                        <Text style={styles.stepContainertitle}>Para llevar a cabo esta tarea, hay una serie de pasos que seguir:</Text>
                        <View style={styles.mainStep}>
                            <View style={styles.titleContainerStep}>
                                <Text>PASO 1 – </Text>
                                <Text style={styles.titleStep}>Rescate y recuperación</Text>
                            </View>
                            <Text style={styles.textStep}>Se trata de hacer todo lo posible para dar asilo a la mayor cantidad de animales posible, por un tema de espacio y de presupuesto, no siempre es factible.
                                Una vez que el animal es rescatado, se le realiza un control veterinario para conocer en qué estado se encuentra, se vacuna y desparasita. Paso seguido, se fija fecha para su castración.</Text>
                        </View>

                        <View style={styles.mainStep}>
                            <View style={styles.titleContainerStep}>
                                <Text>PASO 2 – </Text>
                                <Text style={styles.titleStep}> Difusión</Text>
                            </View>
                            <Text style={styles.textStep}>Una vez efectuada la castración, se observa su temperamento, comportamiento e interacción con otros animales y humanos. Luego de un minucioso diagnóstico se determina cuál sería su función en un hogar adoptivo: la de animal de compañía, guardia o alerta y qué tipo de ambiente sería ideal para el mismo: una casa, departamento, o un campo. Asimismo, se evalúa cual sería su adoptante correcto: una familia con niños o solo de adultos.</Text>
                        </View>

                        <View style={styles.mainStep}>
                            <View style={styles.titleContainerStep}>
                                <Text> PASO 3 – </Text>
                                <Text style={styles.titleStep}>Puesta en adopción</Text>
                            </View>
                            <Text style={styles.textStep}>Luego de haber sido evaluado su temperamento, se publican fotos en diferentes medios de comunicación; como internet en redes sociales, sitios dedicados al ofrecimiento de mascotas para adopción y anuncios en los diarios.</Text>
                        </View>

                        <View style={styles.mainStep}>
                            <View style={styles.titleContainerStep}>
                                <Text> PASO 4 – </Text>
                                <Text style={styles.titleStep}>Entrevistas</Text>
                            </View>
                            <Text style={styles.textStep}>Se entrevista a los posibles candidatos para cada adopción. Para poder adoptar es necesario ser mayor de edad, tener el consentimiento de todos los integrantes de la familia y acreditar su identidad mediante la presentación del documento de identidad. También se exige la copia de cualquier servicio a nombre del adoptante para poder cotejar la veracidad del domicilio.</Text>
                        </View>

                        <View style={styles.mainStep}>
                            <View style={styles.titleContainerStep}>
                                <Text> PASO 5 – </Text>
                                <Text style={styles.titleStep}>Seguimientos</Text>
                            </View>
                            <Text style={styles.textStep}>Cada animal se entrega en adopción con una chapa identificadora que tiene números de contacto del grupo y un número que corresponde al animal adoptado. Una vez que se efectuó la adopción, se vuelca esa información a una base de datos, que permite tener acceso a la información para llevar a cabo los seguimientos.Se realizan varios llamados a lo largo del tiempo para ver cómo se adaptó a su nuevo hogar.Muchos adoptantes generan un vínculo con Mascotas en adopción a traves de los años.</Text>
                        </View>

                    </View>

                    <View style={styles.containerCondition}>
                        <Text style={styles.conditionTitle}>CONDICIONES DE ENTREGA DE LOS ANIMALES</Text>
                        <Text style={styles.textcondition}>   Todos los animales se entregan vacunados y desparasitados con certificado avalado por un veterinario y, si son adultos esterilizados. También se entregan con collar, chapita identificatoria y correa.
                            No pedimos ningún tipo de remuneración por cada animal que entregamos en adopción.
                        </Text>
                    </View>

                </View>

            </View >
        </ScrollView >
    )
}

export default AboutUs

const styles = StyleSheet.create({
    aboutContainer: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 250
    },
    container: {
        marginHorizontal: 25,
    },
    mision: {
        fontFamily: 'Poppins-Light',
        textAlign: 'center',
        marginVertical: 20,
        color: colors.green900
    },
    title: {
        fontFamily: 'Poppins-Bold'
    },
    step: {
        fontFamily: 'Poppins-Regular',
    },
    mainStep: {
        marginHorizontal: 20,
    },
    stepContainertitle: {
        textAlign: 'center',
    },
    titleContainerStep: {
        display: 'flex',
        flexDirection: "row",
        marginTop: 10,
        fontFamily: 'Poppins-Regular',
        fontSize: 15
    },
    titleStep: {
        fontFamily: 'Poppins-Bold'
    },
    textStep: {
        marginBottom: 10
    },
    containerCondition:{
        backgroundColor: colors.grayNatural
    },
    conditionTitle:{
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        marginTop: 25
    },
    textcondition:{
        marginHorizontal: 20,
        marginBottom: 25,
    }
})