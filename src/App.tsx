import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainScreen from './screens/MainScreen';
import { SafeAreaView } from "react-native-safe-area-context";

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className='flex-1'>
        <MainScreen />
      </SafeAreaView>
    </QueryClientProvider>
  )
}

export default App