import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



//Screens


import Terms from '../screens/authentication/Terms';
import TabStack from './TabStack';













const Stack = createNativeStackNavigator();


const UserStack = () => {

  return (
      <Stack.Navigator initialRouteName={'terms'} headerMode="none">
          <Stack.Screen name="term_screen" component={Terms}  options={{ headerShown: false }} /> 
          <Stack.Screen name="tabs" component={TabStack}  options={{ headerShown: false,animation:'slide_from_right' }} /> 

      


          
        
      
      </Stack.Navigator>

  );
};

export default UserStack;