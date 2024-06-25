import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const SectionHome = ({url, title, content, onclickFc}) => {
  return (
    <View style={styles.containerSection}>
    <Image
        style={styles.image}
        source={url}
    />
    <View style={styles.containerText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}
        </Text>
        <Pressable
            onPress={onclickFc}
            style={({ pressed }) => ({
                opacity: pressed ? 0.9 : 1,
                backgroundColor: pressed ? colors.green100 : colors.grayNatural,
                display: 'flex',
                alignItems: 'center',
                width: '40%',
                borderRadius: 18
            })
            }>
            <Text style={styles.btn}>VER MAS</Text>
        </Pressable>
    </View>
</View>
  )
}

export default SectionHome

const styles = StyleSheet.create({
    containerSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 35,
        padding: 10,
    },
    image:{
        width: 100,
        height: 100
    },
    containerText:{
        paddingHorizontal: 10,
        display: 'flex',
        flexWrap: 'nowrap',
        width: 300,
    },
    title:{
        fontSize: 20,
        marginBottom: 6,
        fontWeight: '700'
    },
    content:{
        color: colors.green900,
        fontFamily: 'Poppins-Regular',
        marginBottom: 8
    },
    btn:{
        paddingHorizontal: 3,
        paddingVertical: 2
    }
})