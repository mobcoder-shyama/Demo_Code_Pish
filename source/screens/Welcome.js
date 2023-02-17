import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity, Platform, SafeAreaView } from 'react-native';
import Colors from '../constant/Colors';
import { SvgXml } from 'react-native-svg';
import AuthButton from '../components/AuthButton';
import { FontFamily } from '../constant/FontFamily';
import { storeStringData } from '../utils/AsyncStorage';
import { FIRST_LOGIN } from '../utils/AsyncKeys'



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
                    <Text style={{ fontFamily: FontFamily['Gilroy'][400] }}>welcome{'\n'}</Text>
                    <Text style={{ fontFamily: FontFamily['Gilroy'][400] }}>to </Text>
                    <Text style={{ fontFamily: FontFamily['Gilroy'][600] }}>quiz</Text>
                    <Text style={{ fontFamily: FontFamily['Gilroy'][400] }}>kart</Text>
                </Text>

                {/* SubTitle Text View */}

                <Text style={styles.bottomSubTitle}>play and win fantasy prizes.</Text>

            </View>
        )
    }

    const handleSkipButton = async () => {
        await storeStringData(FIRST_LOGIN, 'true');
        props.navigation.replace('tabs');
    }


    return (
        // <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('../assests/png/welcome_bg.png')} style={{ flex: 1 }} resizeMode={'cover'}>
                <TouchableOpacity onPress={() => handleSkipButton()} style={styles.skipButton}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
                {renderTextContainer()}
                {renderStartButton()}
            </ImageBackground>
        // </SafeAreaView>

    )



}

const styles = StyleSheet.create({
    bottomTextView: {
        width: '100%',
        height: 100,
        position: 'absolute', //Here is the trick
        bottom: Platform.OS === 'android' ? 197 : 178, //Here is the trick
        paddingHorizontal: 20
    },
    bottomBtnView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: Platform.OS === 'android' ? 64 : 64, //Here is the trick
        flexDirection: 'row'
    },
    bottomTextTitle: {
        fontSize: 40, fontFamily: FontFamily['Gilroy'][400], color: Colors.textColor.white, fontWeight: '400', letterSpacing: 0.5,
    },
    bottomSubTitle: {
        fontWeight: '400', fontSize: 16, color: Colors.textColor.white, marginTop: 6, fontFamily: FontFamily['Gilroy'][400]
    },
    skipButton: {
        height: 24, width: 64, backgroundColor: '#FB8C00', marginTop: Platform.OS === 'android' ? 50 : 52, borderRadius: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end', right: 20
    },
    skipText: {
        color: Colors.textColor.white, fontWeight: '500', fontSize: 13, fontFamily: FontFamily['Gilroy'][500]
    }
})

export default WelcomeScreen;