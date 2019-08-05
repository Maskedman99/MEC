import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Alert, StyleSheet, ScrollView, Share } from 'react-native';

export class Settings extends Component {

  onShare = async() =>{
    try{
      {
        await Share.share(
          {
            message: 'http://gen.lib.rus.ec/  ',
            url: 'http://gen.lib.rus.ec/',    //Only IOS
            title: 'Hey there, checkout this app!'
          },
          { // Android only:
            dialogTitle: 'Share MEC with your freinds!',
            // iOS only:
            excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter']
          }) 
        }
    }
    catch (error){
      alert(error.message);
    }
  };

  render() {
    return (
      <View style={styles.container}>

      <ScrollView style = {{marginTop: 20}}>

        <TouchableHighlight activeOpacity={0.5} onPress={() => {Alert.alert('No Updates Available');}}>
                <Text style={styles.menutext}>{'\t\t'}Check for Updates</Text>
        </TouchableHighlight>

        <TouchableHighlight activeOpacity={0.5} onPress={this.onShare} >
                <Text style={styles.menutext}>{'\t\t'}Share</Text>
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
