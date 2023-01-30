import React from 'react';
import { StyleSheet,View, } from 'react-native';


const ViewSeparator = (props) => {
    
    return <View style={ViewSeparatorStyles.container}/>
    
}
const ViewSeparatorStyles=StyleSheet.create({
    container:{
        height: 0.5,
        width: "100%",
        alignSelf: 'center',
        backgroundColor: "grey"
    }
})
export default ViewSeparator;