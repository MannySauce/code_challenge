import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ScreenHeaderProps = {
    title: string,
    subTitle: string
};

export default function ScreenHeader({ title, subTitle }: ScreenHeaderProps) {
    return (
        <View style={styles.screenTitleContainer}>
            <Text style={styles.screenTitleText}>{title}</Text>
            <Text style={styles.screenSubTitleText}>{subTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screenTitleContainer: {
        marginHorizontal: 20
    },
    screenTitleText: {
        fontSize: 20,
        fontWeight: "800",
        color: "#020202"
    },
    screenSubTitleText: {
        fontSize: 14,
        fontWeight: "400",
        color: "#020202",
    },
})