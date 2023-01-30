import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import SwiperComponent from './SwiperComponent';
import Walkthrough_One from './WalkThrough_One';
import Walkthrough_Three from './WalkThrough_Three';
import Walkthrough_Two from './WalkThrough_Two';

const OnBoarding = (props)=>{
    return(
        <SwiperComponent navigation={props.navigation}>
            <Walkthrough_One/>
            <Walkthrough_Two/>
            <Walkthrough_Three/>
        </SwiperComponent>
    )
}

export default OnBoarding;