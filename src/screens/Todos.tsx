import React from 'react';
import { StyleSheet, SafeAreaView, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamsList } from '../navigation/types/screenNavigations';
import PointsScreenBody from '../components/globals/PointsScreenBody';
import { ScreenContainer } from '../components/globals/ScreenContainer';
import Button from '../components/globals/Button';
import usePurchases from '../hooks/usePurchases';

export default function Todos() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList, 'Todos'>>();

    const { data, loading } = usePurchases();
    if (loading) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size='large' color='#334FFA' /></View>;
    }

    const handleNavigationGanados = () => {
        navigation.push('Ganados');
    };

    const handleNavigationCanjeados = () => {
        navigation.push('Canjeados');
    };

    return (
        <ScreenContainer>
            <PointsScreenBody data={data} />
            <View style={{ flexDirection: 'row', flex: 1, marginTop: 43 }}>
                <View style={{ flex: 1 }}>
                    <Button title="Ganados" style={{ marginTop: 0 }} onPress={handleNavigationGanados} />
                </View>
                <View style={{ flex: 1 }}>
                    <Button title="Canjeados" style={{ marginTop: 0 }} onPress={handleNavigationCanjeados} />
                </View>
            </View>
        </ScreenContainer>
    )
}