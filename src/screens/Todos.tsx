import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamsList } from '../navigation/types/screenNavigations';
import PointsScreenBody from '../components/globals/PointsScreenBody';
import Button from '../components/globals/Button';
export default function Todos() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList, 'Todos'>>();

    const handleNavigationGanados = () => {
        navigation.push('Ganados');
    };

    const handleNavigationCanjeados = () => {
        navigation.push('Canjeados');
    };

    return (
        <SafeAreaView style={styles.screenContainer}>
            <PointsScreenBody>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Button title="Ganados" onPress={handleNavigationGanados} />
                    <Button title="Canjeados" onPress={handleNavigationCanjeados} />
                </View>
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