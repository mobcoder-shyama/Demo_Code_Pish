import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



//Screens

import Walkthrough_One from '../screens/walkthrough/WalkThrough_One';
import Walkthrough_Two from '../screens/walkthrough/WalkThrough_Two';
import Walkthrough_Three from '../screens/walkthrough/WalkThrough_Three';













const Stack = createNativeStackNavigator();


const OnBoardStack = () => {

  return (
      <Stack.Navigator initialRouteName={'walkthrough_1'} headerMode="none">
          <Stack.Screen name="walkthrough_1" component={Walkthrough_One} options={{ headerShown: false }} /> 
          <Stack.Screen name="walkthrough_2" component={Walkthrough_Two} options={{ headerShown: false }} /> 
          <Stack.Screen name="walkthrough_3" component={Walkthrough_Three}  options={{ headerShown: false }} /> 
        
       </Stack.Navigator>

  );
};

export default OnBoardStack;