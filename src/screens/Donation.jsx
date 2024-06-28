import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { colors } from '../global/colors'

const Donation = () => {
    return (
        <ScrollView>
            <View style={styles.donationContainer}>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/nosotros2.jpeg')}
                />
                <View style={styles.container}>
                    <View>
                        <Text style={styles.mision}><Text style={styles.title}>Los aportes económicos</Text> son importantes para pagar tratamientos, estudios médicos y honorarios veterinarios, comprar insumos y alimento, financiar campañas de castración en zonas carenciadas, imprimir material de difusión entre otros.
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.stepContainertitle}>Doná el importe que quieras directamente en nuestra cuenta.</Text>
                    </View>

                    <View style={styles.containerCondition}>
                        <Text style={styles.conditionTitle}>TRANSFERENCIA BANCARIA</Text>
                        <Text style={styles.textcondition}>
                            Banco Provincia
                            Alias: PROYECTO-4-PATAS
                            CBU: 0140059501500205063480
                            Asociación Civil Proyecto 4 Patas
                            Cuenta Corriente en pesos Nº 50634/8
                            Sucursal Nº: 05002 – San Antonio de Padua
                            CUIT: 30-71080554-3
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mision}>SUMATE AYUDANDONOS A AYUDAR !</Text>
                    </View>

                </View>

            </View >
        </ScrollView >
    )
}

export default Donation

const styles = StyleSheet.create({
    donationContainer: {
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
    stepContainertitle: {
        textAlign: 'center',
    },
    containerCondition: {
        backgroundColor: colors.grayNatural,
        marginTop: 20,
        marginBottom: 25
    },
    conditionTitle: {
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        marginTop: 25
    },
    textcondition: {
        marginHorizonal: 25,
        marginBottom: 15,
    }
})