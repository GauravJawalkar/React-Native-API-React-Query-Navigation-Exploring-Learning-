import { View, Text } from 'react-native'
import React from 'react'

const ProductSkeleton = () => {
    return (
        <View className="w-52 bg-white rounded-2xl shadow-lg m-2 overflow-hidden">
            <View className="p-2 flex items-center">
                {/* Image Skeleton */}
                <View className="w-32 h-32 rounded-lg bg-gray-100" />

                {/* Title Skeleton */}
                <View className="w-full mt-3 space-y-1">
                    <View className="h-6 bg-gray-100 rounded-md" />

                    {/* Description Skeleton */}
                    <View className="h-4 mt-2 bg-gray-100 rounded-t-md rounded-br-md" />
                    <View className="h-2.5 w-3/4 bg-gray-100 rounded-b-md" />

                    {/* Price and Rating Skeleton */}
                    <View className="flex-row justify-between items-center mt-2">
                        <View className="h-6 w-16 bg-gray-100 rounded-md" />
                        <View className="h-5 w-10 px-3 py-1 bg-gray-100 rounded-full" />
                    </View>

                    {/* Category Skeleton */}
                    <View className="h-4 w-20 bg-gray-100 rounded-md mt-1" />
                </View>
            </View>
        </View>
    )
}

export default ProductSkeleton