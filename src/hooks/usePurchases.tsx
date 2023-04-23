import { useState, useEffect } from 'react'
import axios from 'axios';
import { Purchase } from '../types/purchaseTypes';

export default function usePurchases() {
    const [data, setData] = useState<Purchase[]>([]);
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        getPurchases().catch(error => {
            setLoading(false)
            console.log(error);
        });
    }, []);

    async function getPurchases() {
        const res = await axios.get('https://6222994f666291106a29f999.mockapi.io/api/v1/products')
        setData(res.data);
        setLoading(false);
    };
    return { data, loading };
}