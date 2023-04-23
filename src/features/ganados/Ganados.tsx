import { StyleSheet, View, SafeAreaView } from 'react-native'
import ScreenHeader from '../../components/globals/ScreenHeader';
import SectionTitle from '../../components/globals/SectionTitle';
import PointsCard from '../../components/globals/PointsCard';
import PurchaseList from '../../components/globals/PurchaseList';
import Button from '../../components/globals/Button';
import { Purchase } from '../../types/purchaseTypes';

export default function Ganados() {
    const data: Purchase[] = [
        {
            createdAt: "2022-12-09T06:34:25.607Z",
            product: "Handmade Metal Shoes",
            points: 16434,
            image: "https://loremflickr.com/640/480/transport",
            is_redemption: false,
            id: "1"
        },
        {
            createdAt: "2022-12-09T17:02:51.904Z",
            product: "Recycled Plastic Tuna",
            points: 92984,
            image: "https://loremflickr.com/640/480/technics",
            is_redemption: false,
            id: "2"
        },
        {
            createdAt: "2022-12-09T10:20:00.909Z",
            product: "Fantastic Granite Bacon",
            points: 42416,
            image: "https://loremflickr.com/640/480/technics",
            is_redemption: false,
            id: "3"
        },
        {
            createdAt: "2022-12-09T00:30:23.966Z",
            product: "Fantastic Fresh Gloves",
            points: 23913,
            image: "https://loremflickr.com/640/480/city",
            is_redemption: true,
            id: "4"
        },
        {
            createdAt: "2022-12-08T18:54:56.243Z",
            product: "Rustic Rubber Bacon",
            points: 69814,
            image: "https://loremflickr.com/640/480/people",
            is_redemption: true,
            id: "5"
        }];
    return (
        <SafeAreaView style={styles.screenContainer}>
            <ScreenHeader title='Bienvenido de vuelta!' subTitle='Ruben Rodriguez' />
            <SectionTitle title='TUS PUNTOS' />
            <PointsCard month='Diciembre' points='10000'></PointsCard>
            <SectionTitle title='TUS MOVIMIENTOS' />
            <View style={styles.purchaseListAndBtnContainer}>
                <PurchaseList purchases={data} />
                <Button title="Todos" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },
    purchaseListAndBtnContainer: {
        marginHorizontal: 20
    }
})