
/** * @format */
import {AppRegistry} from 'react-native';

//App kısmı default export ile export edilmiş değişken (İstediğimiz ismi verebiliriz)
//{age,func} tekil olarak export edilmiş değişkenler

import App,{age,func} from './App';

import App2 from './StylingLayout/App2';
import App3 from './StylingLayout/App3';
import App4 from './StylingLayout/App4';

import HomeScreen from './CoreComponents/HomeScreen';
import ShoppingList from './CoreComponents/ShoppingList';
import ShpList from './CoreComponents/ShpList';

import Counter from './State/Counter';
import RenderFunc from './State/RenderFunc';
import {name as appName} from './app.json';



AppRegistry.registerComponent(appName, () => ShpList);