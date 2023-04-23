import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type ButtonProps = {
    title: string,
    onPress?: () => void
};

export default function Button({ title, onPress }: ButtonProps) {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.todosBtn}>
            <Text style={styles.todosBtnText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todosBtn: {
        marginTop: 43,
        maxHeight: 50,
        height: 50,
        width: '100%',
        backgroundColor: '#334FFA',
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    todosBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '800'
    }
})