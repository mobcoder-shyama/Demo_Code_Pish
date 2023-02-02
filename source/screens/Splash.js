import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import Colors from '../constant/Colors';
import { SvgXml } from 'react-native-svg';
import { Splash_Logo,Heart_Icon } from '../assests/svg/AuthSvg';
import { FontFamily } from '../constant/FontFamily';

const Splash=(props)=>{


    React.useEffect(() => {
        setTimeout(() => {
           props.navigation.replace('welcome')
        }, 1000);
    }, [props]);

    

    return(
        <View style={styles.container}>

            <SvgXml xml={Splash_Logo} height={147} width={140} />

            <View style={styles.bottomView}>
               <Text style={styles.textStyle}>Crafted with </Text>
                <SvgXml xml={Heart_Icon} height={12} width={13} />
               <Text style={styles.textStyle}> in New Delhi, India</Text>
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
        bottom: 20, //Here is the trick
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