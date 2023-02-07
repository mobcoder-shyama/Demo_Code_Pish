import React from 'react';
import { Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgXml } from 'react-native-svg';
import { NextArrow, WhiteArrow } from '../assests/svg/AuthSvg';
import { WhiteEmailIcon } from '../assests/svg/MainSvg';
import { FontFamily } from '../constant/FontFamily';
const { width, height } = Dimensions.get('window');


const SocialButton = (props) => {
 
    return (
            <TouchableOpacity style={styles.container} onPress={props.onpress}>
                <SvgXml xml={props?.icon} height={20} width={20}/>
            </TouchableOpacity>
    )

}


const styles = StyleSheet.create({
    container: {
        width:52,
        height: 52,
        borderRadius:26,
        borderWidth:1,
        borderColor:'#757575',
        alignSelf: 'center',
        alignItems:'center',
        justifyContent:'center',
        margin:24
    },
   
})

export default SocialButton;