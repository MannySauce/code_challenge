import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GanadosScreen from '../screens/Ganados';
import TodosScreen from '../screens/Todos';
import DetalleMovimientoScreen from '../screens/DetalleMovimiento';
import CanjeadosScreen from '../screens/Canjeados';
import {
    SafeAreaProvider,
} from 'react-native-safe-area-context';
import { RootStackParamsList } from './types/screenNavigations';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function AppNav() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Todos" component={TodosScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="DetalleMovimiento" component={DetalleMovimientoScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Ganados" component={GanadosScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Canjeados" component={CanjeadosScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default AppNav;