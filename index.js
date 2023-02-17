/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import {name as appName} from './app.json';
import App from './source/App';
import { Configure } from './source/redux/Store';

const store = Configure();

const AppNav = () => {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };


AppRegistry.registerComponent(appName, () => AppNav);
