import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home() {
    return (
        <View style={styles.screenContainer}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})