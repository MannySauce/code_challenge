import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type ButtonProps = {
    title: string,
    onPress?: () => void
};

export default function Button({ title, onPress }: ButtonProps) {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.btnContainer}>
            <Text style={styles.btnTitleText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        marginTop: 43,
        maxHeight: 50,
        height: 50,
        width: '90%',
        backgroundColor: '#334FFA',
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    btnTitleText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '800'
    }
})