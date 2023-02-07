import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';



//Stacks

import AuthStack from './AuthStack';
import Splash from '../screens/Splash';
import OnBoardStack from './OnBoardStack';
import Terms from '../screens/authentication/Terms';
import TabStack from './TabStack';
import WelcomeScreen from '../screens/Welcome';
import OnBoarding from '../screens/walkthrough/OnBoarding';
import UserStack from './UserStack';
import UserAccount from '../screens/dashboard/profile/UserAccount';
import UserProfile from '../screens/dashboard/profile/UserProfile';
import UpdateUserProfile from '../screens/dashboard/profile/UpdateUserProfile';









const Stack = createNativeStackNavigator();


const RootNavigation = props => {

    const [state, setState] = React.useState({
        loading: true,
    })



    return (

        <SafeAreaProvider>

            <NavigationContainer>

                <Stack.Navigator headerMode="none" initialRouteName={'splash'} options={{ headerShown: false }} >

                    <Stack.Screen name="splash" component={Splash} options={{ headerShown: false, animation: 'slide_from_right' }} />
                    <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
                    <Stack.Screen name="walkthrough" component={OnBoarding} options={{ headerShown: false, animation: 'slide_from_right' }} />

                    <Stack.Screen
                        name="authstack"
                        component={AuthStack}
                        options={{ headerShown: false, animation: 'slide_from_right' }}
                    />


                    <Stack.Screen
                        name="tabs"
                        component={TabStack}
                        options={{ headerShown: false, animation: 'slide_from_bottom' }}
                    />

                    <Stack.Screen
                        name="onboard"
                        component={OnBoardStack}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="terms"
                        component={Terms}
                        options={{ headerShown: false, animation: 'slide_from_bottom' }}
                    />

                    <Stack.Screen
                        name="user-account"
                        component={UserAccount}
                        options={{ headerShown: false, animation: 'slide_from_left' }}
                    />

                    <Stack.Screen
                        name="user-profile"
                        component={UserProfile}
                        options={{ headerShown: false, animation: 'slide_from_left' }}
                    />

                    <Stack.Screen
                        name="user-profile-update"
                        component={UpdateUserProfile}
                        options={{ headerShown: false, animation: 'slide_from_bottom' }}
                    />



                </Stack.Navigator>

            </NavigationContainer>
        </SafeAreaProvider>
    );
};


export default RootNavigation;
