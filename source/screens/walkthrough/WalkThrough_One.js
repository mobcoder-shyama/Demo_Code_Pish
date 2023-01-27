import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import Colors from '../../constant/Colors';


const Walkthrough_One=(props)=>{

     return(
        <View style={styles.container}>

          

            <View style={styles.bottomView}>
                  <Text>Walkthrough 1</Text>
            </View>




       </View>
    )
   
  

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background.dark_black,
        alignItems:'center',
        justifyContent:'center'

    },
    bottomView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 50, //Here is the trick
        flexDirection:'row'
      },
      textStyle: {
        color: '#FFFFFF',
        fontWeight:'400',
        fontSize: 13,
        fontFamily:'Gilroy'
      },
})

export default Walkthrough_One;