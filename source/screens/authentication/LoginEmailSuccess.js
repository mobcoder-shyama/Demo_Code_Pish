import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity, TextInput, ImageBackground, Alert, Platform } from 'react-native';
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





const LoginEmailSuccess = (props) => {


    const [secondsLeft, setSecondsLeft] = useState(60);
    const [isResendOTP, setResendOTP] = useState(false);
    const sendEmail = props?.route?.parmas?.email;
    console.log("props valuesss", props?.route?.params?.email)


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


    return (
        <View style={styles.container}>

            <View style={{ marginTop:Platform.OS ==='android'?25:60, alignSelf: 'center' }}>

                <Header title={''} navigation={props.navigation} />

                <View style={{ flex: 1,  alignItems: 'center',marginTop:50 }}>

                   
                    <Image source={require('../../assests/gif/mailSend.gif')} style={{height:172,width:172}}/>

                    <Text style={{ color: '#FFFFFF',fontSize:24,fontFamily:FontFamily['Gilroy'][700],fontWeight:700,marginTop:25 }}>Check your email</Text>
                   
                    <View style={{width:width-38,marginTop:10}}>
                    
                     <Text style={{ fontFamily:FontFamily['Gilroy'][600],color: '#FFFFFF',textAlign:'center',fontSize:16,fontWeight:600,lineHeight:20,letterSpacing:0.2 }}>To confirm your email address, please tap the button in the email we sent to{'\n'}{emailEncraptionFormat(props?.route?.params?.email)}</Text>

                    </View>

                    {<AuthButton type={2} title={'Or Manually Enter OTP'} isArrow={false}  onpress={()=>props.navigation.navigate('email_otp_verification',{'email':props?.route?.params?.email})}/>}

                    <View style={{ alignItems: 'center', marginTop: 40 }}>

                        {!isResendOTP && <Text style={{ color: '#757575',fontFamily:FontFamily['Gilroy'][600] }}>Resend link</Text>}

                        {isResendOTP && <TouchableOpacity onPress={() => startTimer()}>
                            <Text style={{ color: '#FFFFFF',fontFamily:FontFamily['Gilroy'][600] }}>Resend link</Text>
                        </TouchableOpacity>}



                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                            <SvgXml xml={ClockIcon} height={20} width={20} />
                            <Text style={{ color: '#757575', margin: 8,fontFamily:FontFamily['Gilroy'][600] }}>
                                {clockify().displayMins}:{clockify().displaySecs}
                            </Text>

                        </View>

                    </View>

                </View>



            </View>

        </View>
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

export default LoginEmailSuccess;