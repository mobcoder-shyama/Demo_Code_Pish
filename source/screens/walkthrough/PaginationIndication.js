import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constant/Dimensions'


const PaginationIndicator = props => {

    const activeIndicator = () => {
        return (
            <View style={{ backgroundColor: '#9945FF', width: 28, height: 6, borderRadius: 6, margin: 2 }}>

            </View>
        )
    }

    const inactiveIndicator = () => {
        return (
            <View style={{ backgroundColor: '#797A7C', width: 12, height: 6, borderRadius: 6, margin: 2 }}>

            </View>
        )
    }

    return (
        <View style={{ marginTop: 44, width: SCREEN_WIDTH, height: 33, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            {/* {props?.screenIndex === 1 &&
                <View style={{ flexDirection: 'row', }}>
                    {activeIndicator()}
                    {inactiveIndicator()}
                    {inactiveIndicator()}
                </View>
            }
            {props?.screenIndex === 2 &&
                <View style={{ flexDirection: 'row', }}>
                    {inactiveIndicator()}
                    {activeIndicator()}
                    {inactiveIndicator()}
                </View>
            }

            {props?.screenIndex === 3 &&
                <View style={{ flexDirection: 'row', }}>
                    {inactiveIndicator()}
                    {inactiveIndicator()}
                    {activeIndicator()}
                </View>
            } */}


        </View>
    )

}

export default PaginationIndicator;