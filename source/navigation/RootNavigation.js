import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';



//Stacks

import AuthStack from './AuthStack';
import Splash from '../screens/Splash';








const Stack = createNativeStackNavigator();

const RootNavigation = props => {

    const [state, setState] = React.useState({
        loading: true,
    })

    React.useEffect(() => {
        setTimeout(() => {
            setState({ loading: false })
        }, 1000);
    }, [props]);

    // if (state.loading) {
    //     return <Splash />;
    // }

    return (

        <SafeAreaProvider>

            <NavigationContainer>

                <Stack.Navigator headerMode="none" initialRouteName={'authstack'} options={{ headerShown: false }} >

                    <Stack.Screen
                        name="authstack"
                        component={AuthStack}
                        options={{ headerShown: false }}
                    />

                </Stack.Navigator>

            </NavigationContainer>
        </SafeAreaProvider>
    );
};


export default RootNavigation;
