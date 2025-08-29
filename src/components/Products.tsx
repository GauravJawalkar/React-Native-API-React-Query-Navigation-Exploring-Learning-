import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './ProductCard';

const Products = () => {
    async function getProduxts() {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            console.log("Products : ", response?.data);
            if (response?.data) {
                return response?.data;
            }
            return []
        } catch (error) {
            console.error("Error fetching the products : ", error);
            return []
        }
    }

    const { data: productData = [] } = useQuery(
        {
            queryKey: ['products'],
            queryFn: getProduxts,
            refetchOnWindowFocus: false
        }
    )

    return (
        <View>
            <FlatList
                numColumns={2}
                data={productData}
                keyExtractor={(item) => item?.id?.toString()}
                renderItem={({ item }) => (<ProductCard data={item} />)}
            />
        </View>
    )
}

export default Products