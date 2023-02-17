import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity, KeyboardAvoidingView, Keyboard, Alert, Platform, TouchableWithoutFeedback } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { ClockIcon, GreyEmailIcon, WinFantasyIcon } from '../../assests/svg/AuthSvg';
import AuthButton from '../../components/AuthButton';
import DisableButton from '../../components/DisableButton';
import Header from '../../components/Header';
import ViewSeparator from '../../components/ViewSeparator';
import Colors from '../../constant/Colors';
const { width, height } = Dimensions.get('window');
import BackgroundTimer from "react-native-background-timer"
import { emailEncraptionFormat } from '../../utils/InputValidation';
import { FontFamily } from '../../constant/FontFamily';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { storeObjectData } from '../../utils/AsyncStorage';
import { LOGIN_VIA } from '../../utils/AsyncKeys';





const LoginEmailSuccess = (props) => {


    const [secondsLeft, setSecondsLeft] = useState(60);
    const [isResendOTP, setResendOTP] = useState(false);
    const [otpValue, setOTPValue] = useState('');
    const sendEmail = props?.route?.parmas?.email;
    console.log("props valuesss", props?.route?.params?.email)
    let otpInput = '';
    let otp = [];

    useEffect(() => {
        //startTimer();
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
        let hours = Math.floor(secondsLeft / 60 / 60)
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
            <TouchableOpacity onPress={() => resendOTP()} disabled={isResendOTP ? false : true} style={{ flexDirection: 'row', width: width - 25, height: 45, borderWidth: 1, borderColor: !isResendOTP ? '#757575' : '#9945FF', alignItems: 'center', justifyContent: 'center', borderRadius: 8, marginTop: 20 }}>
                <Text style={{ color: !isResendOTP ? '#757575' : '#9945FF', fontSize: 16,fontFamily:FontFamily['Gilroy'][600],letterSpacing:0.2 }}>Resend OTP</Text>
                {!isResendOTP && <Text style={{ color: '#757575', margin: 8, fontSize: 16,fontFamily:FontFamily['Gilroy'][600] }}> {clockify().displayMins}:{clockify().displaySecs}</Text>}
            </TouchableOpacity>

        )
    }

    const handleLogin=async()=>{
        console.log("0000000000000-----stye",otpValue?.length,"------",otpValue);
        await storeObjectData(LOGIN_VIA,2);    // 1 For via mobile number
        props.navigation.replace('update_details');
    }

    

    const updateCode = (value) => {
         setOTPValue(value)
         console.log("2321423432-----stye",otpValue);
    }


    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
       
        <View style={styles.container}>

            <View style={{ marginTop:Platform.OS ==='android'?25:60, alignSelf: 'center' }}>

                <Header title={''} navigation={props.navigation} />

                <View style={{ flex: 1,  alignItems: 'center',marginTop:0 }}>

                   
                    <Image source={require('../../assests/gif/mailSend.gif')} style={{height:172,width:172}}/>

                    <Text style={{ color: '#FFFFFF',fontSize:24,fontFamily:FontFamily['Gilroy'][700],fontWeight:700,marginTop:25 }}>Check your email</Text>
                   
                    <View style={{width:288,marginTop:10}}>
                    
                     <Text style={{ fontFamily:FontFamily['Gilroy'][600],color: '#FFFFFF',textAlign:'center',fontSize:16,fontWeight:600,letterSpacing:0.2 }}>To confirm your email address, please enter the OTP we sent to{'\n'}{emailEncraptionFormat(props?.route?.params?.email)}</Text>

                    </View>

                    <OTPInputView
                        autoFocusOnLoad={Platform.OS ==='android'?false:true}
                        
                        selectionColor='white'
                        pinCount={6}
                        secureTextEntry={false}
                        style={{ width: width - 25, height: 20, marginTop: 45, alignSelf: 'center',fontFamily:FontFamily['Gilroy'][700],fontWeight:700 }}
                        codeInputFieldStyle={styles.otpBoxStyle}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeChanged={(code) => updateCode(code)}
                        //onFocus={()=>Alert.alert("focuss")}
                        //onBlur={()=>Alert.alert("Blue")}
                        keyboardAppearance={'dark'}
                    />
                    <View style={{height:28}}/>


                 

                    {otpValue?.length != 6 && <DisableButton type={2} title={'Continue'} isArrow={false} />}

                    {otpValue?.length == 6 && <AuthButton type={2} title={'Continue'} isArrow={false}  onpress={()=>handleLogin()}/>}
                   
                   
                    {renderResendView()}


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
})

export default LoginEmailSuccess;