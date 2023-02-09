import React, { useState, useEffect, useRef } from 'react';
import { View, Modal, StyleSheet, Dimensions, Keyboard, Text,TouchableOpacity, TextInput, ImageBackground, TouchableWithoutFeedback, ScrollView, Alert, FlatList } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { GreyEmailIcon, WinFantasyIcon, IndianFlagIcon, WhiteBackArrow, SearchIcon, GmailIcon, FBIcon, DropdownIcon } from '../../assests/svg/AuthSvg';
import AuthButton from '../../components/AuthButton';
import DisableButton from '../../components/DisableButton';
import Colors from '../../constant/Colors';
const { width, height } = Dimensions.get('window');
import { getFCMToken } from '../notification/NotificationHandler';
import { isEmpty } from '../../utils/InputValidation'
import SeparatorTextView from '../../components/SeparatorTextView';
import { useDebunceEffect } from '../../utils/Effect';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FontFamily } from '../../constant/FontFamily';
import { SCREEN_HEIGHT } from '../../constant/Dimensions';
import Loader from '../../components/Loader';
import ViewSeparator from '../../components/ViewSeparator';
import SocialButton from '../../components/SocialButton';
import { WhiteEmailIcon } from '../../assests/svg/MainSvg';

let data= [
    {
        countryName: 'India',
        flag: IndianFlagIcon,
        countryCode: '+91'
    },
    {
        countryName: 'Bangladesh',
        flag: IndianFlagIcon,
        countryCode: '+90'
    },
    {
        countryName: 'Pakistan',
        flag: IndianFlagIcon,
        countryCode: '+928'
    },
]


const Login = (props) => {

    const [state, setState] = useState({
        fcmToken: '',
        isContinue: false,
    })
    const [mobile, setMobile] = useState('');
    const[countryCode,setCountryCode] = useState('+91')
    const [countryModal, setCountryModal] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [dataItem, setDataItem] = useState(data);


    useEffect(() => {
        fcmToken();
    }, []);

    useDebunceEffect(() => {
        if (searchText.length != 0) {
            Keyboard.dismiss();
        //     const newData = dataItem.filter(item => {      
        //         const itemData = `${item.countryName.toUpperCase()}   
        //         ${item.countryName.toUpperCase()} ${item.countryName.toUpperCase()}`;
        //         console.log("itemData------",itemData)
        //         const textData = searchText.toUpperCase();
        //         return itemData.indexOf(textData) > -1; 
                
                
        //       });

        //       setDataItem(newData)
              
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

    const selectCountry=(item)=>{
        console.log("selectCountry------",item?.countryCode)
        setCountryCode(item?.countryCode);
        setSearchText('')
        setCountryModal(false);
    }

    const { isContinue } = state;

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <View style={styles.container}>


                <ImageBackground source={height < 700 ? require('../../assests/png/LoginBGImg_Small.png') : require('../../assests/png/LoginBGImg.png')} resizeMode={'stretch'} style={{ height: height < 700 ? 160 : 296, width: width }}>

                    <View style={{ marginTop: 56, width, height: 'auto', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', left: 20 }}>

                        <SvgXml xml={WinFantasyIcon} width={92.6} height={93.3} />

                        <TouchableOpacity onPress={() => props.navigation.replace('tabs')} style={{ height: 24, width: 64, backgroundColor: '#2D2563', borderRadius: 20, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#918DAD', right: 40, bottom: 20 }}>
                            <Text style={{ color: '#FFFFFF', fontFamily: FontFamily['Gilroy'][400], fontSize: 13 }}>Skip</Text>
                        </TouchableOpacity>

                    </View>


                </ImageBackground>

                {/* header container */}

                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.textStyle}>India’s first fantasy{'\n'}eCommerce platform</Text>
                </View>



                {<SeparatorTextView text={'Log in or sign up'} />}

                {   <View style={styles.inputContainer}>

                        {/* country code */}
                        <TouchableOpacity onPress={() => setCountryModal(true)} hitSlop={{top:20,bottom:20}} style={{ width: 70, flexDirection: 'row', alignItems: 'center',flexDirection:'row',justifyContent:'space-around',}}>
                            <SvgXml xml={IndianFlagIcon} width={20} height={16} />
                            <SvgXml xml={DropdownIcon} width={14} height={7} style={{right:9}}  />
                          
                        </TouchableOpacity>

                        <View style={{ height: 30, width: 1, backgroundColor: '#757575' }} />

                        <Text style={{ color: 'white', margin: 8, fontSize: RFValue(16), fontFamily: FontFamily['Gilroy'][500] }}>{countryCode}</Text>

                        <TextInput
                            style={{ color: 'white', paddingHorizontal: 12, fontSize: 16, fontFamily: FontFamily['Gilroy'][500] }}
                            placeholder="Enter mobile number"
                            selectionColor={Colors.cursor.white}
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
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 14 }}>
                                <SvgXml xml={SearchIcon} width={20.31} height={20.31} />
                            </View>


                            <TextInput
                                style={{ color: 'white', fontSize: RFValue(14) }}
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

                        <FlatList
                            style={{marginTop:25,backgroundColor:Colors.background.grey_black}}
                            data={dataItem}
                            renderItem={({ item }) =>
                                 <TouchableOpacity onPress={()=>selectCountry(item)}style={{width:width-25,height:25,margin:15,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <SvgXml xml={item.flag} height={20} width={20}/>
                                    <Text style={{color:'white',paddingHorizontal:12,fontFamily:FontFamily['Gilroy'][600]}}>{item.countryName}</Text>
                                    </View>  
                                 
                                  <Text style={{color:'white',paddingHorizontal:12,fontFamily:FontFamily['Gilroy'][600]}}>{item.countryCode}</Text>
                                </TouchableOpacity>
                                
                                }
                            ItemSeparatorComponent={ViewSeparator}
                        />


                    </View>

                </Modal>


                {!isEmpty(mobile) && <AuthButton type={2} title={'Continue'} isArrow={false} onpress={() => handleLogin()} />}

                {isEmpty(mobile) && <DisableButton type={2} title={'Continue'} />}








                {/* {renderSeparatorView('Or')} */}

                <SeparatorTextView text={'Or'} />


                {/* Social Button view */}

                <View style={{flexDirection:'row',alignSelf:'center'}}>
                   <SocialButton icon={FBIcon}/>
                   <SocialButton icon={GmailIcon}/>
                   <SocialButton  icon={WhiteEmailIcon} onpress={() => props.navigation.navigate('login_with_email')} />
                </View>

                

               
                 {/* {renderEmailView()} */}



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

export default Login;