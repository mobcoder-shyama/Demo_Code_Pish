import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions, ScrollView, Text, TouchableOpacity, TextInput, ImageBackground, Alert, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { GreyEmailIcon, WinFantasyIcon } from '../../assests/svg/AuthSvg';
import AuthButton from '../../components/AuthButton';
import DisableButton from '../../components/DisableButton';
import Header from '../../components/Header';
import ViewSeparator from '../../components/ViewSeparator';
import Colors from '../../constant/Colors';
import { SCREEN_HEIGHT } from '../../constant/Dimensions';
import { FontFamily } from '../../constant/FontFamily';
const { width, height } = Dimensions.get('window');
import { validEmail } from '../../utils/InputValidation';

export const useDebunceEffect = (effect, deps, delay) => {
    useEffect(() => {
        const handler = setTimeout(() => effect(), delay)
        return () => clearTimeout(handler);
    }, [...deps || [], delay])
}

const LoginWithEmail = (props) => {

    const [email, setEmail] = React.useState("");
    const [isValidEmail, setEmailValidate] = React.useState(false);
    const [emailFocus, setEmailFocus] = React.useState(false);


    useDebunceEffect(() => {
        if (email.length != 0) {
            let isValid = validEmail(email);
            setEmailValidate(isValid);
            console.log("isValid ---------", isValid)
        }

    }, [email], 500)

    const onBlurInput = () => {
        email.length === 0 && setEmailFocus(false)

    }



    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>

                <View style={{ marginTop:SCREEN_HEIGHT<675?25:Platform.OS==='android'?30:60, alignSelf: 'center' }}>

                    <Header title={'Continue with Email'} navigation={props.navigation} isDownArrow={true} />

                    <View style={styles.inputContainer}>

                        {emailFocus && <Animated.Text  style={[{ color: 'grey',top:Platform.OS==='android'?10:-10,fontSize: 16,fontFamily:FontFamily['Gilroy'][500],color:'#BDBDBD' }]}>
                           Email address
                        </Animated.Text>}


                        <TextInput
                            style={{
                                color: 'white', fontSize: 16, borderBottomWidth: 1.0, fontSize: 16,fontFamily:FontFamily['Gilroy'][500],
                                borderBottomColor: '#757575'
                            }}
                            placeholder={!emailFocus ? "Email address" : ''}
                            placeholderTextColor={'#757575'}
                            selectionColor={Colors.cursor.white}
                            keyboardType="email-address"
                            maxLength={50}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => onBlurInput()}
                            returnKeyType={'send'}
                        />




                    </View>

                    <View style={{marginTop:Platform.OS ==='android'?25:0}}>
                    {!isValidEmail && <DisableButton type={2} title={'Send OTP'} />}
                    {isValidEmail && <AuthButton onpress={() => props.navigation.navigate('login_email_success', { 'email': email })} type={2} title={'Send OTP'} isArrow={false} />}

                    </View>

                   
                </View>


























            </View>
        </TouchableWithoutFeedback>
    )



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.dark_black,


    },
    emailContainer: {
        flexDirection: 'row',
        width: width - 25,
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        //justifyContent:'space-around',
        alignItems: 'center',
        marginTop: 25,
        borderWidth: 1,
        borderColor: '#424242',
        borderRadius: 8
    },
    inputContainer: {
        width: width - 25,
        height: 45,
        //backgroundColor:'red',
        //alignSelf: 'center',
        //alignItems: 'center',
        marginTop: 25,
    },
    textStyle: {
        color: '#E7E7E7',
        fontWeight: '500',
        fontSize: 24,
        fontFamily: 'Gilroy-Regular',
        marginTop: 36,
        textAlign: 'center',
        letterSpacing: 2,
        lineHeight: 29
    },
    emailTextStyle: {
        color: '#E7E7E7',
        fontWeight: '500',
        fontSize: 14,
        fontFamily: 'Gilroy-Regular',
        textAlign: 'center',
        letterSpacing: 0.2,
        lineHeight: 14
    },
    bottomView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 40, //Here is the trick
    },
    bottomtextStyle: {
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: 13,
        fontFamily: 'Gilroy',
        letterSpacing: 0.3
    },
})

export default LoginWithEmail;