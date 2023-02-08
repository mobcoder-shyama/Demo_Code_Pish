import React from 'react';
import { Text, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontFamily } from '../constant/FontFamily';
const { width, height } = Dimensions.get('window')

const DisableButton = (props) => {
    return (
            <TouchableOpacity style={styles.container} disabled>
                <LinearGradient colors={['#424242','#424242']} style={styles.linearGradient} >
                    <Text style={styles.buttonText}>
                        {props?.title}
                    </Text>

                </LinearGradient>

            </TouchableOpacity>
    )

}


const styles = StyleSheet.create({
    container: {
        width: width - 25,
        height: 45,
        alignSelf: 'center',
        marginTop: 25
    },
    linearGradient: {
        alignItems: 'center',
        height: 45,
        justifyContent: 'center',
       // borderRadius: 8,
        flexDirection:'row'
    },
    buttonText: {
        fontSize:16,
        fontFamily:FontFamily['Gilroy'][600],
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
        fontWeight:'600'
    },
})

export default DisableButton;