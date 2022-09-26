import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="home"
          component={HomeScreen}
          options={{ title: 'tela inicial 🎉' }}
        />
        <Stack.Screen 
          name="details" 
          component={DetailsScreen}
          options={({ route }: any) => ({ title: route.params?.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}