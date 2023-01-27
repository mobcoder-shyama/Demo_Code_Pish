import React from 'react';
import {View,Image, StyleSheet,Dimensions, ScrollView,Text} from 'react-native';
import AuthButton from '../../components/AuthButton';
import Colors from '../../constant/Colors';
const {width,height} = Dimensions.get('window')

const Login=(props)=>{

    return(
        <View style={styles.container}>
            <Image source={require('../../assests/png/LoginBGImg.png')} resizeMode={'stretch'} style={{height:296,width}}/>
            <View style={{alignItems:'center'}}>
                <Text style={styles.textStyle}>India’s first fantasy{'\n'}eCommerce platform</Text>
            </View>

            <AuthButton type={1} title={'Play now'}/>
            <AuthButton type={2} title={'Continue'}/>
            <AuthButton type={3} title={'Send OTP'}/>

            <View style={styles.bottomView}>
               <Text style={[styles.bottomtextStyle,{color:'#757575'}]}>By continuing, you agree to our </Text>
               <Text style={[styles.bottomtextStyle,{color:'#9E9E9E',marginTop:6}]}>Terms & Conditions</Text>
            </View>
       </View>
    )
   
  

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background.dark_black
        
    },
    textStyle: {
        color: '#E7E7E7',
        fontWeight:'500',
        fontSize: 24,
        fontFamily:'Gilroy-Regular',
        marginTop:36,
        textAlign:'center',
        letterSpacing:2,
        lineHeight:29
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
        fontWeight:'400',
        fontSize: 13,
        fontFamily:'Gilroy',
       letterSpacing:0.3
      },
})

export default Login;