import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamsList } from '../navigation/types/screenNavigations';
import PointsScreenBody from '../components/globals/PointsScreenBody';
import { ScreenContainer } from '../components/globals/ScreenContainer';
import Button from '../components/globals/Button';
import useFilteredPurchases from '../hooks/useFilteredPurchases';

export default function Ganados() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList, 'Ganados'>>();
    const { data, loading } = useFilteredPurchases(false);
    if (loading) {
        return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size='large' color='#334FFA' /></View>;
    }
    const handleNavigation = () => {
        navigation.pop();
    };

    return (
        <ScreenContainer>
            <PointsScreenBody data={data} />
            <Button title="Todos" onPress={handleNavigation} />
        </ScreenContainer>
    )
}