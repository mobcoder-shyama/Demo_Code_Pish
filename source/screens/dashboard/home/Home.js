import * as React from 'react';
import { Alert, Text, TouchableOpacity, View, TouchableWithoutFeedback, Animated, StyleSheet, Easing } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { QuizKart_Logo } from '../../../assests/svg/AuthSvg';
import { PlayNowButton, NeoPopBGImg, NeoPopButton } from '../../../assests/svg/MainSvg';
import PopButton from '../../../components/PopButton';
import Colors from '../../../constant/Colors';
import { IS_LOGIN } from '../../../utils/AsyncKeys';
import { getStringData } from '../../../utils/AsyncStorage';
import MainHeader from '../components/MainHeader';

const HomeScreen = (props) => {

  const [state, setState] = React.useState({
    animation: new Animated.Value(0),
  })
  
  const handleLoginStatus = async () => {
    let isLogin = await getStringData(IS_LOGIN);
    if (isLogin === 'true') {
      props.navigation.navigate('user-account')
    } else {
      console.log('handleProfile status-------', isLogin)
      props.navigation.replace('authstack');
    }
  }

  const handleNotification = async () => {
    let isLogin = await getStringData(IS_LOGIN);
    if (isLogin === 'true') {
      props.navigation.navigate('notification')
    } else {
      console.log('handleProfile status-------', isLogin)
      props.navigation.replace('authstack');
    }
  }





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
    <View style={styles.mainContainer}>

      <MainHeader onpress={() =>handleLoginStatus()} handleNotification={()=>handleNotification()} />

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, alignItems: 'center', backgroundColor: Colors.background.dark_black
  }
});

export default HomeScreen