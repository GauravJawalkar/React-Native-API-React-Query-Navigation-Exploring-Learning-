import React from 'react'
import MainScreen from './screens/MainScreen';
import { ReactQueryProvider } from './lib/React-Query/Provider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/Details';

export type RootStackParamList = {
  HomeScreen: undefined; // no params
  DetailsScreen: { productId: string }; // expects params
  MainScreen: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {

  return (
    <ReactQueryProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'>
          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{ title: "Product Details Screen" }} />
          <Stack.Screen name='MainScreen' component={MainScreen} options={{ title: "Todos" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReactQueryProvider >
  )
}

export default App