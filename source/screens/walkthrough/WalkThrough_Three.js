import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../constant/Colors';
import { LinearTextGradient } from "react-native-text-gradient";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constant/Dimensions';
import { FantasyTextIcon, QuizTextIcon } from '../../assests/svg/AuthSvg';
import { SvgXml } from 'react-native-svg';
import PaginationIndicator from './PaginationIndication';

const Walkthrough_Three = (props) => {

  return (
    <View style={styles.container}>

      <Image source={require('../../assests/png/onboard_img/onboard_3.png')} resizeMode={'contain'} style={{ width: SCREEN_WIDTH, marginTop: 48, flex: 0.50 }} />

     
      <PaginationIndicator screenIndex={3}/>


      <View style={{ position: 'absolute', bottom: SCREEN_HEIGHT<600?100:170, width: SCREEN_WIDTH - 55, alignSelf: 'center', }}>



        {/* Description Container */}


        <View>

          <Text style={{ color: 'white', fontWeight: "400", fontSize: 40, fontFamily: 'Gilroy', lineHeight: 46, letterSpacing: 0.1 }}>play bollywood</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <Text style={{ color: 'white', fontWeight: "400", fontSize: 40, fontFamily: 'Gilroy', lineHeight: 46, letterSpacing: 0.1 }}>based </Text>

            <SvgXml xml={QuizTextIcon} width={73.68} height={36.52} />
          </View>

          <Text style={{ color: 'white', fontWeight: "400", fontSize: 40, fontFamily: 'Gilroy', lineHeight: 46, letterSpacing: 0.1 }}>prize </Text>


        </View>




      </View>





    </View>
  )



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.dark_black,
    alignItems: 'center',


  },
  bottomView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 50, //Here is the trick
    flexDirection: 'row'
  },
  textStyle: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 13,
    fontFamily: 'Gilroy'
  },
})

export default Walkthrough_Three;