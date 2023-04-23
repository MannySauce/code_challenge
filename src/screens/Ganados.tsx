import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamsList } from '../navigation/types/screenNavigations';
import PointsScreenBody from '../components/globals/PointsScreenBody';
import Button from '../components/globals/Button';
import { PurchasesContext } from '../context/PurchasesContext';
export default function Ganados() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList, 'Ganados'>>();
    const { data, loading } = useContext(PurchasesContext);
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