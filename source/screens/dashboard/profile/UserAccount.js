import * as React from 'react';
import { Text, View,ImageBackground,TouchableOpacity,StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { WhiteBackArrow } from '../../../assests/svg/AuthSvg';
import Header from '../../../components/Header';
import Colors from '../../../constant/Colors';
import { SCREEN_WIDTH } from '../../../constant/Dimensions';
import { FontFamily } from '../../../constant/FontFamily';


const UserAccount = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#000000' }}>
            <ImageBackground source={require('../../../assests/png/UserAccounBGImg.png')} resizeMode={'stretch'} style={{ height:250, width: SCREEN_WIDTH }}>

              
              
              
                <View style={{flexDirection:'row',marginTop:138,width:SCREEN_WIDTH-25,alignItems:'center',alignSelf:'center',justifyContent:'space-between'}}>

                    <View style={{flexDirection:'row'}}>

                        <View style={{width:68,height:68,borderWidth:1,borderColor:Colors.border.white,borderRadius:34}}>

                        </View>

                        <View style={{paddingHorizontal:16,justifyContent:'center'}}>
                           <Text style={[userAccountStyles.detailsText,{fontSize:18}]}>Kistan Waston</Text>
                           <Text style={userAccountStyles.detailsText}>kitnas@gmail.com</Text>
                           <Text style={userAccountStyles.detailsText}>+91273673623</Text>

                        </View>



                    </View>

                    <TouchableOpacity onPress={()=>props.navigation.navigate('user-profile')} hitSlop={{left:20,right:20}} style={{right:27}}>
                        <SvgXml xml={WhiteBackArrow} height={20} width={20}  style={{ transform: [{ rotate:'180deg'}]}}/>

                    </TouchableOpacity>

                </View>

                


            </ImageBackground>

            <Text style={{ color: Colors.textColor.white }}>UserAccount!</Text>
        </View>
    );
}

const userAccountStyles = StyleSheet.create({

    detailsText:{
        color:Colors.textColor.white,
        fontSize:14,
        fontFamily:FontFamily['Gilroy'][500],
        fontWeight:'500',
        margin:2,
        letterSpacing:0.1
    }
})

export default UserAccount