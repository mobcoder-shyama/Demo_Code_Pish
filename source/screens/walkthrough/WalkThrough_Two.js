import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../constant/Colors';
import { LinearTextGradient } from "react-native-text-gradient";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constant/Dimensions';
import { AssuredTextIcon, FantasyTextIcon } from '../../assests/svg/AuthSvg';
import { SvgXml } from 'react-native-svg';
import PaginationIndicator from './PaginationIndication';


const Walkthrough_Two = (props) => {

  return (
    <View style={styles.container}>

      <Image source={require('../../assests/png/onboard_img/onboard_2.png')} resizeMode={'contain'} style={{ width: SCREEN_WIDTH,flex: 0.50,bottom:10 }} />
     
     
      <PaginationIndicator screenIndex={2}/>

     
      <View style={{ position: 'absolute', bottom:SCREEN_HEIGHT<600?100:170, width: SCREEN_WIDTH - 55, alignSelf: 'center', }}>


      


        {/* Description Container */}

        <View>

          <Text style={{ color: 'white', fontWeight: "400", fontSize: 40, fontFamily: 'Gilroy', lineHeight: 46, letterSpacing: 0.1 }}>choose available</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>

            <SvgXml xml={AssuredTextIcon} width={141.14} height={28.52} />

            <Text style={{ color: 'white', fontWeight: "400", fontSize: 40, fontFamily: 'Gilroy', lineHeight: 46, letterSpacing: 0.1 }}> loot </Text>

          </View>

          <Text style={{ color: 'white', fontWeight: "400", fontSize: 40, fontFamily: 'Gilroy', lineHeight: 46, letterSpacing: 0.1 }}>deal</Text>


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
    // justifyContent:'center'

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

export default Walkthrough_Two;