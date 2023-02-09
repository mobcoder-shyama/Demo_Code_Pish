import * as React from 'react';
import { Text, View } from 'react-native';
import Colors from '../../../constant/Colors';
import MainHeader from '../components/MainHeader';

const WishList = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#000000' }}>

      <MainHeader onpress={() => props.navigation.navigate('user-account')} />

      <Text style={{ color: Colors.textColor.white }}>WishList!</Text>
    </View>
  );
}

export default WishList