import useProducts from "./usePurchases";
import React from 'react'

export default function useFilteredPurchases(isCanjeados: boolean) {
    const { data, loading } = useProducts();

    if (loading) {
        return [];
    }

    return data.filter((purchase) => purchase.is_redemption === isCanjeados);
};