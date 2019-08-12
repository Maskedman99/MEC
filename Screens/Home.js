import React, { Component } from 'react';
import ImageSlider from 'react-native-image-slider';

import { View, Text, StyleSheet, ScrollView, StatusBar, Image, TouchableHighlight} from 'react-native';


export class Home extends Component {

  render() {

    const images = [
              'https://www.excelmec.org/static/media/excel.c7c894bc.png',
              'https://pbs.twimg.com/media/EBg4aeQUIAAhUvU.jpg',
              'https://pbs.twimg.com/media/EBSh5kgVAAI4Y-0.jpg',];       

    return (
      <View style={styles.container}> 
      <StatusBar backgroundColor="#000000" barStyle="light-content"/>

        <View style ={styles.imgcontainer}>
          <ImageSlider  
            autoPlayWithInterval={4000}
            images={images} //required for some reason
            customSlide={({ index, item, style, width }) => (
              <View key={index} style={[style, styles.customSlide]}>
                <Image source={{uri : item}} 
                style={{height: '100%', width: '95%', resizeMode: 'stretch'}} />
              </View>
          )} 
          />   
        </View>
  
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

  imgcontainer: {
    borderWidth: 1,
    borderColor: '#8bc34a',
    borderRadius : 2.5,
    flex: 1,
    marginTop: 5,
  },

  customSlide: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  inner:
  {
    height:'53%', width:'95%',
    marginTop: 20,
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