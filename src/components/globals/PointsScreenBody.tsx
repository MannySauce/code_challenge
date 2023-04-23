// Este es el componente principal que reutilizaremos para las pantallas: Todos, Canjeados, Ganados

import { StyleSheet, View } from 'react-native'
import React, { ReactNode } from 'react'
import ScreenHeader from './ScreenHeader';
import SectionTitle from './SectionTitle';
import PointsCard from './PointsCard';
import PurchaseList from './PurchaseList';
import { extractMonth } from '../../utils/dataFormats';
import { getPoints } from '../../utils/pointsHelper';
import { Purchase } from '../../types/purchaseTypes';
type PointsScreenBodyProps = {
    data: Purchase[]
    children: ReactNode;
};

export default function PointsScreenBody({ children, data }: PointsScreenBodyProps) {

    return (
        <>
            <ScreenHeader title='Bienvenido de vuelta!' subTitle='Ruben Rodriguez' />
            <SectionTitle title='TUS PUNTOS' />
            <PointsCard month={extractMonth(new Date)} points={data ? getPoints(data) : 0} />
            <SectionTitle title='TUS MOVIMIENTOS' />
            <View style={styles.purchaseListAndBtnContainer}>
                <PurchaseList purchases={data} />
            </View>
            {children}
        </>
    )
}

const styles = StyleSheet.create({
    purchaseListAndBtnContainer: {
        marginHorizontal: 20
    }
})