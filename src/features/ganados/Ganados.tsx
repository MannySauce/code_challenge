import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenHeader from '../../components/globals/ScreenHeader';
import SectionTitle from '../../components/globals/SectionTitle';
import PointsCard from '../../components/globals/PointsCard';
import PurchaseList from '../../components/globals/PurchaseList';
import Button from '../../components/globals/Button';
import { Purchase } from '../../types/purchaseTypes';
import { extractMonth } from '../../utils/dataFormats';
import { getPoints } from '../../utils/pointsHelper';
import axios from 'axios';
export default function Ganados() {
    const [data, setData] = useState<Purchase[]>([]);
    const navigation = useNavigation();
    useEffect(() => {
        getData();
    }, []);

    function getData() {
        axios.get('https://6222994f666291106a29f999.mockapi.io/api/v1/products')
            .then(res => {
                setData(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleNavigation = () => {
        navigation.navigate("Todos" as never)
    };

    return (
        <SafeAreaView style={styles.screenContainer}>
            <ScreenHeader title='Bienvenido de vuelta!' subTitle='Ruben Rodriguez' />
            <SectionTitle title='TUS PUNTOS' />
            <PointsCard month={extractMonth(new Date)} points={data ? getPoints(data) : 0}></PointsCard>
            <SectionTitle title='TUS MOVIMIENTOS' />
            <View style={styles.purchaseListAndBtnContainer}>
                <PurchaseList purchases={data} />
                <Button title="Todos" onPress={handleNavigation} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },
    purchaseListAndBtnContainer: {
        marginHorizontal: 20
    }
})