import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import React from 'react'
import { Purchase } from '../../types/purchaseTypes';

type PurchaseItemProps = {
    item?: Purchase
};

export default function PurchaseItem({ item }: PurchaseItemProps) {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.itemContainer}>
            <Image
                source={{ uri: 'https://reactjs.org/logo-og.png' }}
                style={styles.itemImgContainer}
            />
            <View style={styles.itemDescriptionContainer}>
                <Text style={styles.itemNameText}>Nombre del producto</Text>
                <Text style={styles.itemDateText}>26 de enero, 2019</Text>
            </View>
            <View style={styles.itemPointsContainer}>
                <Text style={styles.itemOperationIndicatorText}>+</Text>
                <Text style={styles.itemPointsText}>100</Text>
            </View>
            <View style={styles.itemIconContainer}>
                <Fontisto name="angle-right" size={12} color="#070707" />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 55,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemImgContainer: {
        width: 55,
        height: 55,
        borderRadius: 10,
        marginRight: 11
    },
    itemDescriptionContainer: {
        flexDirection: 'column',
        marginRight: 50
    },
    itemNameText: {
        color: '#000',
        fontSize: 14,
        fontWeight: '800',
        marginBottom: 7
    },
    itemDateText: {
        color: '#000',
        fontSize: 12,
        fontWeight: '400'
    },
    itemPointsContainer: {
        flexDirection: 'row'
    },
    itemOperationIndicatorText: {
        color: '#00B833',
        fontSize: 16,
        fontWeight: '800'
    },
    itemPointsText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '800'
    },
    itemIconContainer: {
        position: 'absolute',
        right: 10
    }
})