import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView, StatusBar, Image} from 'react-native';

import HomeButton from '../Components/HomeButton';

import ImageSlider from 'react-native-image-slider';
import SplashScreen from 'react-native-splash-screen';

function Home(props) {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 150);
  }, []);

  const images = [
    'https://github.com/Maskedman99/MEC/raw/master/.images/1',
    'https://github.com/Maskedman99/MEC/raw/master/.images/2',
    'https://github.com/Maskedman99/MEC/raw/master/.images/3',
    'https://github.com/Maskedman99/MEC/raw/master/.images/4',
    'https://github.com/Maskedman99/MEC/raw/master/.images/5'
  ];
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />

      <View style={styles.imgcontainer}>
        <ImageSlider
          autoPlayWithInterval={4000}
          images={images}
          customSlide={({index, item, style, width}) => (
            <View key={index} style={[style, styles.customSlide]}>
              <Image source={{uri: item}} style={styles.bigimg} />
            </View>
          )}
        />
      </View>

      <View style={styles.inner}>
        <ScrollView>
          <View style={styles.buttonContainer}>
            <HomeButton
              navscreen="EvaluationMenuScreen"
              nav={props.navigation}
              title="EVALUATION"
              img={require('../Assets/Evaluation.png')}
            />
            <HomeButton
              navscreen="AttendanceMenuScreen"
              nav={props.navigation}
              title="ATTENDANCE"
              img={require('../Assets/Attendance.png')}
            />
          </View>

          <View style={styles.buttonContainer}>
            <HomeButton
              navscreen="KTUAnnouncementsScreen"
              nav={props.navigation}
              title="ANNOUNCEMENTS"
              img={require('../Assets/Announcements.png')}
            />
            <HomeButton
              navscreen="TimetableMenuScreen"
              nav={props.navigation}
              title="TIME-TABLE"
              img={require('../Assets/Timetable.png')}
            />
          </View>

          <View style={styles.buttonContainer}>
            <HomeButton
              navscreen="SyllabusMenuScreen"
              nav={props.navigation}
              title="SYLLABUS"
              img={require('../Assets/Syllabus.png')}
            />
            <HomeButton
              navscreen="SettingScreen"
              nav={props.navigation}
              title="SETTINGS"
              img={require('../Assets/Settings.png')}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000000',
    flex: 1
  },
  imgcontainer: {
    borderWidth: 1,
    borderColor: '#8bc34a',
    borderRadius: 2.5,
    height: '45%'
  },
  bigimg: {
    height: '100%',
    width: '100%',
    resizeMode: 'stretch'
  },
  customSlide: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inner: {
    marginTop: '1%',
    flex: 1,
    alignSelf: 'stretch'
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1
  }
});

export default Home;
