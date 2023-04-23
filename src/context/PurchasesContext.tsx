import { createContext } from 'react';
import { Purchase } from '../types/purchaseTypes';

export type ContextType = {
    data: Purchase[];
    loading: boolean;
};

export const PurchasesContext = createContext<ContextType>({
    data: [],
    loading: true,
});

