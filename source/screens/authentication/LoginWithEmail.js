import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView, Text, TouchableOpacity, TextInput, ImageBackground, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { GreyEmailIcon, WinFantasyIcon } from '../../assests/svg/AuthSvg';
import AuthButton from '../../components/AuthButton';
import DisableButton from '../../components/DisableButton';
import Header from '../../components/Header';
import ViewSeparator from '../../components/ViewSeparator';
import Colors from '../../constant/Colors';
const { width, height } = Dimensions.get('window');
import {validEmail} from '../../utils/InputValidation';

export const useDebunceEffect=(effect,deps,delay)=>{
    useEffect(()=>{
      const handler = setTimeout(()=>effect(),delay)
      return () => clearTimeout(handler);
     },[...deps || [],delay])
 }

const LoginWithEmail = (props) => {

    const [email, setEmail] = React.useState("");
    const[isValidEmail,setEmailValidate] = React.useState(false);

   
    useDebunceEffect(()=>{
        if(email.length != 0){
           let isValid = validEmail(email);
           setEmailValidate(isValid);
           console.log("isValid ---------",isValid)
        }
         
    },[email],500)
   

  
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>

            <View style={{marginTop:60,alignSelf:'center'}}>

                <Header title={'Continue with Email'} navigation={props.navigation}/>

                <View style={styles.inputContainer}>
                

                <TextInput
                    style={{color:'white',fontSize:16, borderBottomWidth : 1.0,fontSize:16,
                    borderBottomColor:'#757575'}}
                    placeholder="Enter email"
                    placeholderTextColor={'#757575'}
                    keyboardType="email-address"
                    maxLength={50}
                    value={email}
                    onChangeText={(text)=>setEmail(text)}
                    returnKeyType={'send'}
                />


             

                </View>

                 {!isValidEmail && <DisableButton type={2} title={'Send OTP'}/>}
                 {isValidEmail && <AuthButton onpress={()=>props.navigation.navigate('login_email_success',{'email':email})} type={2} title={'Send OTP'} isArrow={false} />}

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