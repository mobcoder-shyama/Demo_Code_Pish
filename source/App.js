/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, Fragment } from 'react';
import {
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  LogBox
} from 'react-native';
import RootNavigation from './navigation/RootNavigation';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
let oldRender = Text.render;
Text.render = function (...args) {
    let origin = oldRender.call(this, ...args);
    return React.cloneElement(origin, {
        style: [{fontFamily: 'Gilroy'}, origin.props.style]
    });
}




const App = () => {
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Fragment>
       <RootNavigation />
      </Fragment>
    </TouchableWithoutFeedback>

  );
};



export default App;
