import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Alert, StyleSheet, ScrollView } from 'react-native';

export class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>

      <ScrollView style = {{marginTop: 20}}>

        <TouchableHighlight activeOpacity={0.5} onPress={() => {Alert.alert('No Updates Available');}}>
                <Text style={styles.menutext}>{'\t\t'}Check for Updates</Text>
        </TouchableHighlight>

        <TouchableHighlight activeOpacity={0.5} onPress={() =>this.props.navigation.navigate('CreditsScreen')}>
                <Text style={styles.menutext}>{'\t\t'}Credits</Text>
        </TouchableHighlight>
        
        <TouchableHighlight activeOpacity={0.5} onPress={() => {Alert.alert('Version 2.0');}}>
                <Text style={styles.menutext}>{'\t\t'}About</Text>
        </TouchableHighlight>
  
      </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container:{
    backgroundColor: '#000000', 
    flex: 1, 
    borderTopWidth: 1, 
    borderColor:'white',
  },

  menutext:{
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 18,
    marginVertical: 15,
    marginHorizontal: 10, 
    borderBottomWidth: 0.5, 
    borderBottomColor:'#8bc34a',
  }
})
export default Settings;
