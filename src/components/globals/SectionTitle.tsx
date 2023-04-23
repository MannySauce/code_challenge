import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type SectionTitleProps = {
    title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
    return (
        <Text style={styles.sectionTitleText}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    sectionTitleText: {
        fontSize: 14,
        color: '#9B9898',
        fontWeight: '800',
        margin: 20
    },
})