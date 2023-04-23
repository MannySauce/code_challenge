import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamsList } from '../navigation/types/screenNavigations';
import PointsScreenBody from '../components/globals/PointsScreenBody';
import Button from '../components/globals/Button';
import { PurchasesContext } from '../context/PurchasesContext';
import usePurchase from '../hooks/useFilteredPurchases';
import { Purchase } from '../types/purchaseTypes';
export default function Canjeados() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList, 'Canjeados'>>();
    const { data, loading } = useContext(PurchasesContext);
    const [filteredData, setFilteredData] = useState<Purchase[] | undefined>();
    useEffect(() => {
        if (data.length > 0) {
            const res: Purchase[] | undefined = usePurchase(true)
            setFilteredData(res);
        }
    }, []);
    if (loading) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size='large' color='#334FFA' /></View>;
    }
    const handleNavigation = () => {
        navigation.pop();
    };
    return (
        <SafeAreaView style={styles.screenContainer}>
            <PointsScreenBody data={data}>
                <Button title="Todos" onPress={handleNavigation} />
            </PointsScreenBody>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    }
})