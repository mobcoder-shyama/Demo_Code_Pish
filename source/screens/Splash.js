import React,{useEffect} from 'react';
import {View,Text, StyleSheet, Platform} from 'react-native';
import Colors from '../constant/Colors';
import { SvgXml } from 'react-native-svg';
import { Splash_Logo,Heart_Icon } from '../assests/svg/AuthSvg';
import { FontFamily } from '../constant/FontFamily';
import { getStringData } from '../utils/AsyncStorage';
import { FIRST_LOGIN } from '../utils/AsyncKeys';
import { addIdentifier } from '../utils/Effect';

const Splash=(props)=>{


    useEffect(()=>{
        getLocalData();
    },[])


    const getLocalData=async()=>{
         let isFirstLogin = await getStringData(FIRST_LOGIN);
         console.log("isFirstLogin---------",isFirstLogin);
         setTimeout(() => {
            isFirstLogin === 'true'? props.navigation.replace('tabs'):props.navigation.replace('welcome')
         },3000);
    }

    

    return(
        
        <View style={styles.container}>

            <SvgXml xml={Splash_Logo} height={147} width={140} {...addIdentifier('Splash_App_Logo')} />

            <View style={styles.bottomView}>
               <Text style={styles.textStyle}  {...addIdentifier('Crafted_With_Text')}>Crafted with </Text>
                <SvgXml xml={Heart_Icon} height={12} width={13}  {...addIdentifier('Hearth_Icon')} />
               <Text style={styles.textStyle}  {...addIdentifier('NewDelhi_Text')}> in New Delhi, India</Text>
            </View>

       </View>
    )
   
  

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background.dark_black,
        alignItems:'center',
        justifyContent:'center'

    },
    bottomView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom:Platform.OS ==='android'?24:60, //Here is the trick
        flexDirection:'row'
      },
      textStyle: {
        color: '#FFFFFF',
        fontWeight:'400',
        fontSize: 13,
        fontFamily:FontFamily['Gilroy'][400]
      },
})

export default Splash;