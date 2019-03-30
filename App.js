//import React, { Component } from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

//import {View, Text} from 'react-native';

import Settings from './Screens/Settings';
import Home from './Screens/Home';
import Attendance from './Screens/Attendance';
import Evaluation from './Screens/Evaluation';
import Announcements from './Screens/KTUAnnouncements';
import Credits from './Screens/Credits';
import Attendance1 from './Screens/Attendance1';

const AppNavigator = createStackNavigator({

  HomeScreen: { screen: Home, navigationOptions: {header: null, },},

  SettingScreen: { screen: Settings, navigationOptions: {title: 'Settings',headerStyle: { 
              backgroundColor: '#4280f0',},headerTintColor: '#fff',}},

  AttendanceScreen: { screen: Attendance, navigationOptions: {title: 'Attendance',headerStyle: { 
    backgroundColor: '#4280f0',},headerTintColor: '#fff',}},          

  EvaluationScreen: {screen: Evaluation, navigationOptions: {title: 'Evaluation', headerStyle:{
              backgroundColor: '#4280f0',}, headerTintColor: '#fff',}},  

  KTUAnnouncementsScreen: { screen: Announcements,navigationOptions:{title: 'KTU Announcements',headerStyle:{
              backgroundColor: '#4280f0',}, headerTintColor: '#fff',}},

  CreditsScreen: { screen: Credits, navigationOptions: {title: 'Credits', headerStyle:{
              backgroundColor: '#4280f0',}, headerTintColor: '#fff',}},

  Attendance1Screen: { screen: Attendance1, navigationOptions:{title: 'Attendance', headerStyle:{
              backgroundColor: '#4280f0',}, headerTintColor: '#fff',}},

});

const App = createAppContainer(AppNavigator);

export default App;
