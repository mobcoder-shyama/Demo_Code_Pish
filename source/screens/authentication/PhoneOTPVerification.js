import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity, TextInput, ImageBackground, Alert, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SvgXml } from 'react-native-svg';
import AuthButton from '../../components/AuthButton';
import Header from '../../components/Header';
import Colors from '../../constant/Colors';
const { width, height } = Dimensions.get('window');
import BackgroundTimer from "react-native-background-timer"
import { emailEncraptionFormat } from '../../utils/InputValidation';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { FontFamily } from '../../constant/FontFamily';
import { SCREEN_HEIGHT } from '../../constant/Dimensions';
import { RFValue } from 'react-native-responsive-fontsize';





const PhoneOTPVerification = (props) => {


    const [secondsLeft, setSecondsLeft] = useState(60);
    const [isResendOTP, setResendOTP] = useState(false);
    const [otp, setOTP] = useState('');
    const sendEmail = props?.route?.parmas?.email;
    console.log("props valuesss", props?.route?.params?.mobile)


    useEffect(() => {
        startTimer();
    }, []);

    useEffect(() => {
        if (secondsLeft === 0) {
            BackgroundTimer.stopBackgroundTimer();
            setResendOTP(true);
            setSecondsLeft(60)
        }
    }, [secondsLeft])

    const startTimer = () => {
        setResendOTP(false);
        BackgroundTimer.runBackgroundTimer(() => {
            setSecondsLeft(secs => {
                if (secs > 0) return secs - 1
                else return 0
            })
        }, 1000)
    }

    const clockify = () => {
        let mins = Math.floor((secondsLeft / 60) % 60)
        let seconds = Math.floor(secondsLeft % 60)
        let displayMins = mins < 10 ? `0${mins}` : mins
        let displaySecs = seconds < 10 ? `0${seconds}` : seconds
        return {
            displayMins,
            displaySecs,
        }
    }

    const resendOTP = () => {
        //setResendOTP(!isResendOTP)
        startTimer()
    }

    const renderResendView = () => {
        return (
            <TouchableOpacity onPress={() => resendOTP()} disabled={isResendOTP ? false : true} style={{ flexDirection: 'row', width:180, height:45, borderWidth: 1, borderColor: !isResendOTP ? '#757575' : '#9945FF', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginTop: 20 }}>
                <Text style={{ color: !isResendOTP ? '#757575' : '#9945FF', fontSize:RFValue(14) }}>Resend SMS</Text>
                {!isResendOTP && <Text style={{ color: '#757575', margin:5,fontSize:RFValue(14) }}>in {clockify().displayMins}:{clockify().displaySecs}</Text>}
            </TouchableOpacity>

        )
    }

    const updateCode = (value) => {
        let otpValue = otp + value;
        console.log("otpValue------", otpValue)
        otpValue?.length == 6 && setOTP(otpValue);

    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>

            <View style={{ marginTop:SCREEN_HEIGHT<675?25:Platform.OS==='android'?25:60, alignSelf: 'center' }}>

                <Header title={''} navigation={props.navigation} />

                <Text style={{ color: '#FFFFFF', fontFamily:FontFamily['Gilroy'][400],fontWeight:400, lineHeight: 24, fontSize:20, letterSpacing: 0.2,paddingHorizontal:16 }} >
                    <Text style={{fontFamily:FontFamily['Gilroy'][400],fontWeight:400}}>Enter the 6-digit OTP sent to{'\n'}</Text>
                    <Text style={{fontFamily:FontFamily['Gilroy'][700],fontWeight:700}}>+91-{props?.route?.params?.mobile}</Text>
                    
                </Text>


                <View style={{ flex: 1, alignItems: 'center', marginTop: 45 }}>


                   <OTPInputView
                        autoFocusOnLoad={Platform.OS==='android'?false:true}
                        selectionColor='white'
                        pinCount={6}
                        secureTextEntry={false}
                        style={{ width:SCREEN_HEIGHT<675?width-15:width - 25, height: 20, marginTop: 45, alignSelf: 'center' }}
                        codeInputFieldStyle={styles.otpBoxStyle}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeChanged={(text) => updateCode(text)}
                        onCodeFilled={()=>props.navigation.replace('update_details')}    // 
                        keyboardAppearance={'light'}
                    />

                    <View style={{ marginTop: 28 }} />

                    {renderResendView()}

                    <TouchableOpacity onPress={()=>props.navigation.replace('login_with_email')}style={{ alignItems: 'center', marginTop: 20 }}>
                         <Text style={{ color: '#9945FF', fontFamily:FontFamily['Gilroy'][400], lineHeight: 16, fontSize:13, letterSpacing: 0.2 }}>Try other login method</Text>
                    </TouchableOpacity>

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
    otpBoxStyle: {
        width: 48,
        height: 56,
        borderWidth: 1,
        borderRadius: 10,
        zIndex: 5,
        backgroundColor: 'transparent',
        borderColor: '#424242',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontFamily:FontFamily['Gilroy'][600]
        //margin:14
    },
    underlineStyleHighLighted: {
        borderColor:Colors.border.white,
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
        fontFamily:FontFamily['Gilroy'][400],
        letterSpacing: 0.3
    },
})

export default PhoneOTPVerification;