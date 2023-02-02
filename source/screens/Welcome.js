import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constant/Colors';
import { SvgXml } from 'react-native-svg';
import AuthButton from '../components/AuthButton';
import { FontFamily } from '../constant/FontFamily';



const WelcomeScreen = (props) => {

    const getStarted = () => {
        props.navigation.replace('walkthrough')

    }
    const renderStartButton = () => {
        return (
            <View style={styles.bottomBtnView}>
                <AuthButton type={2} onpress={() => getStarted()} title={'Get started'} isArrow={true} />
            </View>
        )
    }

    const renderTextContainer = () => {
        return (
            <View style={styles.bottomTextView}>
                {/* Nested Text View */}
                <Text style={styles.bottomTextTitle}>
                    <Text>welcome{'\n'}</Text>
                    <Text>to </Text>
                    <Text style={{ fontWeight: 'bold' }}>quiz</Text>
                    <Text>kart</Text>
                </Text>

                {/* SubTitle Text View */}

                <Text style={styles.bottomSubTitle}>play and win fantasy prizes.</Text>

            </View>
        )
    }


    return (
        <ImageBackground source={require('../assests/png/welcome_bg.png')} style={{ flex: 1 }} resizeMode={'cover'}>
            <TouchableOpacity onPress={()=>props.navigation.replace('login')} style={styles.skipButton}>
                  <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            {renderTextContainer()}
            {renderStartButton()}
        </ImageBackground>

    )



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.dark_black,
        alignItems: 'center',
        justifyContent: 'center'

    },
    bottomTextView: {
        width: '100%',
        height: 100,
        position: 'absolute', //Here is the trick
        bottom: 182, //Here is the trick
        paddingHorizontal: 20
    },
    bottomBtnView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 50, //Here is the trick
        flexDirection: 'row'
    },
    bottomTextTitle: {
        fontSize: 40,fontFamily:FontFamily['Gilroy'][400], color: '#FFFFFF', fontWeight:'400', lineHeight: 46, letterSpacing: 0.5,
    },
    bottomSubTitle: {
        fontWeight: '400', fontSize: 16, color: '#FFFFFF', marginTop: 6, fontFamily:FontFamily['Gilroy'][400]
    },
    textStyle: {
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: 13,
        fontFamily:FontFamily['Gilroy'][400]
    },
    skipButton:{
        height:24,width:64,backgroundColor:'#FB8C00',marginTop:52,borderRadius:20,alignItems:'center',justifyContent:'center',alignSelf:'flex-end',right:20
    },
    skipText:{
        color:'#FFFFFF',fontWeight:'500',fontSize:13, fontFamily:FontFamily['Gilroy'][500]
    }
})

export default WelcomeScreen;