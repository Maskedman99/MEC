import React, { Component } from 'react';
import { View, Text, StyleSheet,} from 'react-native';

export class Credits extends Component {
  render() {
    return (
      <View style={styles.container}>
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
        color: '#8bc34a',
        fontWeight: 'bold',
        fontSize: 17,
    },

    container:{
      backgroundColor: '#000000', 
      flex: 1, 
      borderTopWidth: 1, 
      borderColor:'white',
    },
})


export default Credits;