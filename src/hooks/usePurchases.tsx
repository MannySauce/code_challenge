import { useState, useEffect } from 'react'
import axios from 'axios';
import { Purchase } from '../types/purchaseTypes';

export default function useProducts() {
    const [data, setData] = useState<Purchase[]>([]);
    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        await axios.get('https://6222994f666291106a29f999.mockapi.io/api/v1/products')
            .then(res => {
                setData(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    };
    return { data };
}