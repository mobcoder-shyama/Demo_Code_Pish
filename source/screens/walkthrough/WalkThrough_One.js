import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { LinearTextGradient } from "react-native-text-gradient";
import Colors from '../../constant/Colors';
import { SCREEN_HEIGHT,SCREEN_WIDTH } from '../../constant/Dimensions'
import {FantasyTextIcon} from '../../assests/svg/AuthSvg'
import PaginationIndicator from './PaginationIndication';
import { FontFamily } from '../../constant/FontFamily';

const Walkthrough_One = (props) => {

  return (
    <View style={styles.container}>


      <Image source={require('../../assests/png/onboard_img/onboard_1.png')} resizeMode={'contain'} style={{ width: SCREEN_WIDTH,marginTop:48,flex:0.50 }} />

      {/* Pagination */}
        <PaginationIndicator screenIndex={1}/>

     
       <View style={{position:'absolute',bottom:SCREEN_HEIGHT<600?100:170,width:SCREEN_WIDTH-55,alignSelf:'center'}}>
       

        {/* Description Container */}

        <View>

         <Text style={{ color: 'white',fontWeight: "400",fontSize: 40, fontFamily:FontFamily['Gilroy'][400], lineHeight: 46, letterSpacing: 0.1}}>explore & select</Text>

         <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{ color: 'white',fontWeight: "400",fontSize: 40,fontFamily:FontFamily['Gilroy'][400], lineHeight: 46, letterSpacing: 0.1}}>your </Text>

             <SvgXml xml={FantasyTextIcon} width={137.12} height={36.57}/>
         </View>

         <Text style={{ color: 'white',fontWeight: "400",fontFamily:FontFamily['Gilroy'][400],fontSize: 40,lineHeight: 46, letterSpacing: 0.1 }}>prize </Text>
      
      
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

export default Walkthrough_One;