import { View, Text, Image } from 'react-native'
import React from 'react'

interface ProductCardProps {
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
        <View key={data?.id}>
            <Image source={{ uri: data?.image }} width={100} height={100} />
            <Text>{data?.title}</Text>
            <Text>{data?.description}</Text>
            <Text>{data?.category}</Text>
            <Text>{data?.rating?.rate}</Text>
        </View>
    )
}

export default ProductCard