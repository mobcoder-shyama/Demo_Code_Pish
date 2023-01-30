import React from 'react';
import {TouchableWithoutFeedback,Keyboard,KeyboardAvoidingView } from 'react-native';

const DismissKeyboard = (Comp) => {
    return ({ children, ...props }) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Comp {...props}>
                {children}
            </Comp>
        </TouchableWithoutFeedback>
    );
};
export default DismissKeyboard;