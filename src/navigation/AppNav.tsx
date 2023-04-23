import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GanadosScreen from '../features/ganados/Ganados';
import TodosScreen from '../screens/Todos';
const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Todos" component={TodosScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Ganados" component={GanadosScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App