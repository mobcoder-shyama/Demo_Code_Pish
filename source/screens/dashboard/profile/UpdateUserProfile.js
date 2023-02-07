import * as React from 'react';
import { Text, View, ImageBackground, Platform, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { WhiteBackArrow } from '../../../assests/svg/AuthSvg';
import Header from '../../../components/Header';
import Colors from '../../../constant/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constant/Dimensions';
import { FontFamily } from '../../../constant/FontFamily';


const UpdateUserProfile = (props) => {
    return (
       
       <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#000000' }}>

            <View style={{ marginTop: SCREEN_HEIGHT< 675 ? 25 : Platform.OS === 'android' ? 30 : 60, alignSelf: 'center' }}>


                <Header title={'Complete your profile'} isDownArrow={true}  navigation={props.navigation}/>

              

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    detailsText: {
        color: Colors.textColor.white,
        fontSize: 14,
        fontFamily: FontFamily['Gilroy'][500],
        fontWeight: '500',
        margin: 2,
        letterSpacing: 0.1
    }
})

export default UpdateUserProfile