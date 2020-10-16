/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from 'airLiquide/src/app';
import {name as appName} from 'airLiquide/app.json';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
