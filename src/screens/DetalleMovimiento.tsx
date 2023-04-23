import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react';
import SectionTitle from '../components/globals/SectionTitle';
import {
    useSafeAreaInsets
} from 'react-native-safe-area-context';
import Button from '../components/globals/Button';
import { RootStackParamsList } from '../navigation/types/screenNavigations';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type DetalleMovimientoProps = NativeStackScreenProps<RootStackParamsList, 'DetalleMovimiento'>
export default function DetalleMovimiento({ route, navigation }: DetalleMovimientoProps) {
    const insets = useSafeAreaInsets();


    const item = { ...route.params.item };
    return (
        <View style={{
            flex: 1,
            paddingTop: 0,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right
        }}>
            <View style={styles.productTextContainer}>
                <Text style={styles.productText}>{item?.product}</Text>
            </View>
            <View style={styles.imgContainer}>
                <Image
                    source={{ uri: item?.image }}
                    defaultSource={require('../assets/imgs/Placeholder_view_vector.png')}
                    style={styles.imgStyle}
                />
            </View>
            <SectionTitle title="Detalles del producto:" />
            <Text style={styles.dateText}>Comprado el 26 de enero, 2019</Text>
            <SectionTitle title="Con esta compra acumulaste" />
            <Text style={styles.pointsText}>{item?.points}</Text>
            <Button title='Aceptar' onPress={() => navigation.pop()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    productTextContainer: {
        height: 150,
        justifyContent: 'flex-end',
        backgroundColor: '#CFD6FF'
    },
    productText: {
        margin: 20,
        fontSize: 24,
        fontWeight: '800'
    },
    imgContainer: {
        height: 350,
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    imgStyle: {
        height: 200,
        width: 200,
        padding: 75
    },
    dateText: {
        fontSize: 16,
        fontWeight: '800',
        margin: 20
    },
    pointsText: {
        fontSize: 24,
        fontWeight: '800',
        marginLeft: 20,
        marginTop: 12
    }
});  