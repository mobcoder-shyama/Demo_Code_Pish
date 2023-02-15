import * as React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/dashboard/home/Home';
import WishList from '../screens/dashboard/wishlist/WishList';
import CampaignRanking from '../screens/dashboard/ranking/CampaignRanking';
import { SvgXml } from 'react-native-svg';
import { Home_Active_Icon, Home_Inactive_Icon, Line_Icon, Question_Active_Icon, Question_Inactive_Icon, Ranking_Active_Icon, Ranking_Inactive_Icon, Search_Active_Icon, Search_Inactive_Icon, WishList_Active_Icon, WishList_Inactive_Icon } from '../assests/svg/MainSvg';
import QuizRules from '../screens/dashboard/quiz_rules/QuizRules';
import { SCREEN_WIDTH } from '../constant/Dimensions';
import { FontFamily } from '../constant/FontFamily';
import Colors from '../constant/Colors';

const Tab = createBottomTabNavigator();


const TabStack = () => {

    const activeTabbar = (title, icon) => {
        return (
            <View style={{ alignItems: 'center',top:7.5 }}>
                <SvgXml xml={icon} height={20} width={20} style={{bottom:10}} />
                <Text style={[styles.activeTabTitle]}>{title}</Text>
            </View>
        )
    }

    const inactiveTabbar = (title, icon) => {
        return (
            <View style={{ alignItems: 'center',top:7.5 }}>
                <SvgXml xml={icon} height={20} width={20}  style={{bottom:0}}  />
                <Text style={[styles.inactiveTabTitle]}>{title}</Text>
            </View>
        )
    }

    return (
        <Tab.Navigator
            initialRouteName={'home'}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor:Colors.background.dark_black,
                    height:Platform.OS === 'android'?75:120,
                    borderTopWidth: 1,
                    borderTopColor: 'transparent',
                },
                tabBarBackground: () => ( 
                     <View style={{height:100}}>
                       <SvgXml xml={Line_Icon} height={20} width={SCREEN_WIDTH} style={{marginBottom:100}} marginBottom={100} />
                     </View>
                ),

            }}
            tabBarOptions={{
                showLabel: false,
                activeTintColor: '#2D91FE',
                backgroundColor: 'red',
                inactiveTintColor: 'gray',
                indicatorStyle: { backgroundColor: "#2DA5FE", height: 0 },
                showIcon: true,
                style: {
                    backgroundColor: 'red',
                    height: 65,
                    borderTopWidth: 5,
                    borderTopColor: 'red',
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderLeftColor: 'gray',
                    borderLeftWidth: 0.25,
                    borderRightColor: 'gray',
                    borderRightWidth: 0.25,
                },
            }}>

            <Tab.Screen name={"home"} component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, tintColor, color }) => (
                        focused ? activeTabbar('Home', Home_Active_Icon) : inactiveTabbar('Home', Home_Inactive_Icon)),
                }} />


             <Tab.Screen name={"serch"} component={WishList}
                options={{
                    tabBarIcon: ({ focused, tintColor, color }) => (
                        focused ? activeTabbar('Search', Search_Active_Icon) : inactiveTabbar('Search', Search_Inactive_Icon)),
             }} />    

            <Tab.Screen name={"wishlist"} component={WishList}
                options={{
                    tabBarIcon: ({ focused, tintColor, color }) => (
                        focused ? activeTabbar('Wishlist', WishList_Active_Icon) : inactiveTabbar('Wishlist', WishList_Inactive_Icon)),
             }} />


            <Tab.Screen name={"ranking"} component={CampaignRanking}
                options={{
                    tabBarIcon: ({ focused, tintColor, color }) => (
                        focused ? activeTabbar('Ranking', Ranking_Active_Icon) : inactiveTabbar('Ranking', Ranking_Inactive_Icon)),
                }} />

            <Tab.Screen name={"quiz_rules"} component={QuizRules}
                options={{
                    tabBarIcon: ({ focused, tintColor, color }) => (
                        focused ? activeTabbar('Quiz Rules', Question_Active_Icon) : inactiveTabbar('Quiz Rules', Question_Inactive_Icon)),
                }} />

        </Tab.Navigator>
    )

}

const styles = StyleSheet.create({

    inactiveTabTitle: {
        opacity: 0.5, color: '#555555', fontSize: 12, fontWeight: '500',fontFamily:FontFamily['Gilroy'][500]
    },
    activeTabTitle: {
        color: '#FFFFFF', fontSize: 12, fontWeight: '500',fontFamily:FontFamily['Gilroy'][500]
    },
})

export default TabStack;
