import * as React from 'react';
import { Text, View,ImageBackground,TouchableOpacity,StyleSheet, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { WhiteBackArrow } from '../../../assests/svg/AuthSvg';
import { AppTextLogo, LineSeparator, MobileIcon, WhiteEmailIcon } from '../../../assests/svg/MainSvg';
import Header from '../../../components/Header';
import Colors from '../../../constant/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constant/Dimensions';
import { FontFamily } from '../../../constant/FontFamily';
import AccountListItem from './components/AccountListItem';


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
                           <Text style={userAccountStyles.detailsText}>kitnas@gmail.com {SCREEN_HEIGHT}</Text>
                           <Text style={userAccountStyles.detailsText}>+91273673623</Text>

                        </View>



                    </View>

                    <TouchableOpacity onPress={()=>props.navigation.navigate('user-profile')} hitSlop={{left:20,right:20}} style={{right:27}}>
                        <SvgXml xml={WhiteBackArrow} height={20} width={20}  style={{ transform: [{ rotate:'180deg'}]}}/>

                    </TouchableOpacity>

                </View>

                


            </ImageBackground>

            <View style={{height:SCREEN_HEIGHT<675?10:25}}/>

            <ScrollView style={{flex:1,alignSelf:'center',width:SCREEN_WIDTH-25}} scrollEnabled={SCREEN_HEIGHT<675?true:false}>

            <AccountListItem title={'My Campaigns'} icon={WhiteEmailIcon} onpress={()=>props.navigation.navigate('support')}/>
            <AccountListItem title={'Device Settings'} icon={MobileIcon} onpress={()=>props.navigation.navigate('settings')}/>
            <AccountListItem title={'How to Play'} icon={WhiteEmailIcon} onpress={()=>props.navigation.navigate('howtoplay')}/>
            <AccountListItem title={'How to Score'} icon={WhiteEmailIcon} onpress={()=>props.navigation.navigate('howtoscore')}/>

            <SvgXml xml={LineSeparator} height={1} width={SCREEN_WIDTH} marginTop={SCREEN_HEIGHT<675?25:32}/> 

            <AccountListItem title={'Support'} icon={WhiteEmailIcon} onpress={()=>props.navigation.navigate('support')}/>
            <AccountListItem title={'FAQ'} icon={MobileIcon} onpress={()=>props.navigation.navigate('faq')}/>
            <AccountListItem title={'Terms of Service'} icon={WhiteEmailIcon} onpress={()=>props.navigation.navigate('faq')}/>
            <AccountListItem title={'Logout'} icon={WhiteEmailIcon} isArrow={false}/>

            <View style={{marginTop:89,alignItems:'center'}}>
                <SvgXml xml ={AppTextLogo} height={18.15}  width={77.72}/>
                <Text style={{marginTop:9.18,color:Colors.textColor.white}}>v17.1.13</Text>
            </View>

            </ScrollView>

       
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