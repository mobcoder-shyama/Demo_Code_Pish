import React,{useState} from 'react';
import { Text, View, TextInput, Platform, StyleSheet, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { WhiteBackArrow } from '../../../assests/svg/AuthSvg';
import Header from '../../../components/Header';
import Colors from '../../../constant/Colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constant/Dimensions';
import { FontFamily } from '../../../constant/FontFamily';


const InputField = (props) => {
    const {inputContainer,inputText,inputLabel} = styles;
    return (
        <View style={inputContainer}>

            {props?.focusVal && <Animated.Text style={inputLabel}>{props?.title}</Animated.Text>}


            <TextInput
                style={inputText}
                placeholder={!props?.focusVal ? props?.title : ''}
                placeholderTextColor={'#757575'}
                selectionColor={Colors.cursor.white}
                keyboardType="default"
                maxLength={50}
                value={props?.value}
                onChangeText={(text) => props?.onchange(text)}
                onFocus={props?.onfocus}
                onBlur={props?.onblur}

            />

        </View>
    )
}


const UpdateUserProfile = (props) => {
   
    const[name,setName] = useState('')
    const[nameFocus,setNameFocus] = useState(false)

    const updateName=(text)=>{
        setName(text)
    }
   
    return (

        <ScrollView style={{ flex: 1,backgroundColor:Colors.background.dark_black }}>

            <View style={{ marginTop: SCREEN_HEIGHT < 675 ? 25 : Platform.OS === 'android' ? 30 : 60, alignSelf: 'center' }}>


                <Header title={'Complete your profile'} isDownArrow={true} navigation={props.navigation} />

                <TouchableOpacity style={{ marginTop: 30, height: 96, width: 96, borderRadius: 48, borderWidth: 0.5, borderColor: Colors.border.white, alignSelf: 'center' }}></TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 14, borderRadius: 48, alignSelf: 'center' }} onPress={()=>console.log("onpresssss",name)}>
                    <Text style={{ color: Colors.textColor.voilet, fontFamily: FontFamily['Gilroy'][600], fontSize: 16 }}>Edit</Text>
                </TouchableOpacity>
                
                <InputField title={'Name*'} value={name} focusVal={nameFocus} onfocus={()=>setNameFocus(true)} onblur={()=>setNameFocus(false)} onchange={(text)=>updateName(text)}/>
                <InputField title={'Birthday'} value={name} focusVal={nameFocus} onfocus={()=>setNameFocus(true)} onblur={()=>setNameFocus(false)} onchange={(text)=>updateName(text)}/>
                <InputField title={'Gender'}/>
                <InputField title={'Pincode'}/>




            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    detailsText: {
        color: Colors.textColor.white,
        fontSize: 14,
        fontFamily: FontFamily['Gilroy'][500],
        fontWeight: '500',
        margin: 2,
        letterSpacing: 0.1
    },
    inputContainer: {
        width: SCREEN_WIDTH - 25,
        height: 45,
        marginTop: 30,
    },
    inputText:{
         color: 'white', 
         fontSize: 16,
         borderBottomWidth: 1.0, 
         fontSize: 16,
         borderBottomColor: '#757575', 
         fontFamily: FontFamily['Gilroy'][500],
    },
    inputLabel:{
        color: 'grey', top: Platform.OS === 'android' ? 5 : -12, fontSize: 14, fontFamily: FontFamily['Gilroy'][500], color: '#BDBDBD'
    }
})

export default UpdateUserProfile