import * as React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { WhiteBackArrow } from '../../../../assests/svg/AuthSvg';
import { PlayedIcon, WhiteEmailIcon, WinBadgeIcon } from '../../../../assests/svg/MainSvg';
import Colors from '../../../../constant/Colors';
import { SCREEN_WIDTH } from '../../../../constant/Dimensions';
import { FontFamily } from '../../../../constant/FontFamily';



const AccountListItem = (props) => {

    return (
        <TouchableOpacity onPress={props?.onpress} style={styles.mainContainer}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                { props?.icon && <SvgXml xml={props.icon} height={props?.height ? props?.height : 20} width={props?.width ? props?.width : 20} />}
                 <Text style={[styles.title,{color:props?.title === 'Logout'?Colors.textColor.orange:Colors.textColor.white}]}>{props?.title}</Text>
            </View>
            {props?.isArrow === false ? null : <SvgXml xml={WhiteBackArrow} height={11.43} width={6.43} style={{ transform: [{ rotate: '180deg' }] }} /> }




        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({
    mainContainer:{
        alignItems: 'center', marginTop: 29, flexDirection: 'row', justifyContent: 'space-between', width: SCREEN_WIDTH - 25
    },
    title:{
        color: Colors.textColor.white, paddingHorizontal: 12, fontSize: 16, fontFamily: FontFamily['Gilroy'][500],letterSpacing:0.1,textAlign:'center'
    }
})

export default AccountListItem;