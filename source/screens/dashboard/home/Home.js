import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { QuizKart_Logo } from '../../../assests/svg/AuthSvg';
import Colors from '../../../constant/Colors';
import MainHeader from '../components/MainHeader';

const HomeScreen=(props)=> {
    return (
      <View style={{ flex: 1,alignItems: 'center',backgroundColor:'#000000' }}>

        <MainHeader onpress={()=>props.navigation.navigate('user-account')}/>
       
    
       
        <TouchableOpacity onPress={()=>props.navigation.replace('authstack')} style={{marginTop:100}}>
          <Text style={{color:Colors.textColor.white}}>Logout!</Text>
        </TouchableOpacity>
 
      </View>
    );
  }

  export default HomeScreen