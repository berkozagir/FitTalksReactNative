/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import AccountStatement from './AccountStatement';
import DifferentStack from './DifferentStack';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='AccountStatement' component={AccountStatement} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name='DifferentStack' component={DifferentStack} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
