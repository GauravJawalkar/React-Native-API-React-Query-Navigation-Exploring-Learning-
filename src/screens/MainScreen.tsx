import { View, Text, FlatList } from 'react-native'
import React from 'react'
import axios from 'axios';
import TodoCard, { TodoCardProps } from '../components/TodoCard';
import { useQuery } from '@tanstack/react-query';
import { SafeAreaView } from 'react-native-safe-area-context';

const MainScreen = () => {
    const fetchData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            if (response.data) {
                return response?.data;
            }
            return [];
        } catch (error) {
            console.error("Error fetching the data : ", error);
            return [];
        }
    }

    const { data = [], isLoading } = useQuery(
        {
            queryFn: fetchData,
            queryKey: ['todos'],
            refetchOnWindowFocus: false
        }
    )
    return (
        <SafeAreaView className='flex-1'>
            <View className='bg-[#1a1a1a] flex justify-center items-center'>
                <Text className='text-2xl uppercase text-orange-500 font-bold'>App</Text>
                {isLoading ? (<Text className='text-white'>Loading....</Text>) : (<FlatList
                    data={data}
                    keyExtractor={(item: { id: number }) => item?.id.toString()}
                    renderItem={({ item }: { item: TodoCardProps }) => (<TodoCard todo={item} />)}
                />)}
            </View >
        </SafeAreaView>
    )
}

export default MainScreen