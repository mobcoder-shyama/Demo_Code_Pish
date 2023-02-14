import * as React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { PlayedIcon, WinBadgeIcon } from '../../../../assests/svg/MainSvg';
import Colors from '../../../../constant/Colors';
import { FontFamily } from '../../../../constant/FontFamily';



const BadgeView = (props) => {
    return (
        <View style={BadgeStyles.mainContainer}>
            
            <View style={BadgeStyles.valueContainer}>
                <Text style={BadgeStyles.valueText}>{props?.value}</Text>
             </View>

            <View style={{position:'absolute',right:52,borderWidth:10,borderColor:Colors.background.dark_black,height:30,width:30,borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                <SvgXml xml={props?.icon} height={25} width={25} />
            </View>

            <Text style={BadgeStyles.bottonText}>{props?.title}</Text>




        </View>

    )

}

const BadgeStyles = StyleSheet.create({
    mainContainer:{
        alignItems: 'center', marginTop: 20 
    },
    valueContainer:{
        height:32, minWidth:65,borderRadius:16,backgroundColor: Colors.background.grey_black, width: 'auto', alignItems: 'center', justifyContent: 'center'
    },
    valueText:{
        color: Colors.textColor.white, fontSize: 15,fontFamily:FontFamily['Gilroy'][600],textAlign:'center' 
    },
    bottonText:{
        color: Colors.textColor.white,fontSize: 18,marginTop:3,fontSize:11,fontFamily:FontFamily['Gilroy'][600]
    }
})

export default BadgeView;