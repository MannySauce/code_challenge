import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import React from 'react'
import { Purchase } from '../../types/purchaseTypes';
import { formatDate } from '../../utils/dataFormats';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamsList } from '../../navigation/types/screenNavigations';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type PurchaseItemProps = {
    item: Purchase
};

export default function PurchaseItem({ item }: PurchaseItemProps) {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('DetalleMovimiento', { item })} style={styles.itemContainer}>
            <Image
                defaultSource={require('../../assets/imgs/Placeholder_view_vector.png')}
                source={{ uri: item?.image }}
                style={styles.itemImgContainer}
            />
            <View style={styles.itemDescriptionContainer}>
                <Text numberOfLines={2} style={styles.itemNameText}>{item?.product}</Text>
                <Text style={styles.itemDateText}>{formatDate(item?.createdAt)}</Text>
            </View>
            <View style={styles.itemPointsContainer}>
                {item?.is_redemption ?
                    <Text style={[styles.itemOperationIndicatorText, { color: "#FF0000" }]}>-</Text>
                    :
                    <Text style={styles.itemOperationIndicatorText}>+</Text>
                }
                <Text style={styles.itemPointsText}>{item?.points}</Text>
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
        maxWidth: 180,
        minWidth: 180
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
        flexDirection: 'row',
        position: 'absolute',
        right: 43
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
        right: 0
    }
})