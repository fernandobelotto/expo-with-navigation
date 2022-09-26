import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailScreen';


const Stack = createNativeStackNavigator();

export default function BasicExample() {
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