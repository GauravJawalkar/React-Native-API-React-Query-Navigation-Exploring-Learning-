import { View, Text } from 'react-native'
import React from 'react'

export interface TodoCardProps {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const TodoCard = ({ todo }: { todo: TodoCardProps }) => {
    return (
        <View key={todo.id} className='bg-white p-4 m-2 rounded-lg'>
            <Text>TodoCard : {todo.title}</Text>
            <Text>UserId : {todo.userId}</Text>
            <Text>Status : {todo.completed ? "✅" : "🚫"}</Text>
        </View>
    )
}

export default TodoCard