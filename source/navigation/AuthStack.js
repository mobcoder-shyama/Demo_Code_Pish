import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



//Screens

import Login from '../screens/authentication/Login';
import Splash from '../screens/Splash';













const Stack = createNativeStackNavigator();


const AuthStack = () => {

  return (
      <Stack.Navigator initialRouteName={'login'} headerMode="none">
          <Stack.Screen name="login" component={Splash}  options={{ headerShown: false }} /> 
        
      
      </Stack.Navigator>

  );
};

export default AuthStack;