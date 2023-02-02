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
import PhoneOTPVerification from '../screens/authentication/PhoneOTPVerification';













const Stack = createNativeStackNavigator();


const AuthStack = () => {

  return (
      <Stack.Navigator initialRouteName={'login'} headerMode="none">
          <Stack.Screen name="login" component={Login}  options={{ headerShown: false }} /> 
          <Stack.Screen name="login_with_email" component={LoginWithEmail}  options={{ headerShown: false,animation:'slide_from_bottom' }} /> 
          <Stack.Screen name="login_email_success" component={LoginEmailSuccess}  options={{ headerShown: false }} /> 
          <Stack.Screen name="email_otp_verification" component={EmailOTPVerification}  options={{ headerShown: false }} /> 
          <Stack.Screen name="phone_otp_verification" component={PhoneOTPVerification}  options={{ headerShown: false }} /> 


          
        
      
      </Stack.Navigator>

  );
};

export default AuthStack;