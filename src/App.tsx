import React from 'react'
import MainScreen from './screens/MainScreen';
import { SafeAreaView } from "react-native-safe-area-context";
import { ReactQueryProvider } from './lib/React-Query/Provider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/Details';

const Stack = createNativeStackNavigator();


const App = () => {

  return (
    <ReactQueryProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'>
          <SafeAreaView className='flex-1'>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ title: "Home Screen" }} />
            <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{ title: "Product Details Screen" }} />
            {/* <MainScreen /> */}
          </SafeAreaView>
        </Stack.Navigator>
      </NavigationContainer>
    </ReactQueryProvider >
  )
}

export default App