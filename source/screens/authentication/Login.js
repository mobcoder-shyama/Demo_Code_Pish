import React from 'react';
import {View,Image, StyleSheet,Dimensions, ScrollView,Text} from 'react-native';
import Colors from '../../constant/Colors';
const {width,height} = Dimensions.get('window')

const Login=(props)=>{

    return(
        <ScrollView style={styles.container}>
            <Image source={require('../../assests/png/LoginBGImg.png')} style={{height:296,width}}/>
            <View style={{alignItems:'center'}}>
                <Text style={styles.textStyle}>India’s first fantasy{'\n'}eCommerce platform</Text>
            </View>
       </ScrollView>
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
        fontFamily:'Gilroy',
        marginTop:36,
        textAlign:'center',
        letterSpacing:1,
        lineHeight:24
      },
})

export default Login;