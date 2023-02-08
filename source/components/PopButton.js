import * as React from 'react';
import { Alert, Text, TouchableOpacity, View, TouchableWithoutFeedback, Animated, StyleSheet, Easing } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { WhiteArrow } from '../assests/svg/AuthSvg';
import { NeoPopBGImg, NeoPopButton, PopButtonTitle } from '../assests/svg/MainSvg';
import Colors from '../constant/Colors';
import { FontFamily } from '../constant/FontFamily';



const PopButton = (props) => {

  const [state, setState] = React.useState({
    animation: new Animated.Value(0),
  })





  const heightStyle = {
    marginTop: state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 7.5],
    }),
    // paddingBottom: state.animation.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [15, 0],
    // }),
  };

  onPressIn = async () => {
    try {
      Animated.timing(state.animation, {
        toValue: 1,
        duration: 100,
      }).start();
    } catch (e) { }
  };

  onPressOut = () => {
    Animated.timing(state.animation, {
      toValue: 0,
      duration: 50,
    }).start();
  };




  return (
    <View style={{ alignItems: 'center' }}>

      <TouchableWithoutFeedback onPressIn={onPressIn}
        onPressOut={onPressOut} style={{ justifyContent: 'center' }}>
        <Animated.View style={[styles.iconContainer, heightStyle]}>
          <SvgXml xml={PopButtonTitle} height={70} width={276} />
        </Animated.View>

       

      </TouchableWithoutFeedback>


      <View style={{ marginTop: 62, alignItems: 'center', position: 'absolute', zIndex: -1 }}>
        <SvgXml xml={NeoPopBGImg} height={15} width={256} />
      </View>

      {/* <View style={{ marginTop:10, alignItems: 'center', position: 'absolute',flexDirection:'row' }} >
         <Text style={styles.buttonText}>{props?.title}</Text>
         <SvgXml xml={WhiteArrow} height={20} width={20} style={{ left: 10 }} />
       </View> */}


    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  height: {
    backgroundColor: "#5243FE",
    //borderRadius: 16,
  },
  inner: {
    height: "100%",
    backgroundColor: "#9945FF",
    alignItems: "center",
    justifyContent: "center",
  },
  white: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    height: 80,
    width: 180,
  },
  outer: {
    flex: 1,
    padding: 10,
    //backgroundColor: "rgba(0,0,0,0.65)",
    //borderRadius: 14,
  },
  linearGradient: {
    alignItems: 'center',
    height: 45,
    justifyContent: 'center',
    borderRadius: 8,
    flexDirection: 'row'
  },
  buttonText: {
    fontSize: 16,
    //fontFamily: 'Gilroy',
    color: 'red',
    fontWeight: '600',
    textAlign: 'center',
    margin: 10,
    color: Colors.textColor.white,
    backgroundColor: 'transparent',
    fontFamily: FontFamily['Gilroy'][600]
  },
});

export default PopButton