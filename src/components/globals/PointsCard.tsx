import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { formatNumberWithCommas } from '../../utils/dataFormats';
import { capitalizeFirstChar } from '../../utils/stringModifier';
type PointsCardProps = {
    month: string,
    points: number
};

export default function PointsCard({ month, points }: PointsCardProps) {
    return (
        <View style={styles.pointsCard}>
            <Text style={styles.pointsCardMonthText}>{capitalizeFirstChar(month)}</Text>
            <Text style={styles.pointsText}>{formatNumberWithCommas(points)} pts</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pointsCard: {
        backgroundColor: '#334FFA',
        height: 143,
        maxHeight: 143,
        width: 286,
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowColor: "rgba(0,0,0,0.5)",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4
    },
    pointsCardMonthText: {
        marginLeft: 19,
        marginTop: 21,
        marginBottom: 7,
        color: '#FFF',
        fontSize: 16,
        fontWeight: '800',
        position: 'absolute',
        left: 0,
        top: 0
    },
    pointsText: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: '800'
    },
})