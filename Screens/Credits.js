import React, { Component } from 'react';
import { View, Text, StyleSheet,} from 'react-native';

export class Credits extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#4280f0', flex: 1,}}>
        <Text style = {{marginTop: 5}}></Text>
        <Text style = {styles.text}>maskedman</Text>
        <Text style = {{color: 'white', marginTop: 30, marginLeft: 10, fontSize: 15}}>Special thanks to: </Text>
        <Text style = {styles.text}>heo5981</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    text:
    {
        marginLeft: 15,
        marginTop: 10,
        color: 'white',
        fontStyle: 'italic',
        fontSize: 17,
    }
})


export default Credits;