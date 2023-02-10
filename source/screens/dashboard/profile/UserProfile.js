import * as React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { WhiteBackArrow } from '../../../assests/svg/AuthSvg';
import { HomeAddressIcon, MobileIcon, PlayedIcon, ThreeDotIcon, WhiteEmailIcon, WinBadgeIcon } from '../../../assests/svg/MainSvg';
import AuthButton from '../../../components/AuthButton';
import Header from '../../../components/Header';
import Colors from '../../../constant/Colors';
import { SCREEN_WIDTH } from '../../../constant/Dimensions';
import { FontFamily } from '../../../constant/FontFamily';
import BadgeView from './components/BadgeView';


const UserProfile = (props) => {

    const renderUserDetails = (icon, title, value) => {
        return (
            <View style={{ justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', marginTop: 0, justifyContent: 'space-between', paddingHorizontal: 21, alignItems: 'center' }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <SvgXml xml={icon} height={22} width={14} />
                        <Text style={[userAccountStyles.buttonText, { marginHorizontal: 17, textAlign: 'left' }]}>{title}</Text>

                    </View>

                    <Text style={[userAccountStyles.buttonText, { fontFamily: FontFamily['Gilroy'][500] }]}>{value}</Text>


                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#000000' }}>

            <ImageBackground source={require('../../../assests/png/UserProfileBGImg.png')} resizeMode={'stretch'} style={{ height: 206, width: SCREEN_WIDTH }}>

                <View style={userAccountStyles.header}>

                    <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={() => props.navigation.goBack()}>
                        <SvgXml xml={WhiteBackArrow} style={{ transform: [{ rotate: '360deg' }], paddingHorizontal: 18 }} height={19.5} width={10.7} onPress={() => props.navigation.navigate('login')} />
                    </TouchableOpacity>

                    <Text style={userAccountStyles.buttonText}>Profile</Text>

                    <TouchableOpacity hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} onPress={() => props.navigation.goBack()}>
                        <SvgXml xml={ThreeDotIcon} style={{ transform: [{ rotate: '360deg' }], paddingHorizontal: 18 }} height={18} width={4} onPress={() => props.navigation.navigate('login')} />
                    </TouchableOpacity>

                </View>








            </ImageBackground>


            <View style={{ width: 68, height: 68, borderWidth: 1, borderColor: Colors.border.white, borderRadius: 34, position: 'absolute', marginTop: 125 }}>

</View>

            <ScrollView>

            <View style={{ marginTop: 24, alignItems: 'center' }}>

                <Text style={[userAccountStyles.buttonText, { marginHorizontal: 17, textAlign: 'left', fontSize: 24 }]}>Kristin Watson</Text>

                <Text style={[userAccountStyles.buttonText, { marginHorizontal: 17, textAlign: 'left', marginTop: 5, fontSize: 16 }]}>Female, 26 years old</Text>

                <AuthButton type={2} title={'Edit Profile'} width={124} onpress={() => props.navigation.navigate('user-profile-update')} />

                <View style={{ marginTop: 24,flexDirection:'row',width:SCREEN_WIDTH-25,alignSelf:'center',justifyContent:'space-around',alignContent:'center' }}>
                    <BadgeView icon={PlayedIcon}  title={'Points'} value ={2322}/ >
                    <BadgeView  icon={WinBadgeIcon} title={'Wins'} value ={2322} />
                    <BadgeView  icon={PlayedIcon} title={'Played'}  value ={2322}/>
                </View>


            </View>

            {/* user circle profile */}

           

            {/*  */}

            <View style={{ height: 56 }} />

            <View style={{ width: SCREEN_WIDTH - 25, backgroundColor: '#252525', minHeight: 128, height: 'auto', borderRadius: 24, justifyContent: 'center' }}>



                {renderUserDetails(WhiteEmailIcon, 'Email', "432432432")}

                <View style={{ height: 10 }} />

                {renderUserDetails(MobileIcon, 'Phone', "342345345")}

            </View>

            <View style={{ width: SCREEN_WIDTH - 25, backgroundColor: '#252525', height: 122, borderRadius: 24, marginTop: 24, justifyContent: 'center' }}>

                {renderUserDetails(HomeAddressIcon, '105, Vars Casa Rosa, Sakshi Nagar Pai Layout, Mahadevapura, Bengaluru Karnataka 560048', "")}



            </View>

            <View style={{height:25}}/>


            </ScrollView>




        </View>
    );
}

const userAccountStyles = StyleSheet.create({

    detailsText: {
        color: Colors.textColor.white,
        fontSize: 14,
        fontFamily: FontFamily['Gilroy'][500],
        fontWeight: '500',
        margin: 2,
        letterSpacing: 0.1
    },
    header: {
        width: SCREEN_WIDTH - 25,
        height: 45,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 60
    },
    buttonText: {
        fontSize: 16,
        fontFamily: FontFamily['Gilroy'][500],
        textAlign: 'center',
        margin: 10,
        color: Colors.textColor.white,
        backgroundColor: 'transparent',
        fontWeight: '600'
    },
})

export default UserProfile