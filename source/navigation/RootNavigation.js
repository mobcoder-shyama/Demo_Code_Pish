import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
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
import FAQ from '../screens/dashboard/profile/FAQ';
import Support from '../screens/dashboard/profile/Support';
import HowToScore from '../screens/dashboard/profile/HowToScore';
import HowToPlay from '../screens/dashboard/profile/HowToPlay';
import DeviceSettings from '../screens/dashboard/profile/DeviceSettings';
import HomeScreen from '../screens/dashboard/home/Home';
import { getStringData } from '../utils/AsyncStorage';
import { FIRST_LOGIN } from '../utils/AsyncKeys';
import MainHeader from '../screens/dashboard/components/MainHeader';
import Notifications from '../screens/notification/Notifications';










const Stack = createNativeStackNavigator();


const RootNavigation = props => {

    const [state, setState] = React.useState({
        loading: true,
    });

   



    return (

        <SafeAreaProvider>

            <NavigationContainer>

                <Stack.Navigator headerMode="none" initialRouteName={'splash'} options={{ headerShown: false }} >

                    <Stack.Screen name="splash" component={Splash} options={{ headerShown: false, animation: 'slide_from_right' }} />
                    <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
                    <Stack.Screen name="walkthrough" component={OnBoarding} options={{ headerShown: false, animation: 'slide_from_right' }} />
                    <Stack.Screen name="no-auth" component={HomeScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />

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
                        options={{ headerShown: false, animation:'slide_from_right' }}
                    />

                    <Stack.Screen
                        name="user-profile"
                        component={UserProfile}
                        options={{ headerShown: false,animation:'slide_from_right' }}
                    />

                    <Stack.Screen
                        name="user-profile-update"
                        component={UpdateUserProfile}
                        options={{ headerShown: false, animation: 'slide_from_bottom' }}
                    />

                    <Stack.Screen
                        name="settings"
                        component={DeviceSettings}
                        options={{ headerShown: false,animation:'slide_from_right' }}
                    />
                    <Stack.Screen
                        name="faq"
                        component={FAQ}
                        options={{ headerShown: false,animation:'slide_from_right' }}
                    />
                    <Stack.Screen
                        name="support"
                        component={Support}
                        options={{ headerShown: false,animation:'slide_from_right' }}
                    />

                    <Stack.Screen
                        name="howtoscore"
                        component={HowToScore}
                        options={{ headerShown: false,animation:'slide_from_right'}}
                    />
                    <Stack.Screen
                        name="howtoplay"
                        component={HowToPlay}
                        options={{ headerShown: false,  animation:'slide_from_right'}}
                    />

                   <Stack.Screen
                        name="notification"
                        component={Notifications}
                        options={{ headerShown: false, animation:'slide_from_right' }}
                    />





                </Stack.Navigator>

            </NavigationContainer>
        </SafeAreaProvider>
    );
};


export default RootNavigation;
