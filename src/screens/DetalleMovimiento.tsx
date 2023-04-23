import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react';
import SectionTitle from '../components/globals/SectionTitle';
import {
    useSafeAreaInsets
} from 'react-native-safe-area-context';
import Button from '../components/globals/Button';
import { useNavigation } from '@react-navigation/native';

export default function DetalleMovimiento() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            paddingTop: 0,
            paddingBottom: insets.bottom + 0,
            paddingLeft: insets.left,
            paddingRight: insets.right
        }}>
            <View style={{ height: 150, justifyContent: 'flex-end', backgroundColor: '#CFD6FF' }}>
                <Text style={{ margin: 20, fontSize: 24, fontWeight: '800' }}>Nombre del producto</Text>
            </View>
            <View style={{
                height: 350, backgroundColor: 'white', margin: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,

                elevation: 4,
            }}>
                <Image
                    source={require('../assets/imgs/Placeholder_view_vector.png')}
                    defaultSource={require('../assets/imgs/Placeholder_view_vector.png')}
                    style={{ height: 200, width: 200, padding: 75 }}
                />
            </View>
            <SectionTitle title="Detalles del producto:" />
            <Text style={{ fontSize: 16, fontWeight: '800', margin: 20 }}>Comprado el 26 de enero, 2019</Text>
            <SectionTitle title="Con esta compra acumulaste" />
            <Text style={{ fontSize: 24, fontWeight: '800', marginLeft: 20, marginTop: 12 }}>100 puntos</Text>
            <Button title='Aceptar'></Button>
        </View>
    )
}

const styles = StyleSheet.create({})