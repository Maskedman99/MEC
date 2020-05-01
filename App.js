import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Settings from './src/Screens/Settings';
import Home from './src/Screens/Home';
import Attendance from './src/Screens/Attendance';
import EvaluationMenu from './src/Screens/EvaluationMenu';
import Evaluation from './src/Screens/Evaluation';
import Announcements from './src/Screens/KTUAnnouncements';
import Credits from './src/Screens/Credits';
import AttendanceMenu from './src/Screens/AttendanceMenu';
import SyllabusMenu from './src/Screens/SyllabusMenu';
import Syllabus from './src/Screens/Syllabus';
import TimetableMenu from './src/Screens/Timetablemenu';
import Timetable from './src/Screens/Timetable';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#000000',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 1
          },
          gestureEnabled: true
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            title: 'MEC'
          }}
        />
        <Stack.Screen
          name="Attendance"
          component={Attendance}
          options={{
            title: 'Attendance'
          }}
        />
        <Stack.Screen
          name="AttendanceMenu"
          component={AttendanceMenu}
          options={{
            title: 'Attendance'
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            title: 'Settings'
          }}
        />
        <Stack.Screen
          name="Evaluation"
          component={Evaluation}
          options={{
            title: 'Evaluation'
          }}
        />
        <Stack.Screen
          name="EvaluationMenu"
          component={EvaluationMenu}
          options={{
            title: 'Evaluation'
          }}
        />
        <Stack.Screen
          name="Credits"
          component={Credits}
          options={{
            title: 'Credits'
          }}
        />
        <Stack.Screen
          name="Syllabus"
          component={Syllabus}
          options={{
            title: 'Syllabus'
          }}
        />
        <Stack.Screen
          name="SyllabusMenu"
          component={SyllabusMenu}
          options={{
            title: 'Syllabus'
          }}
        />
        <Stack.Screen
          name="Announcements"
          component={Announcements}
          options={{
            title: 'KTU Announcements'
          }}
        />
        <Stack.Screen
          name="Timetable"
          component={Timetable}
          options={{
            title: 'Timetable'
          }}
        />
        <Stack.Screen
          name="TimetableMenu"
          component={TimetableMenu}
          options={{
            title: 'Timetable'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
