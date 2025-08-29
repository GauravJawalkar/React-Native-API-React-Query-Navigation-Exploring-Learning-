import React from 'react'
import MainScreen from './screens/MainScreen';
import { ReactQueryProvider } from './lib/React-Query/Provider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/Details';
import ProductDetails from './screens/ProductDetails';
import { ProductCardProps } from './components/ProductCard';

export type RootStackParamList = {
  HomeScreen: undefined; // no params
  DetailsScreen: { productId: string }; // expects params
  MainScreen: undefined;
  ProductDetailsScreen: { product: ProductCardProps }; // expects params

};
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {

  return (
    <ReactQueryProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'>
          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name='DetailsScreen' component={DetailsScreen} options={{ title: "Products" }} />
          <Stack.Screen name='MainScreen' component={MainScreen} options={{ title: "Todos" }} />
          <Stack.Screen name="ProductDetailsScreen" component={ProductDetails} options={{ title: "" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReactQueryProvider >
  )
}

export default App