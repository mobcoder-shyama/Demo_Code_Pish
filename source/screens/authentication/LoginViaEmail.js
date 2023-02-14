import React, { useState, useEffect, useRef } from 'react';
import { View, Modal, StyleSheet, Dimensions, Keyboard, Text,TouchableOpacity, TextInput, ImageBackground, TouchableWithoutFeedback, ScrollView, Alert, FlatList } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { GreyEmailIcon, WinFantasyIcon, IndianFlagIcon, WhiteBackArrow, VioletSearchIcon, GmailIcon, FBIcon } from '../../assests/svg/AuthSvg';
import AuthButton from '../../components/AuthButton';
import DisableButton from '../../components/DisableButton';
import Colors from '../../constant/Colors';
const { width, height } = Dimensions.get('window');
import { getFCMToken } from '../notification/NotificationHandler';
import { isEmpty, validEmail } from '../../utils/InputValidation'
import SeparatorTextView from '../../components/SeparatorTextView';
import { useDebunceEffect } from '../../utils/Effect';
import { FontFamily } from '../../constant/FontFamily';
import { SCREEN_HEIGHT } from '../../constant/Dimensions';




const LoginViaEmail = (props) => {

    const [state, setState] = useState({
        fcmToken: '',
        isContinue: false,
    })
    const [email, setEmail] = React.useState("");
    const [isValidEmail, setEmailValidate] = React.useState(false);

    useEffect(() => {
        fcmToken();
    }, []);

    useDebunceEffect(() => {
        if (email.length != 0) {
            let isValid = validEmail(email);
            setEmailValidate(isValid);
        }

    }, [email], 500)

    const fcmToken = async () => {
        let token = await getFCMToken();
        console.log(token);
    }

    const renderBottomView = () => {
        return (
            <View style={styles.bottomView}>
                <Text style={[styles.bottomtextStyle, { color: '#757575',fontFamily:FontFamily['Gilroy'][400],fontWeight:400  }]}>By continuing, you agree to our </Text>
                <TouchableOpacity hitSlop={{ right: 20, left: 20, bottom: 20 }} onPress={() => props.navigation.navigate('terms')}>
                    <Text style={[styles.bottomtextStyle, { color: '#9E9E9E', marginTop: 6 }]}>Terms & Conditions</Text>
                </TouchableOpacity>

            </View>
        )
    }

    const renderEmailView = () => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('login_with_email')} style={{ bottom: height < 650 ? 25 : 0 }}>
                <View style={styles.emailContainer}>
                    <Text style={styles.emailTextStyle} >Continue with Email </Text>
                </View>
                <View style={{ position: 'absolute', top: 25, bottom: 0, left: 24, right: 0, justifyContent: 'center' }}>
                    <SvgXml xml={GreyEmailIcon} width={20} height={16} />
                </View>
            </TouchableOpacity>

        )
    }

    const renderSeparatorView = (text) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', width: width - 25, alignSelf: 'center', height: 20, justifyContent: 'center', marginTop: 28 }}>
                <View style={{ height: 1, width: 100, backgroundColor: '#424242', alignSelf: 'center', right: 10 }} />
                <Text style={styles.emailTextStyle} >{text}</Text>
                <View style={{ height: 1, width: 100, backgroundColor: '#424242', left: 10 }} />
            </View>
        )
    }

    const handleLogin = () => {
         props.navigation.navigate('phone_otp_verification', { 'mobile': mobile })
        //state?.isContinue ? props.navigation.navigate('phone_otp_verification', { 'mobile': mobile }) : setState({ isContinue: true })


    }

    const { isContinue } = state;

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <View style={styles.container}>


                <ImageBackground source={height < 700 ? require('../../assests/png/LoginBGImg_Small.png') : require('../../assests/png/LoginBGImg.png')} resizeMode={'stretch'} style={{ height: height < 700 ? 160 : 296, width: width }}>

                    <View style={{ marginTop: 56, width, height: 'auto', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', left: 20 }}>

                        <SvgXml xml={WinFantasyIcon} width={92.6} height={93.3} />

                        <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ height: 24, width: 64, backgroundColor: '#2D2563', borderRadius: 20, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#918DAD', right: 40, bottom: 20 }}>
                            <Text style={{ color: '#FFFFFF', fontFamily: FontFamily['Gilroy'][400], fontSize: 13 }}>Close</Text>
                        </TouchableOpacity>

                    </View>



                </ImageBackground>

                {/* header container */}

                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.textStyle}>India’s first fantasy{'\n'}eCommerce platform</Text>
                </View>



                {<SeparatorTextView text={'Log in or sign up'} />}

                {   <View style={styles.inputContainer}>


                        <TextInput
                            style={{ color: 'white', paddingHorizontal: 12, fontSize: 16, fontFamily: FontFamily['Gilroy'][500] }}
                            placeholder="Enter email "
                            multiline={false}
                            selectionColor={Colors.cursor.white}
                            placeholderTextColor={'#757575'}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            keyboardType='email-address'
                            maxLength={50}
                            returnKeyType={'done'}
                        />

                    </View>}

              
              

                {isValidEmail && <AuthButton type={2} title={'Continue'} isArrow={false} onpress={() => props.navigation.navigate('login_email_success', { 'email': email })} />}

                {!isValidEmail && <DisableButton type={2} title={'Continue'} />}









               



                {renderBottomView()}





            </View>
        </TouchableWithoutFeedback>
    )



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.dark_black

    },
    emailContainer: {
        flexDirection: 'row',
        width: width - 25,
        height: 45,
        alignSelf: 'center',
        justifyContent: 'center',
        //justifyContent:'space-around',
        alignItems: 'center',
        marginTop: height < 600 ? 25 : 25,
        borderWidth: 1,
        borderColor: '#424242',
        borderRadius: 8
    },
    inputContainer: {
        flexDirection: 'row',
        width: width - 25,
        height: 48,
        alignSelf: 'center',
        //justifyContent: 'center',
        //justifyContent:'space-around',
        alignItems: 'center',
        marginTop: height < 600 ? 0 : 25,
        borderWidth: 1,
        borderColor: '#424242',
        borderRadius: 8
    },
    textStyle: {
        color: '#E7E7E7',
        fontWeight: '500',
        fontSize: 24,
        fontFamily: FontFamily['Gilroy'][500],
        marginTop: 36,
        textAlign: 'center',
        letterSpacing: 1,
        lineHeight: 29
    },
    emailTextStyle: {
        color: '#9E9E9E',
        fontWeight: '500',
        fontSize: 14,
        fontFamily: 'Gilroy-Regular',
        textAlign: 'center',
        letterSpacing: 0.2,
    },
    bottomView: {
        width: '100%',
        height: 50,
        //marginTop:64,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: height < 700 ? 24 : 30, //Here is the trick
    },
    bottomtextStyle: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 13,
        fontFamily: FontFamily['Gilroy'][600],
        letterSpacing: 0.3
    },
    modal: {
        flex: 1,
        backgroundColor: 'black',

    },
    modalContainer: {
        marginTop: 25,
        width: width - 25,
        height: 45,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor:'red'

    },
})

export default LoginViaEmail;