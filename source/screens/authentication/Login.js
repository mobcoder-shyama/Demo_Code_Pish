import React, { useState, useEffect, useRef } from 'react';
import { View, Modal, StyleSheet, Dimensions, Keyboard, Text, TouchableOpacity, TextInput, ImageBackground, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { GreyEmailIcon, WinFantasyIcon, IndianFlagIcon, WhiteBackArrow, VioletSearchIcon } from '../../assests/svg/AuthSvg';
import AuthButton from '../../components/AuthButton';
import DisableButton from '../../components/DisableButton';
import Colors from '../../constant/Colors';
const { width, height } = Dimensions.get('window');
import { getFCMToken } from '../notification/NotificationHandler';
import { isEmpty } from '../../utils/InputValidation'
import SeparatorTextView from '../../components/SeparatorTextView';
import { useDebunceEffect } from '../../utils/Effect';

const Login = (props) => {

    const [state, setState] = useState({
        fcmToken: '',
        isContinue: false,
    })
    const [mobile, setMobile] = useState('');
    const [countryModal, setCountryModal] = useState(false);
    const[searchText,setSearchText] = useState('');

    useEffect(() => {
        fcmToken();
    }, []);

    useDebunceEffect(() => {
        if (searchText.length != 0) {
            Keyboard.dismiss();
        }

    }, [searchText], 500)

    const fcmToken = async () => {
        let token = await getFCMToken();
        console.log(token);
        setState({ fcmToken: token })
    }

    const renderBottomView = () => {
        return (
            <View style={styles.bottomView}>
                <Text style={[styles.bottomtextStyle, { color: '#757575' }]}>By continuing, you agree to our </Text>
                <TouchableOpacity hitSlop={{ right: 20, left: 20, bottom: 20 }} onPress={() => props.navigation.navigate('terms')}>
                    <Text style={[styles.bottomtextStyle, { color: '#9E9E9E', marginTop: 6 }]}>Terms & Conditions</Text>
                </TouchableOpacity>

            </View>
        )
    }

    const renderEmailView = () => {
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('login_with_email')}>
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

    const { isContinue } = state;

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <View style={styles.container}>

                <ImageBackground source={require('../../assests/png/LoginBGImg.png')} resizeMode={'stretch'} style={{ height: 296, width: width }}>

                    <View style={{ marginTop: 56, width, height: 'auto', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', left: 20 }}>

                        <SvgXml xml={WinFantasyIcon} width={92.6} height={93.3} />

                        <TouchableOpacity style={{ height: 24, width: 64, backgroundColor: '#2D2563', borderRadius: 20, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#918DAD', right: 40, bottom: 20 }}>
                            <Text style={{ color: '#FFFFFF', fontFamily: 'Gilroy', fontSize: 13 }}>Skip</Text>
                        </TouchableOpacity>

                    </View>

                    {/* <SvgXml xml={WinFantasyIcon} width={92.6} height={93.3} />


                <TouchableOpacity style={{ height: 24, width: 64, backgroundColor: '#2D2563', marginTop: 52, borderRadius: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end', right: 20, borderWidth: 1, borderColor: '#918DAD' }}>
                    <Text style={{ color: '#FFFFFF', fontFamily: 'Gilroy', fontSize: 13 }}>Skip</Text>
                </TouchableOpacity> */}


                </ImageBackground>

                {/* header container */}

                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.textStyle}>India’s first fantasy{'\n'}eCommerce platform</Text>
                    {/* <Text style={styles.textStyle} >Device FCM token :- {state.fcmToken} </Text> */}
                </View>



                {!isContinue && <SeparatorTextView text={'Log in or sign up'} />}

                {!isContinue &&
                    <View style={styles.inputContainer}>

                        {/* country code */}
                        <TouchableOpacity onPress={() => setCountryModal(true)} style={{ width: 76, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <SvgXml xml={IndianFlagIcon} width={20} height={16} />
                            <Text style={{ color: 'white', margin: 8, fontSize: 16, fontFamily: 'Gilroy' }}>+91</Text>
                        </TouchableOpacity>

                        <View style={{ height: 30, width: 1, backgroundColor: '#757575' }} />

                        <TextInput
                            style={{ color: 'white', paddingHorizontal: 12, fontSize: 16 }}
                            placeholder="Enter mobile number"
                            placeholderTextColor={'#757575'}
                            value={mobile}
                            onChangeText={(text) => setMobile(text)}
                            keyboardType='phone-pad'
                            maxLength={15}
                            returnKeyType={'done'}
                        />

                    </View>}

                <Modal
                    animationType={'slide'}
                    transparent={false}
                    animationOutTiming={1000}
                    visible={countryModal}
                    
                    onRequestClose={() => { console.log("Modal has been closed.") }}>
                    {/*All views of Modal*/}
                    <View style={styles.modal}>

                        <View style={styles.modalContainer}>

                            <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 40, right: 40 }} onPress={() => setCountryModal(false)}>
                                <SvgXml xml={WhiteBackArrow} style={{ transform: [{ rotate: '270deg' }], paddingHorizontal: 18 }} height={19.5} width={10.7} onPress={() => props.navigation.navigate('login')} />
                            </TouchableOpacity>

                        </View>


                        <View style={styles.inputContainer}>

                            {/* country code */}
                            <TouchableOpacity onPress={() => setCountryModal(true)} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',paddingHorizontal:14 }}>
                                <SvgXml xml={VioletSearchIcon} width={20.31} height={20.31} />
                            </TouchableOpacity>


                            <TextInput
                                style={{ color: 'white',fontSize: 16 }}
                                placeholder="Search by country name..."
                                placeholderTextColor={'#757575'}
                                value={searchText}
                                onChangeText={(text) => setSearchText(text)}
                                maxLength={15}
                                returnKeyType={'search'}
                            />

                        </View>


                    </View>

                </Modal>

                {isContinue && <View style={{ alignSelf: 'center', alignItems: 'center', marginTop: 25 }}>
                    <Text style={{ color: 'white', fontSize: 36, fontFamily: 'Gilroy' }}>+91 12334345345</Text>
                    <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Gilroy', marginTop: 12, fontWeight: 500 }}> Is this the correct number?</Text>
                    <TouchableOpacity style={{ marginTop: 24 }} onPress={() => setState({ isContinue: false })}>
                        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Gilroy', fontWeight: 600 }}>Edit</Text>
                    </TouchableOpacity>


                </View>}

                {!isEmpty(mobile) && <AuthButton type={2} title={'Continue'} isArrow={false} onpress={() => setState({ isContinue: true })} />}

                {isEmpty(mobile) && <DisableButton type={2} title={'Continue'} />}








                {/* {renderSeparatorView('Or')} */}

                <SeparatorTextView text={'Or'} />

                {renderEmailView()}



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
        marginTop: 25,
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
        marginTop: 25,
        borderWidth: 1,
        borderColor: '#424242',
        borderRadius: 8
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
        color: '#9E9E9E',
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
    modal: {
        flex: 1,
        backgroundColor: 'black',

    },
    modalContainer: {
        marginTop: 61,
        width: width - 25,
        height: 45,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
})

export default Login;