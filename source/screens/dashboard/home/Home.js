import * as React from 'react';
import { Alert, Text, TouchableOpacity, View, TouchableWithoutFeedback, Animated, StyleSheet, Easing } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { QuizKart_Logo } from '../../../assests/svg/AuthSvg';
import { PlayNowButton, NeoPopBGImg, NeoPopButton } from '../../../assests/svg/MainSvg';
import PopButton from '../../../components/PopButton';
import Colors from '../../../constant/Colors';
import MainHeader from '../components/MainHeader';

const HomeScreen = (props) => {

  const [state, setState] = React.useState({
    animation: new Animated.Value(0),
  })



  const inner = {
    // borderRadius:state.animation.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [12, 16],
    // }),
  };

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
        duration:100,
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
    <View style={{ flex: 1, alignItems: 'center',backgroundColor:'#000000' }}>

      <MainHeader onpress={() => props.navigation.navigate('user-account')} />



      <TouchableOpacity onPress={() => props.navigation.replace('authstack')} style={{ marginTop: 100 }}>
        <Text style={{ color: Colors.textColor.white }}>Logout!</Text>
      </TouchableOpacity>




      



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
});

export default HomeScreen