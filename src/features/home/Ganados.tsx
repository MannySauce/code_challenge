import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import { Fontisto } from '@expo/vector-icons';
import React from 'react'

export default function Ganados() {
    const data = [
        {
            "createdAt": "2022-12-09T06:34:25.607Z",
            "product": "Handmade Metal Shoes",
            "points": 16434,
            "image": "https://loremflickr.com/640/480/transport",
            "is_redemption": false,
            "id": "1"
        },
        {
            "createdAt": "2022-12-09T17:02:51.904Z",
            "product": "Recycled Plastic Tuna",
            "points": 92984,
            "image": "https://loremflickr.com/640/480/technics",
            "is_redemption": false,
            "id": "2"
        },
        {
            "createdAt": "2022-12-09T10:20:00.909Z",
            "product": "Fantastic Granite Bacon",
            "points": 42416,
            "image": "https://loremflickr.com/640/480/technics",
            "is_redemption": false,
            "id": "3"
        },
        {
            "createdAt": "2022-12-09T00:30:23.966Z",
            "product": "Fantastic Fresh Gloves",
            "points": 23913,
            "image": "https://loremflickr.com/640/480/city",
            "is_redemption": true,
            "id": "4"
        },
        {
            "createdAt": "2022-12-08T18:54:56.243Z",
            "product": "Rustic Rubber Bacon",
            "points": 69814,
            "image": "https://loremflickr.com/640/480/people",
            "is_redemption": true,
            "id": "5"
        }];

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.screenTitleText}>Bienvenido de vuelta!</Text>
                <Text style={styles.screenSubTitleText}>Ruben Rodriguez</Text>
            </View>
            <View style={{ margin: 20 }}>
                <Text style={{ fontSize: 14, color: '#9B9898', fontWeight: '800' }}>TUS PUNTOS</Text>
            </View>
            <View style={styles.pointsCard}>
                <Text style={{ marginLeft: 19, marginTop: 21, marginBottom: 7, color: '#FFF', fontSize: 16, fontWeight: '800', position: 'absolute', left: 0, top: 0 }}>Diciembre</Text>
                <Text style={{ color: '#FFF', fontSize: 32, fontWeight: '800' }}>10,00.00 pts</Text>
            </View>
            <View style={{ margin: 20 }}>
                <Text style={{ fontSize: 14, color: '#9B9898', fontWeight: '800' }}>TUS MOVIMIENTOS</Text>
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <FlatList
                    data={data}
                    // contentContainerStyle={{ marginVertical: 20 }}
                    ItemSeparatorComponent={() => <View style={{ height: 8 }}></View>}
                    ListHeaderComponent={() => <View style={{ height: 20 }}></View>}
                    ListFooterComponent={() => <View style={{ height: 20 }}></View>}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity key={item.id.toString()} activeOpacity={0.7} style={{ height: 55, marginHorizontal: 10, flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={{ uri: 'https://reactjs.org/logo-og.png' }}
                                    style={{ width: 55, height: 55, borderRadius: 10, marginRight: 11 }}
                                />
                                <View style={{ flexDirection: 'column', marginRight: 50 }}>
                                    <Text style={{ color: '#000', fontSize: 14, fontWeight: '800', marginBottom: 7 }}>Nombre del producto</Text>
                                    <Text style={{ color: '#000', fontSize: 12, fontWeight: '400' }}>26 de enero, 2019</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: '#00B833', fontSize: 16, fontWeight: '800' }}>+</Text>
                                    <Text style={{ color: '#000', fontSize: 16, fontWeight: '800' }}>100</Text>
                                </View>
                                <View style={{ position: 'absolute', right: 10 }}>
                                    <Fontisto name="angle-right" size={12} color="#070707" />
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    style={{ maxHeight: 350, height: 350, backgroundColor: '#fff', borderRadius: 10, }}
                />
                <TouchableOpacity activeOpacity={0.7} style={{ marginTop: 43, maxHeight: 50, height: 50, width: '100%', backgroundColor: '#334FFA', alignSelf: 'center', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '800' }}>Todos</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },
    screenTitleText: {
        fontSize: 20,
        fontWeight: "800",
        color: "#020202"
    },
    screenSubTitleText: {
        fontSize: 14,
        fontWeight: "400",
        color: "#020202"
    },
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
    }
})