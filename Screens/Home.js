import React, { Component } from 'react';
//import SplashScreen from 'react-native-splash-screen';

import { View, Text, StyleSheet, ScrollView, StatusBar, Image, TouchableHighlight} from 'react-native';

export class Home extends Component {
  
//  componentDidMount() {
//    SplashScreen.hide();
//  }

  render() {
    return (
      <View style={styles.container}> 
      <StatusBar backgroundColor="#000000" barStyle="light-content"/>
      
        <View style={styles.inner}>
        <ScrollView>

          <View style={styles.buttonContainer}>
            <TouchableHighlight onPress={() =>  this.props.navigation.navigate('EvaluationScreen')}>
                    <View style={styles.button}>
                        <Image style={styles.img} source={require('../Assets/Evaluation.png')}/>
                        <Text style={styles.textstyle}>EVALUATION</Text>
                    </View>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.props.navigation.navigate('Attendance1Screen')}>
                    <View style={styles.button}>
                        <Image style={styles.img} source={require('../Assets/Attendance.png')}/>
                        <Text style={styles.textstyle}>ATTENDANCE</Text>
                    </View>
            </TouchableHighlight>
          </View> 

          <View style={styles.buttonContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('KTUAnnouncementsScreen')}>
                    <View style={styles.button}>
                        <Image style={styles.img} source={require('../Assets/Announcements.png')}/> 
                        <Text style={styles.textstyle}>ANNOUNCEMENTS</Text>
                    </View>
            </TouchableHighlight>
        
            <TouchableHighlight onPress={() => this.props.navigation.navigate('SettingScreen')}>
                    <View style={styles.button}>
                        <Image style={styles.img} source={require('../Assets/Settings.png')}/>
                        <Text style={styles.textstyle}>SETTINGS</Text>
                    </View>
            </TouchableHighlight> 
          </View>

        </ScrollView>
        </View>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: 
  {
    width: '100%', height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end', 
    backgroundColor: '#000000',
    flex: 1,   
  },
  inner:
  {
    height:'60%', width:'95%',
  //  borderWidth: 0.5,
  //  borderColor: 'white',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  button: {
    width: 170,
    height:110,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#388e3c',
    borderRadius:2,
    borderWidth: 0.2,
    marginRight: 0.75,
    marginBottom: 0.75,
    borderColor: '#76ff03'
  },

  textstyle: {
    color: 'white', 
    fontWeight: 'bold',
  },

  img:{
    height:45,
    width:45,
    marginBottom: 5,
},
});

export default Home;