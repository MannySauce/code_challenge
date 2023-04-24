import usePurchases from "./usePurchases";

export default function useFilteredPurchases(isCanjeados: boolean) {
    const { data, loading } = usePurchases();

    if (loading) {
        return { data: [], loading };
    }

    return { data: data.filter((purchase) => purchase.is_redemption === isCanjeados), loading };
};