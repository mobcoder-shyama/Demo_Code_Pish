import * as React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { PlayedIcon, WinBadgeIcon } from '../../../../assests/svg/MainSvg';
import Colors from '../../../../constant/Colors';
import { FontFamily } from '../../../../constant/FontFamily';



const BadgeView = (props) => {
    return (
        <View style={{alignItems: 'center', marginTop: 20 }}>


           


            <View style={{ height:32, minWidth:65,borderRadius:16,backgroundColor: Colors.background.grey_black, width: 'auto', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: Colors.textColor.white, fontSize: 18,fontFamily:FontFamily['Gilroy'][600] }}>{props?.value}</Text>

            </View>

            <View style={{position:'absolute',right:52,borderWidth:10,borderColor:Colors.background.dark_black,height:30,width:30,borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                <SvgXml xml={props?.icon} height={25} width={25} />
            </View>

            <Text style={{ color: Colors.textColor.white, fontSize: 18,marginTop:3,fontSize:11,fontFamily:FontFamily['Gilroy'][600] }}>{props?.title}</Text>




        </View>

    )

}

export default BadgeView;