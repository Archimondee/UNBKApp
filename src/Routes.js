import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import {Ionicons, SimpleLineIcons} from 'react-native-vector-icons';

import Home from './Components/Home';
import MateriScreen from './Components/MateriScreen';

import LihatMateri from './Components/Materi/LihatMateri';
import Soal from './Components/Soal';
import Info from './Components/Soals/Info';
import SoalScreen from './Components/Soals/SoalScreen';
import HistoryScreen from './Components/HistoryScreen';
import TipsScreen from './Components/TipsScreen';


const MainStack = createStackNavigator({
  Home: Home,
  Materi: MateriScreen,
  Lihat: LihatMateri,
  Soal: Soal,
  Info: Info,
  Soals: SoalScreen,
  History: HistoryScreen,
  Tips: TipsScreen
},{
  initialRouteName:'Home',
  headerMode:'none',
  
});

export default Main = createAppContainer(createStackNavigator({
  Pertama: MainStack,
},{
  initialRouteName:'Pertama',
  headerMode:'none'
}));