import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SCREEN_WIDTH,SCREEN_HEIGHT } from '../constant/Dimensions';
import { FontFamily } from '../constant/FontFamily';


const SeparatorTextView = (props) => {

    return (
        <View style={{  width: SCREEN_WIDTH - 25,height:20,marginTop:SCREEN_HEIGHT<600?14:28,alignSelf:'center'}}>
           
            <View style={SeparatorTextStyles.container} />
            
            <View style={{ position: 'absolute', top:0, bottom:0, left: 0, right: 0,}}>
               
                <View style={{height:20,alignSelf:'center',backgroundColor:'#0D0D0D',position:'absolute',bottom:7.5 }}>
                   <Text style={SeparatorTextStyles.textStyle}>{props?.text}</Text>
                </View>
              
            </View>

        </View>


    )

}
const SeparatorTextStyles = StyleSheet.create({
    container: {
        height: 0.5,
        width: SCREEN_WIDTH - 25,
        alignSelf: 'center',
        backgroundColor: '#424242'
    },
    textStyle: {
        color: '#9E9E9E',
        fontWeight: '600',
        fontSize: 14,
        fontFamily:FontFamily['Gilroy'][600],
        textAlign: 'center',
        letterSpacing: 0.2,
        lineHeight: 14,
        paddingHorizontal:16
    },
})
export default SeparatorTextView;