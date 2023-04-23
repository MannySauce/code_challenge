import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { Purchase } from "../../types/purchaseTypes";
export type RootStackParamsList = {
    DetalleMovimiento: { item: Purchase };
    Todos: undefined;
    Ganados: undefined;
    Canjeados: undefined;
};

export type DetalleMovimientoScreenProp = NativeStackNavigationProp<RootStackParamsList, 'DetalleMovimiento'>;
export type TodosScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Todos'>;
export type GanadosScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Ganados'>;
export type CanjeadosScreenProp = NativeStackNavigationProp<RootStackParamsList, 'Canjeados'>;