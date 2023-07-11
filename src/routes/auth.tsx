// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../views/SignUp';
import OnBoarding from '../views/OnBoarding';

const Stack = createNativeStackNavigator();

const AuthRoutes = () =>  {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen name="SignUp" component={SignUp} options={{ header: () => null }}/>
        <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ header: () => null }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthRoutes;