import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { QuizKart_Logo } from '../../../assests/svg/AuthSvg';
import Colors from '../../../constant/Colors';

const HomeScreen=(props)=> {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#000000' }}>
       
        <SvgXml xml={QuizKart_Logo} height={147} width={140} />
       
        <TouchableOpacity onPress={()=>props.navigation.replace('authstack')}>
          <Text style={{color:Colors.textColor.white}}>Logout!</Text>
        </TouchableOpacity>
 
      </View>
    );
  }

  export default HomeScreen