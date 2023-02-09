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
import UpdateDetails from '../screens/authentication/UpdateDetails';
import LoginViaEmail from '../screens/authentication/LoginViaEmail';













const Stack = createNativeStackNavigator();


const AuthStack = () => {

  return (
      <Stack.Navigator initialRouteName={'login'} headerMode="none">
          <Stack.Screen name="login" component={Login}  options={{ headerShown: false,animation:'slide_from_right' }} /> 
          <Stack.Screen name="login_with_email" component={LoginViaEmail}  options={{ headerShown: false,animation:'slide_from_bottom' }} /> 
          <Stack.Screen name="login_email_success" component={LoginEmailSuccess}  options={{ headerShown: false,animation:'slide_from_right' }} /> 
          <Stack.Screen name="email_otp_verification" component={EmailOTPVerification}  options={{ headerShown: false,animation:'slide_from_right' }} /> 
          <Stack.Screen name="phone_otp_verification" component={PhoneOTPVerification}  options={{ headerShown: false,animation:'slide_from_right' }} /> 
          <Stack.Screen name="update_details" component={UpdateDetails}  options={{ headerShown: false,animation:'slide_from_right' }} /> 


          
        
      
      </Stack.Navigator>

  );
};

export default AuthStack;