import React from 'react'
import MainScreen from './screens/MainScreen';
import { SafeAreaView } from "react-native-safe-area-context";
import { ReactQueryProvider } from './lib/React-Query/Provider';

const App = () => {

  return (
    <ReactQueryProvider>
      <SafeAreaView className='flex-1'>
        <MainScreen />
      </SafeAreaView>
    </ReactQueryProvider>
  )
}

export default App