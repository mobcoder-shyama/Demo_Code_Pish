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









const Stack = createNativeStackNavigator();


const RootNavigation = props => {

    const [state, setState] = React.useState({
        loading: true,
    })



    return (

        <SafeAreaProvider>

            <NavigationContainer>

                <Stack.Navigator headerMode="none" initialRouteName={'authstack'} options={{ headerShown: false }} >

                    <Stack.Screen
                        name="authstack"
                        component={AuthStack}
                        options={{ headerShown: false }}
                    />


                    <Stack.Screen
                        name="tabs"
                        component={TabStack}
                        options={{ headerShown: false }}
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



                </Stack.Navigator>

            </NavigationContainer>
        </SafeAreaProvider>
    );
};


export default RootNavigation;
