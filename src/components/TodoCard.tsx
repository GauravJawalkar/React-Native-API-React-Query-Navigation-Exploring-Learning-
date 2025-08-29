import { View, Text } from 'react-native'
import React from 'react'

export interface TodoCardProps {
    userId?: number;
    id: number;
    title: string;
    completed?: boolean;
}

const TodoCard = ({ todo }: { todo: TodoCardProps }) => {
    return (
        <View key={todo.id} className='bg-white p-4 m-2 rounded-lg'>
            <Text className='font-semibold leading-loose'>TodoCard : {todo.title}</Text>
        </View>
    )
}

export default TodoCard