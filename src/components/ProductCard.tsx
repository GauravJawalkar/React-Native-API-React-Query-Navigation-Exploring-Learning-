import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
export interface ProductCardProps {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

const ProductCard = ({ data }: { data: ProductCardProps }) => {
    return (
        <>
            <View key={data?.id} className="w-52 bg-white rounded-2xl shadow-lg m-2 overflow-hidden">
                <View className="p-2 flex items-center">
                    <Image
                        source={{ uri: data?.image }}
                        className="w-32 h-32 rounded-lg"
                        resizeMode="contain"
                    />
                    <View className="w-full mt-3 space-y-1">
                        <Text numberOfLines={1} className="text-lg font-semibold text-gray-800">
                            {data?.title}
                        </Text>
                        <Text numberOfLines={2} className="text-sm text-gray-500">
                            {data?.description}
                        </Text>
                        <View className="flex-row justify-between items-center mt-2">
                            <Text className="text-base font-bold text-gray-900">
                                ${data?.price}
                            </Text>
                            <View className="flex-row items-center bg-gray-100 px-2 py-1 rounded-full">
                                <Text className="text-xs font-medium text-gray-800">⭐ {data?.rating?.rate}</Text>
                            </View>
                        </View>
                        <Text className="text-xs text-gray-500 capitalize mt-1">
                            {data?.category}
                        </Text>
                    </View>
                </View>
            </View>
        </>

    )
}

export default ProductCard