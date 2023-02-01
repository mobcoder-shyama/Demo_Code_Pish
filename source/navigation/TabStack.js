import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/dashboard/home/Home';
import WishList from '../screens/dashboard/wishlist/WishList';
import CampaignRanking from '../screens/dashboard/ranking/CampaignRanking';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();


const TabStack = () => {

    const activeTabbar = (title) => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={[styles.activeTabTitle]}>{title}</Text>
            </View>
        )
    }

    const inactiveTabbar = (title) => {
        return (
            <View style={{ alignItems: 'center' }}>
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
                    backgroundColor: '#000000',
                    height: 65,
                    borderTopWidth:1,
                    borderTopColor:'transparent'
                },
                tabBarBackground: () => (
                    <View style={{ flex: 1 }}>
                       
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            locations={[0,100,0]}
                            colors={['#9945FF','#9945FF','#9945FF']}
                            style={{ height: 1 }}
                        />

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
                        focused ? activeTabbar('Home') : inactiveTabbar('Home')),
                }} />

            <Tab.Screen name={"wishlist"} component={WishList}
                options={{
                    tabBarIcon: ({ focused, tintColor, color }) => (
                        focused ? activeTabbar('Wishlist') : inactiveTabbar('Wishlist')),
                }} />


            <Tab.Screen name={"ranking"} component={CampaignRanking}
                options={{
                    tabBarIcon: ({ focused, tintColor, color }) => (
                        focused ? activeTabbar('Ranking') : inactiveTabbar('Ranking')),
                }} />

        </Tab.Navigator>
    )

}

const styles = StyleSheet.create({

    inactiveTabTitle: {
        opacity: 0.5, color: '#555555', fontSize: 12, fontWeight: '400'
    },
    activeTabTitle: {
        color: '#FFFFFF', fontSize: 12, fontWeight: '700'
    },
})

export default TabStack;
