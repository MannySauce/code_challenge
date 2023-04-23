import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParamsList } from '../navigation/types/screenNavigations';
import PointsScreenBody from '../components/globals/PointsScreenBody';
import Button from '../components/globals/Button';
export default function Canjeados() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList, 'Canjeados'>>();
    const handleNavigation = () => {
        navigation.pop();
    };
    return (
        <SafeAreaView style={styles.screenContainer}>
            <PointsScreenBody>
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