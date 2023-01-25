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
