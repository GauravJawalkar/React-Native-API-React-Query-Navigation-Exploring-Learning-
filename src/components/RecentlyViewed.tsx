import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProductCardProps } from './ProductCard';
import { useFocusEffect } from '@react-navigation/native';

const RecentlyViewed = () => {
    const [recentProducts, setRecentProducts] = useState([] as ProductCardProps[]);

    const getRecentlyViewedProducts = async () => {
        try {
            const recentlyViewedProducts = await AsyncStorage.getItem('recentlyViewedProducts');
            if (!recentlyViewedProducts) {
                return setRecentProducts([]);
            }
            if (recentlyViewedProducts) {
                const productsArray = JSON.parse(recentlyViewedProducts);
                return setRecentProducts(productsArray);
            }
        } catch (error) {
            console.error("Error Fetching the data from async storage : ", error)
        }
    }

    const clearStorage = async () => {
        try {
            await AsyncStorage.removeItem('recentlyViewedProducts');
            await getRecentlyViewedProducts();
        } catch (error) {
            console.error("Error Clearing the async storage : ", error)
        }
    }

    useFocusEffect(() => {
        getRecentlyViewedProducts();
    })

    return (
        <View className='flex-1 items-center justify-center my-5'>
            <TouchableOpacity className='p-3 bg-red-500 rounded items-center justify-center mt-5 mx-5' onPress={() => clearStorage()}>
                <Text className='text-white'>Clear the Async Storage</Text>
            </TouchableOpacity>
            <FlatList
                data={recentProducts}
                keyExtractor={(item) => (item?.id.toString())}
                renderItem={({ item }) => (
                    <View className="mx-2 p-3 mt-2 bg-white rounded-lg shadow">
                        <Text numberOfLines={2} className="max-w-[200px]">{item?.title}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default RecentlyViewed