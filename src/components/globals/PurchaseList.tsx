import { StyleSheet, View, FlatList, ListRenderItemInfo } from 'react-native'
import PurchaseItem from '../../components/globals/PurchaseItem';
import { Purchase } from '../../types/purchaseTypes';
import React from 'react'

type PurchaseListProps = {
    purchases: Purchase[]
};

export default function PurchaseList({ purchases }: PurchaseListProps) {

    const keyExtractor = (item: Purchase) => item.id;

    const renderListItemSeperator = () => {
        return (
            <View style={{ height: 8 }} />
        )
    };

    const renderListHeaderFooterComponent = () => {
        return (
            <View style={{ height: 20 }} />
        )
    };

    const renderListItem = ({ item }: ListRenderItemInfo<Purchase>) => {
        return (
            <PurchaseItem item={item} />
        )
    };
    return (
        <FlatList
            data={purchases}
            keyExtractor={keyExtractor}
            style={styles.purchaseListContainer}
            renderItem={renderListItem}
            ItemSeparatorComponent={renderListItemSeperator}
            ListHeaderComponent={renderListHeaderFooterComponent}
            ListFooterComponent={renderListHeaderFooterComponent}
        />
    )
}

const styles = StyleSheet.create({
    purchaseListContainer: {
        maxHeight: 350,
        height: 350,
        backgroundColor: '#fff',
        borderRadius: 10
    }
})