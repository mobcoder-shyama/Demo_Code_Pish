import * as React from 'react';
import { Text, View,ImageBackground,TouchableOpacity,StyleSheet, ScrollView,Alert } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { WhiteBackArrow } from '../../../assests/svg/AuthSvg';
import { AppTextLogo, HowtoPlayIcon, HowtoScoreIcon, LineSeparator, LogoutIcon, FAQIcon, MyCampaignIcon, SupportIcon, TermsIcon, SettingIcon } from '../../../assests/svg/MainSvg';
import Header from '../../../components/Header';
import Colors from '../../../constant/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constant/Dimensions';
import { FontFamily } from '../../../constant/FontFamily';
import { IS_LOGIN } from '../../../utils/AsyncKeys';
import { storeStringData } from '../../../utils/AsyncStorage';
import AccountListItem from './components/AccountListItem';



const UserAccount = (props) => {

    const logoutAction=async()=>{
       Alert.alert('Logout!', 'Are you sure want to logout?', [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'YES', onPress: () => handleLogout()},
          ]);
        // await storeStringData(IS_LOGIN,'false');
        // props.navigation.replace('authstack');
    }

    const handleLogout=async()=>{
         await storeStringData(IS_LOGIN,'false');
         props.navigation.replace('authstack');
     }


    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#000000' }}>
          
            <ImageBackground source={require('../../../assests/png/UserAccounBGImg.png')} resizeMode={'stretch'} style={{ height:250, width: SCREEN_WIDTH }}>

        
                 <View style={{height:52}}/>
                 <Header title={''} navigation={props.navigation}/>
              
              
                <View style={{flexDirection:'row',marginTop:38,width:SCREEN_WIDTH-25,alignItems:'center',alignSelf:'center',justifyContent:'space-between'}}>

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

            <View style={{height:SCREEN_HEIGHT<675?10:25}}/>

            <ScrollView style={{flex:1,alignSelf:'center',width:SCREEN_WIDTH-25}}>

            <AccountListItem title={'My Campaigns'} icon={MyCampaignIcon} onpress={()=>props.navigation.navigate('support')} width={20} height={19}/>
            <AccountListItem title={'Device Settings'} icon={SettingIcon} onpress={()=>props.navigation.navigate('settings')} width={16.63} height={22}/>
            <AccountListItem title={'How to Play'} icon={HowtoPlayIcon} onpress={()=>props.navigation.navigate('howtoplay')} width={20} height={20}/>
            <AccountListItem title={'How to Score'} icon={HowtoScoreIcon} onpress={()=>props.navigation.navigate('howtoscore')} width={18} height={18}/>

            <SvgXml xml={LineSeparator} height={1} width={SCREEN_WIDTH} marginTop={SCREEN_HEIGHT<675?25:32}/> 

            <AccountListItem title={'Support'} icon={SupportIcon} onpress={()=>props.navigation.navigate('support')} width={20} height={20}/>
            <AccountListItem title={'FAQ'} icon={FAQIcon} onpress={()=>props.navigation.navigate('faq')} width={20} height={20}/>
            <AccountListItem title={'Terms of Service'} icon={TermsIcon} onpress={()=>props.navigation.navigate('terms')} width={19.33} height={20}/>
            <AccountListItem title={'Logout'} icon={LogoutIcon} isArrow={false} onpress={()=>logoutAction()} width={17.7} height={18}/>

            <View style={{marginTop:65,alignItems:'center'}}>
                <SvgXml xml ={AppTextLogo} height={18.15}  width={77.72}/>
                <Text style={{marginTop:1,color:Colors.textColor.white,fontSize:12}}>v17.1.13</Text>
            </View>

            <View style={{height:25}}/>

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