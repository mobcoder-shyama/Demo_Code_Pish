import React from 'react';
import { Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { NextArrow, WhiteArrow } from '../assests/svg/AuthSvg';
const { width, height } = Dimensions.get('window')

const AuthButton = (props) => {
    let bg_color = props.type === 1 ? ['#F7E26F', '#EFB714', '#F576A6'] : props.type === 2 ? ['#9945FF', '#8752F3'] : ['#8076FE', '#5243FE']
    return (
        props.type === 1 ?
            <TouchableOpacity style={styles.container} onPress={props.onpress}>
                <LinearGradient colors={bg_color} style={styles.linearGradient} start={{ x: 0.0, y: 0 }} end={{ x: 1, y: 0 }}>
                    <Text style={styles.buttonText}>
                       {props?.title}
                    </Text>
                </LinearGradient>

            </TouchableOpacity> :

            <TouchableOpacity style={styles.container} onPress={props.onpress}>
                <LinearGradient colors={bg_color} style={styles.linearGradient} >
                    <Text style={styles.buttonText}>
                        {props?.title}
                    </Text>
                    <SvgXml xml={WhiteArrow} height={20} width={20} style={{left:10}} />

                </LinearGradient>

            </TouchableOpacity>
    )

}


const styles = StyleSheet.create({
    container: {
        width: width - 25,
        height: 45,
        alignSelf: 'center',
        marginTop: 25
    },
    linearGradient: {
        alignItems: 'center',
        height: 45,
        justifyContent: 'center',
        borderRadius: 8,
        flexDirection:'row'
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Gilroy',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontWeight:'600'
    },
})

export default AuthButton;