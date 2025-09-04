// App.tsx
import './app/global.css'; // keep this FIRST to preserve Tailwind on web

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './app/screens/Home';
import ResultsScreen from './app/screens/ResultsScreen';
import BusinessesScreen from './app/screens/BusinessesScreen';
import ProductsScreen from './app/screens/ProductsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Businesses"
          component={BusinessesScreen}
          options={{ title: 'Negocios' }} // shows back arrow automatically
        />
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{ title: 'Productos' }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
