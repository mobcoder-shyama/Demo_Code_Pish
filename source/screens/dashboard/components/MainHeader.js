import React, { useEffect } from 'react';
import { Text, Dimensions, View, StyleSheet, Animated, TouchableOpacity, Platform } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { QuizKart_Logo } from '../../../assests/svg/AuthSvg';
import { NotificationIcon } from '../../../assests/svg/MainSvg';
import Colors from '../../../constant/Colors';
import { SCREEN_WIDTH } from '../../../constant/Dimensions';
import { FontFamily } from '../../../constant/FontFamily';




const MainHeader = (props) => {




    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <SvgXml xml={QuizKart_Logo} height={52} width={52} />
                <Text style={{ color: '#E7E7E7', fontFamily: FontFamily['Gilroy'][700], fontSize: 16, paddingHorizontal: 12 }}>Points{'\n'}5000</Text>

            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <View style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 1, borderColor: '#555555',alignItems:'center',justifyContent:'center' }}>
                   
                    <SvgXml xml={NotificationIcon} width={15} height={17.92}/>

                </View>

                <View style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 1, borderColor: '#555555',backgroundColor:'grey',margin: 12 }}>

                </View>


            </View>



        </View>

    )

}


const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH - 25,
        height: 45,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:Platform.OS==='android'?25:54
    },

})

export default MainHeader;