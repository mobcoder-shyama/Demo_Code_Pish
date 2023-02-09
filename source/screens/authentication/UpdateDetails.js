import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, Text, Animated, TextInput, TouchableWithoutFeedback, Alert, Platform, TouchableOpacity, Keyboard, BackHandler, FlatList, Modal } from 'react-native';
import { SvgXml } from 'react-native-svg';
import AuthButton from '../../components/AuthButton';
import Header from '../../components/Header';
import Colors from '../../constant/Colors';
const { width, height } = Dimensions.get('window');

import { FontFamily } from '../../constant/FontFamily';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constant/Dimensions';
import DisableButton from '../../components/DisableButton';
import { CheckIcon, DropdownIcon, IndianFlagIcon, SearchIcon, VioletSearchIcon, WhatsAppIcon, WhiteBackArrow } from '../../assests/svg/AuthSvg';
import ViewSeparator from '../../components/ViewSeparator';
import { getStringData } from '../../utils/AsyncStorage';
import { LOGIN_VIA } from '../../utils/AsyncKeys';


let dataItem = [
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    }
]


const UpdateDetails = (props) => {


    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [fName, setFName] = useState('');
    const [emailFocus, setEmailFocus] = React.useState(false);
    const [fNameFocus, setFNameFocus] = React.useState(false);
    const [mobileFocus, setMobileFocus] = React.useState(false);
    const [isWhatsApp, setWhatsApp] = useState(false);
    const [countryCodeModal, setCountryCodeModal] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [selectField, setSelectField] = useState(1)



    useEffect(() => {
        const backAction = () => {
            return true
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);


    useEffect(() => {
        getStoreData();
    }, []);

    const getStoreData = async () => {
        let returnData = await getStringData(LOGIN_VIA);
        console.log("returnData----", returnData);
        setSelectField(returnData)
    }







    const onBlurInput = () => {
        email.length === 0 && setEmailFocus(false)

    }

    const onBlurInputMobile = () => {
        mobile.length === 0 && setMobileFocus(false)

    }






    const onBlurInputFName = () => {
        fName.length === 0 && setFNameFocus(false)

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <View style={styles.container}>

                <View style={{ marginTop: SCREEN_HEIGHT < 675 ? 25 : Platform.OS === 'android' ? 25 : 60, alignSelf: 'center' }}>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#FFFFFF', fontFamily: FontFamily['Gilroy'][600], fontWeight: 600, lineHeight: 24, fontSize: 18, letterSpacing: 0.2, textAlign: 'center' }}>Personal details</Text>
                    </View>

                    <Text style={{ color: '#FFFFFF', fontFamily: FontFamily['Gilroy'][400], fontWeight: 400, lineHeight: 24, fontSize: 18, letterSpacing: 0.2, textAlign: 'center', marginTop: 44 }} >
                        Tell us a bit more about yourself
                    </Text>

                    <View style={[styles.inputContainer, { marginTop: 36 }]}>

                        {fNameFocus && <Animated.Text style={[{ color: 'grey', top: Platform.OS === 'android' ? 5 : -12, fontSize: 14, fontFamily: FontFamily['Gilroy'][500], color: '#BDBDBD' }]}>
                            Full Name
                        </Animated.Text>}


                        <TextInput
                            style={{
                                color: 'white', fontSize: 16, borderBottomWidth: 1.0, fontSize: 16,
                                borderBottomColor: '#757575', fontFamily: FontFamily['Gilroy'][500],
                            }}
                            placeholder={!fNameFocus ? "Full Name" : ''}
                            placeholderTextColor={'#757575'}
                            selectionColor={Colors.cursor.white}
                            keyboardType="default"
                            maxLength={50}
                            value={fName}
                            onChangeText={(text) => setFName(text)}
                            onFocus={() => setFNameFocus(true)}
                            onBlur={() => onBlurInputFName()}
                        //returnKeyType={'send'}
                        />




                    </View>

                    {selectField == 2 && <View style={styles.inputContainer}>

                        {emailFocus && <Animated.Text style={[{ color: 'grey', top: Platform.OS === 'android' ? 5 : -12, fontSize: 14, fontFamily: FontFamily['Gilroy'][500], color: '#BDBDBD' }]}>
                            Enter email
                        </Animated.Text>}


                        <TextInput
                            style={{
                                color: 'white', fontSize: 16, borderBottomWidth: 1.0, fontSize: 16,
                                borderBottomColor: '#757575', fontFamily: FontFamily['Gilroy'][500],
                            }}
                            placeholder={!emailFocus ? "Enter email" : ''}
                            placeholderTextColor={'#757575'}
                            selectionColor={Colors.cursor.white}
                            keyboardType="email-address"
                            maxLength={50}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => onBlurInput()}
                        //returnKeyType={'send'}
                        />




                    </View>}

                    {selectField == 1 && <View style={[styles.inputContainer]}>

                        {mobileFocus && <Animated.Text style={[{ color: 'grey', top: Platform.OS === 'android' ? 5 : -12, fontSize: 14, fontFamily: FontFamily['Gilroy'][500], color: '#BDBDBD' }]}>
                            Mobile
                        </Animated.Text>}


                        {!mobileFocus && <TextInput
                            style={{
                                color: 'white', fontSize: 16, borderBottomWidth: 1.0, fontSize: 16,
                                borderBottomColor: '#757575', fontFamily: FontFamily['Gilroy'][500],
                            }}
                            placeholder={!mobileFocus ? "Mobile" : ''}
                            placeholderTextColor={'#757575'}
                            selectionColor={Colors.cursor.white}
                            keyboardType="email-address"
                            maxLength={50}
                            value={email}
                            onChangeText={(text) => setMobile(text)}
                            onFocus={() => setMobileFocus(true)}
                            onBlur={() => onBlurInputMobile()}
                        //returnKeyType={'send'}
                        />}

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>

                            {mobileFocus &&

                                <TouchableOpacity onPress={() => setCountryCodeModal(!countryCodeModal)} style={{ flexDirection: 'row', borderBottomColor: '#757575', borderBottomWidth: 1.0, width: 55, alignItems: 'center', justifyContent: 'space-around', }}>

                                    <SvgXml xml={IndianFlagIcon} height={14} width={20} />
                                    <SvgXml xml={DropdownIcon} width={14} height={7}/>



                                </TouchableOpacity>

                            }

                            {mobileFocus && <Text style={{ color: 'white',borderBottomWidth: 1.0, borderBottomColor: '#757575',fontSize: 16, fontSize: 16, fontFamily: FontFamily['Gilroy'][500], paddingHorizontal: 8 }}>+91</Text>}



                            {mobileFocus &&

                                <TextInput
                                    autoFocus={true}
                                    style={{
                                        color: 'white', fontSize: 16, borderBottomWidth: 1.0, fontSize: 16,
                                        borderBottomColor: '#757575', fontFamily: FontFamily['Gilroy'][500], width: (width - 25) - 85
                                    }}
                                    placeholder={!mobileFocus ? "Mobile" : ''}
                                    placeholderTextColor={'#757575'}
                                    selectionColor={Colors.cursor.white}
                                    keyboardType='phone-pad'
                                    maxLength={50}
                                    value={mobile}
                                    onChangeText={(text) => setMobile(text)}
                                    onFocus={() => setMobileFocus(true)}
                                    onBlur={() => onBlurInputMobile()}
                                />}

                        </View>






                    </View>}


                    <View style={[styles.inputContainer, { marginTop: 36 }]}>

                        {fNameFocus && <Animated.Text style={[{ color: 'grey', top: Platform.OS === 'android' ? 5 : -12, fontSize: 14, fontFamily: FontFamily['Gilroy'][500], color: '#BDBDBD' }]}>
                            Referral code (Optional)
                        </Animated.Text>}


                        <TextInput
                            style={{
                                color: 'white', fontSize: 16, borderBottomWidth: 1.0, fontSize: 16,
                                borderBottomColor: '#757575', fontFamily: FontFamily['Gilroy'][500],
                            }}
                            placeholder={!fNameFocus ? "Referral code (Optional)" : ''}
                            placeholderTextColor={'#757575'}
                            selectionColor={Colors.cursor.white}
                            keyboardType="default"
                            maxLength={50}
                            value={fName}
                            onChangeText={(text) => setFName(text)}
                            onFocus={() => setFNameFocus(true)}
                            onBlur={() => onBlurInputFName()}
                        //returnKeyType={'send'}
                        />




                    </View>


                    <Modal
                        animationType={'slide'}
                        transparent={false}
                        animationOutTiming={1000}
                        visible={countryCodeModal}
                        onRequestClose={() => { console.log("Modal has been closed.") }}>
                        {/*All views of Modal*/}
                        <View style={styles.modal}>

                            <View style={styles.modalContainer}>

                                <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 40, right: 40 }} onPress={() => setCountryCodeModal(false)}>
                                    <SvgXml xml={WhiteBackArrow} style={{ transform: [{ rotate: '270deg' }], paddingHorizontal: 18 }} height={19.5} width={10.7} onPress={() => props.navigation.navigate('login')} />
                                </TouchableOpacity>

                            </View>


                            <View style={styles.searchContainer}>

                                {/* country code */}
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 14 }}>
                                    <SvgXml xml={SearchIcon} width={20.31} height={20.31} />
                                </View>


                                <TextInput
                                    style={{ color: 'white', fontSize: 14 }}
                                    placeholder="Search by country name..."
                                    placeholderTextColor={'#757575'}
                                    selectionColor={Colors.cursor.white}
                                    value={searchText}
                                    onChangeText={(text) => setSearchText(text)}
                                    maxLength={15}
                                    returnKeyType={'search'}
                                />

                            </View>

                            {/* <Loader/> */}
                            {/* 
                            <FlatList
                                style={{ marginTop: 25 }}
                                data={dataItem}
                                renderItem={({ item }) =>
                                    <View style={{ width: width - 25, height: 25, margin: 15, alignItems: 'center', flexDirection: 'row', }}>
                                        <SvgXml xml={item.flag} height={20} width={20} />
                                        <Text style={{ color: 'white', paddingHorizontal: 12 }}>{item.countryName}</Text>
                                        <Text style={{ color: 'white', paddingHorizontal: 12 }}>{item.countryCode}</Text>
                                    </View>

                                }
                                ItemSeparatorComponent={ViewSeparator}
                            /> */}


                        </View>

                    </Modal>















                </View>

                <View style={{
                    height: 0.5,
                    width: SCREEN_WIDTH,
                    alignSelf: 'center',
                    backgroundColor: "#424242",
                    marginTop: 45
                }} />

                <View style={{ width: SCREEN_WIDTH - 25, height: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 18, alignSelf: 'center' }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <SvgXml xml={WhatsAppIcon} height={20} width={20} />
                        <Text style={{ color: '#FFFFFF', textAlign: 'center', paddingHorizontal: 15, fontSize: 16, fontFamily: FontFamily['Gilroy'][500], fontWeight: 500 }}>Send me updates on WhatsApp</Text>
                    </View>
                    <TouchableOpacity onPress={() => setWhatsApp(!isWhatsApp)} hitSlop={{ right: 20, top: 20, bottom: 20, left: 10 }}>
                        {isWhatsApp && <View style={{ height: 18, width: 18, borderWidth: 1, borderColor: 'white', borderRadius: 2.5 }} />}
                        {!isWhatsApp && <SvgXml xml={CheckIcon} height={20} width={20} />}
                    </TouchableOpacity>




                </View>

                {fName?.length != 0 && (email?.length != 0 || mobile?.length != 0) && <AuthButton type={2} title={'Continue'} isArrow={false} onpress={() => props.navigation.replace('tabs')} />}
                {(fName?.length == 0 || (email?.length == 0 && mobile?.length == 0)) && <DisableButton type={2} title={'Continue'} isArrow={false} />}



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
        //margin:14
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
        marginTop: 30,
    },
    searchContainer: {
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
    lineView: {
        height: 0.5,
        width: SCREEN_WIDTH,
        backgroundColor: "#424242",
        marginTop: 45,
        alignSelf: 'center'
    },
    modal: {
        flex: 1,
        backgroundColor: 'black',

    },
    modalContainer: {
        marginTop: 45,
        width: width - 25,
        height: 45,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor:'red'

    },
})

export default UpdateDetails;