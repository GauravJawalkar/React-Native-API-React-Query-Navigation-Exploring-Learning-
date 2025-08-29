import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>

const HomeScreen = ({ navigation }: HomeScreenProps) => {
    return (
        <SafeAreaView className='flex-1 justify-center items-center'>
            <Text className='text-2xl uppercase font-semibold leading-relaxed'>HomeScreen</Text>
            <TouchableOpacity className='mt-5 p-3 bg-blue-500 rounded text-white' onPress={() => { navigation.navigate("MainScreen") }}>
                <Text className='text-white'>Visit Your Todos</Text>
            </TouchableOpacity>
            <TouchableOpacity className='mt-5 p-3 bg-blue-500 rounded text-white' onPress={() => { navigation.navigate("DetailsScreen", { productId: "2822" }) }}>
                <Text className='text-white'>View Products</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomeScreen