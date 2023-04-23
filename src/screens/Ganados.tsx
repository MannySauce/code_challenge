import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenHeader from '../components/globals/ScreenHeader';
import SectionTitle from '../components/globals/SectionTitle';
import PointsCard from '../components/globals/PointsCard';
import PurchaseList from '../components/globals/PurchaseList';
import Button from '../components/globals/Button';
import { extractMonth } from '../utils/dataFormats';
import { getPoints } from '../utils/pointsHelper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamsList } from '../navigation/types/screenNavigations';
import usePurchases from '../hooks/usePurchases';
export default function Ganados() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList, 'Ganados'>>();

    const { data } = usePurchases();

    const handleNavigation = () => {
        navigation.navigate("Todos")
    };

    return (
        <SafeAreaView style={styles.screenContainer}>
            <ScreenHeader title='Bienvenido de vuelta!' subTitle='Ruben Rodriguez' />
            <SectionTitle title='TUS PUNTOS' />
            <PointsCard month={extractMonth(new Date)} points={data ? getPoints(data) : 0}></PointsCard>
            <SectionTitle title='TUS MOVIMIENTOS' />
            <View style={styles.purchaseListAndBtnContainer}>
                <PurchaseList purchases={data} />
            </View>
            <Button title="Todos" onPress={handleNavigation} />
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