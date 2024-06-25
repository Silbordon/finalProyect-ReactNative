import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../../assets/images/logo.png")}
            />
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        backgroundColor: colors.green700,
        justifyContent: "center",
        alignItems: "center",
        display: 'flex',
        flexDirection: 'row'
    },
    text: {
        color: colors.grayNatural,
        fontSize: 22,
        fontFamily: 'Poppins-Bold',
        marginLeft: 10
    },
    image:{
        width: 45,
        height: 45
    }
})