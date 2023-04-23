import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { Purchase } from "../../types/purchaseTypes";
export type RootStackParamsList = {
    DetalleMovimiento: { item: Purchase };
    Todos: undefined;
    Ganados: undefined;
};

export type DetalleMovimientoScreenProp = NativeStackNavigationProp<RootStackParamsList, 'DetalleMovimiento'>;