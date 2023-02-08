import * as React from 'react';
import { Text, View, ImageBackground, Platform, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { WhiteBackArrow } from '../../../assests/svg/AuthSvg';
import Header from '../../../components/Header';
import Colors from '../../../constant/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constant/Dimensions';
import { FontFamily } from '../../../constant/FontFamily';


const HowToPlay = (props) => {
    
    return (
       
       <View style={styles.mainContainer}>

            <View style={styles.container}>


                <Header title={'HowToPlay'} navigation={props.navigation}/>

              

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
   mainContainer:{
        flex: 1, alignItems: 'center', backgroundColor:Colors.background.dark_black
    },
    container:{
        marginTop: SCREEN_HEIGHT< 675 ? 25 : Platform.OS === 'android' ? 30 : 60, alignSelf: 'center'
    },

    detailsText: {
        color: Colors.textColor.white,
        fontSize: 14,
        fontFamily: FontFamily['Gilroy'][500],
        fontWeight: '500',
        margin: 2,
        letterSpacing: 0.1
    }
})

export default HowToPlay