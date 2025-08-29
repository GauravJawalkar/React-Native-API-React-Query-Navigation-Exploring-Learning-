import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import Products from '../components/Products'

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'DetailsScreen'>

const DetailsScreen = ({ navigation, route }: DetailsScreenProps) => {
    const navigationn = useNavigation()
    const { productId } = route?.params;
    console.log("Params : ", productId);
    return (
        <View className='flex-1 justify-center items-center'>
            <Text className='text-2xl uppercase font-semibold leading-relaxed'>Details</Text>
            <Text className='text-2xl uppercase font-semibold leading-relaxed'>The Product Id : {productId}</Text>
            <TouchableOpacity className='mt-5 p-3 bg-blue-500 rounded text-white' onPress={() => { navigation.navigate("HomeScreen") }}>
                <Text className='text-white'>Visit Your Todos</Text>
            </TouchableOpacity>
            <Products />
        </View>
    )
}

export default DetailsScreen