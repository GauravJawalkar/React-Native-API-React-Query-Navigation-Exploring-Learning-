import { View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import ProductSkeleton from '../components/Skeletons/ProductSkeleton'
import ProductCard from '../components/ProductCard'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'DetailsScreen'>

const DetailsScreen = ({ navigation, route }: DetailsScreenProps) => {
    async function getProduxts() {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            if (response?.data) {
                return response?.data;
            }
            return []
        } catch (error) {
            console.error("Error fetching the products : ", error);
            return []
        }
    }

    const { data: productData = [], isFetching, isLoading } = useQuery(
        {
            queryKey: ['products'],
            queryFn: getProduxts,
            refetchOnWindowFocus: false
        }
    )

    return (
        <View>
            {(isFetching || isLoading) && (<FlatList
                data={[1, 2, 3, 4, 5, 6]}
                numColumns={2}
                keyExtractor={(item) => item.toString()}
                renderItem={() => (<ProductSkeleton />)}
            />)}
            {(!isLoading && !isFetching) &&
                <FlatList
                    numColumns={2}
                    data={productData}
                    keyExtractor={(item) => item?.id?.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { navigation.navigate("ProductDetailsScreen", { product: item }) }}>
                            <ProductCard data={item} />
                        </TouchableOpacity>
                    )}
                />
            }
        </View>
    )
}

export default DetailsScreen