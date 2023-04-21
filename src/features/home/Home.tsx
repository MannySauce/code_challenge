import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function Home() {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.screenTitleText}>Bienvenido de vuelta!</Text>
                <Text style={styles.screenSubTitleText}>Ruben Rodriguez</Text>
            </View>
            <View style={{ margin: 20 }}>
                <Text style={{ fontSize: 14, color: '#9B9898', fontWeight: '800' }}>TUS PUNTOS</Text>
            </View>
            <View style={{ backgroundColor: '#334FFA', height: 143, width: 286, alignSelf: 'center' }}>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        marginTop: 60
    },
    screenTitleText: {
        fontSize: 20,
        fontWeight: "800",
        color: "#020202"
    },
    screenSubTitleText: {
        fontSize: 14,
        fontWeight: "400",
        color: "#020202"
    }
})