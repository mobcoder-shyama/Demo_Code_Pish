import React from 'react';
import { StyleSheet,View, } from 'react-native';
import { SCREEN_WIDTH } from '../constant/Dimensions';


const ViewSeparator = (props) => {
    
    return <View style={ViewSeparatorStyles.container}/>
    
}
const ViewSeparatorStyles=StyleSheet.create({
    container:{
        height: 0.5,
        width:SCREEN_WIDTH-25,
        alignSelf: 'center',
        backgroundColor: "grey"
    }
})
export default ViewSeparator;