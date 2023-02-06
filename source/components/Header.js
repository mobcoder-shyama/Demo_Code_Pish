import React, { useEffect } from 'react';
import { Text, Dimensions, View, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { WhiteBackArrow } from '../assests/svg/AuthSvg';
import Colors from '../constant/Colors';
import { SCREEN_WIDTH } from '../constant/Dimensions';
import Font from '../constant/Font';
import { FontFamily } from '../constant/FontFamily';


const Header = (props) => {
  

   

    return (
        <View style={styles.container}>

                <TouchableOpacity hitSlop={{top:20,bottom:20,left:20,right:20}} onPress={() => props.navigation.goBack()}>
                   <SvgXml xml={WhiteBackArrow}  style={{ transform: [{ rotate: props?.isDownArrow?'270deg':'0deg' }],paddingHorizontal: 18 }} height={19.5} width={10.7} onPress={() => props.navigation.navigate('login')} />
                </TouchableOpacity>

               <Text style={styles.buttonText}>{props.title}</Text>

               <View style={{width:25}} />

        </View>

    )

}


const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH - 25,
        height: 45,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    buttonText: {
        fontSize: 16,
        fontFamily:FontFamily['Gilroy'][600],
        textAlign: 'center',
        margin: 10,
        color:Colors.textColor.white,
        backgroundColor: 'transparent',
        fontWeight: '600'
    },
})

export default Header;