import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



//Screens

import Login from '../screens/authentication/Login';
import Splash from '../screens/Splash';
import WelcomeScreen from '../screens/Welcome';
import OnBoardStack from './OnBoardStack';
import OnBoarding from '../screens/walkthrough/OnBoarding';
import LoginWithEmail from '../screens/authentication/LoginWithEmail';
import LoginEmailSuccess from '../screens/authentication/LoginEmailSuccess';
import EmailOTPVerification from '../screens/authentication/EmailOTPVerification';













const Stack = createNativeStackNavigator();


const AuthStack = () => {

  return (
      <Stack.Navigator initialRouteName={'splash'} headerMode="none">
          <Stack.Screen name="splash" component={Splash} options={{ headerShown: false }} /> 
          <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="walkthrough" component={OnBoarding} options={{ headerShown: false }} /> 
          <Stack.Screen name="login" component={Login}  options={{ headerShown: false }} /> 
          <Stack.Screen name="login_with_email" component={LoginWithEmail}  options={{ headerShown: false,animation:'slide_from_bottom' }} /> 
          <Stack.Screen name="login_email_success" component={LoginEmailSuccess}  options={{ headerShown: false }} /> 
          <Stack.Screen name="email_otp_verification" component={EmailOTPVerification}  options={{ headerShown: false }} /> 


          
        
      
      </Stack.Navigator>

  );
};

export default AuthStack;