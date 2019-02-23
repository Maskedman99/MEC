import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

export class Settings extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#4E4E4E', flex: 1,}}>

        <TouchableOpacity onPress={() => {Alert.alert('No Updates Available');}}>
              <View style={{margin: 15, marginTop:30, borderBottomWidth: 0.5, borderBottomColor:'white'}}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}> Check for Updates</Text>
              </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>this.props.navigation.navigate('CreditsScreen')}>
             <View style={{margin: 15, borderBottomWidth: 0.5, borderBottomColor:'white'}}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}> Credits</Text>
              </View> 
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => {Alert.alert('Version 1.0');}}>
              <View style={{margin: 15, borderBottomWidth: 0.5, borderBottomColor:'white'}}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}> About</Text>
              </View>
        </TouchableOpacity>
  
      </View>
    );
  }
}


export default Settings;
