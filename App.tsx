import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { TaskContextProvider } from './hooks';
import { DetailsScreen, HomeScreen } from './screens';

const Stack = createNativeStackNavigator();

export default function App(): React.ReactElement {
  return (
    <TaskContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: 'Task Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskContextProvider>
  );
}
