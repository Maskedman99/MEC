import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Image} from 'react-native';

export class Home extends Component {
  render() {
    return (
      <View>
      <StatusBar backgroundColor="#4E4E4E" barStyle="light-content"/>
      <ImageBackground source={require('../Assets/MEC.jpg')} style={styles.container}>
        <View style={styles.inner}>
        <ScrollView style={{marginTop: 40}}>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() =>  this.props.navigation.navigate('EvaluationScreen')}>
                    <View style={styles.button}>
                    <Image style={styles.img} source={require('../Assets/Evaluation.png')}/>
                        <Text style={styles.textstyle}>EVALUATION</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Attendance1Screen')}>
                    <View style={styles.button}>
                    <Image style={styles.img} source={require('../Assets/Attendance.png')}/>
                        <Text style={styles.textstyle}>ATTENDANCE</Text>
                    </View>
            </TouchableOpacity>
          </View> 

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('KTUAnnouncementsScreen')}>
                    <View style={styles.button}>
                        <Image style={styles.img} source={require('../Assets/Announcements.png')}/> 
                        <Text style={styles.textstyle}>ANNOUNCEMENTS</Text>
                    </View>
            </TouchableOpacity>
        
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SettingScreen')}>
                    <View style={styles.button}>
                        <Image style={styles.img} source={require('../Assets/Settings.png')}/>
                        <Text style={styles.textstyle}>SETTINGS</Text>
                    </View>
            </TouchableOpacity> 
          </View>

        </ScrollView>
        </View>
      </ImageBackground>
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
  },
  inner:
  {
    height:'70%', width:'95%',
    backgroundColor: 'rgba(255,255,255,0)',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  button: {
    width: 175,
    height:110,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'mediumslateblue',
    borderRadius:3,
    borderWidth: 0.2,
    borderColor: 'white'
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