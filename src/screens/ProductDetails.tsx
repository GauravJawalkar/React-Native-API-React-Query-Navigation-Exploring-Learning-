import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ShoppingCartIcon, StarIcon } from 'lucide-react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ProductCardProps } from '../components/ProductCard'

type ProductDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'ProductDetailsScreen'>

const ProductDetails = ({ route }: ProductDetailsScreenProps) => {
    const { product } = route?.params;

    const saveProductToAsyncStorage = async (newProduct: ProductCardProps[]) => {
        try {
            await AsyncStorage.setItem('recentlyViewedProducts', JSON.stringify(newProduct));
        } catch (error) {
            console.error("Error Saving the data to async storage : ", error)
        }
    }

    const addToRecentViewed = async () => {
        if (!product) return;
        try {
            const existingProducts = await AsyncStorage.getItem('recentlyViewedProducts');
            let parsedProducts: ProductCardProps[] = [];
            if (existingProducts) {
                const parsed = JSON.parse(existingProducts);
                parsedProducts = Array.isArray(parsed) ? parsed : [];
            }

            const checkIfProductExists = parsedProducts?.some((item: ProductCardProps) => item?.id === product?.id);
            if (checkIfProductExists) return;
            const addNewProduct = [...parsedProducts, product];
            await saveProductToAsyncStorage(addNewProduct);
        } catch (error) {
            console.error("Error Saving the data to async storage : ", error)
        }
    }



    useEffect(() => {
        addToRecentViewed();
    }, [product?.id])

    return (
        <SafeAreaView className="flex-1 bg-white">

            <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                {/* Product Image */}
                <View className="w-full h-72 items-center justify-center bg-gray-50 p-4">
                    <Image
                        source={{ uri: product?.image }}
                        className="w-full h-full"
                        resizeMode="contain"
                    />
                </View>

                {/* Product Info */}
                <View className="px-4 pt-6">
                    {/* Category */}
                    <Text className="text-sm font-medium text-blue-500 uppercase">
                        {product?.category}
                    </Text>

                    {/* Title */}
                    <Text className="text-2xl font-bold text-gray-900 mt-2">
                        {product?.title}
                    </Text>

                    {/* Rating */}
                    <View className="flex-row items-center mt-2 space-x-2">
                        <View className="flex-row items-center bg-gray-100 px-4 py-2 rounded-full">
                            <StarIcon size={16} color="#fbbf24" />
                            <Text className="ml-1 text-sm font-medium text-gray-800">
                                {product?.rating?.rate}
                                <Text className="text-gray-500">
                                    {" "}( {product?.rating?.count} reviews )
                                </Text>
                            </Text>
                        </View>
                    </View>

                    {/* Price */}
                    <View className="mt-4">
                        <Text className="text-3xl font-bold text-gray-900">
                            ${product?.price}
                        </Text>
                    </View>

                    {/* Description */}
                    <View className="mt-6">
                        <Text className="text-lg font-semibold text-gray-900 mb-2">
                            Additional Information
                        </Text>
                        <Text className="text-gray-600 leading-6">
                            {product?.description}
                        </Text>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Add to Cart Button */}
            <View className="p-4 border-t border-gray-200">
                <TouchableOpacity className="w-full bg-blue-600 py-4 rounded-full items-center">
                    <View className="text-white font-bold text-lg flex items-center justify-center gap-2 flex-row">
                        <ShoppingCartIcon size={20} color="#fbbf24" />
                        <Text className='text-white'>Add to Cart</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetails