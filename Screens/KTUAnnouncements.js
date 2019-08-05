import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight, ActivityIndicator, Linking, StyleSheet } from 'react-native';
import axios from 'axios';

var HTMLParser = require('fast-html-parser');


export class KTUAnnouncements extends Component {

    state = {
        loading: true,
        root: {}
}

componentDidMount() {
axios.get("https://ktu.edu.in/home.htm")
.then(data => this.setState({
                          root: HTMLParser.parse(data.data),
                          loading: false
                          }))
.catch(err => alert('Something went wrong! Check your connection.'));
}

render() {

    var rows = this.state.loading ? [] : this.state.root.querySelectorAll('.annuncement');
    if(!this.state.loading)
    {
    var str = '';
    str = JSON.stringify(rows[0].rawText);
    str = str.replace(/\\t/g, '');
    str = str.replace(/"/g, '');
    str = str.replace(/  /g, '');
    rows = str.split("\\n");

    for(i=0; i<rows.length; i++)
     if(rows[i].length < 2)
     {
       rows.splice(i, 1);
       i = -1;    //Every time splice is used a new array is copied into the old one, if 0 used 1st null don't 
     }            // get deleted. If the statement not used then then index of the old array is used.  
    }
    return (
      this.state.loading ?

       <View style = {{flex:1, backgroundColor: '#000000',justifyContent: 'center', alignItems: 'center'}}>
             <ActivityIndicator color="white" size="large" />  
       </View>
      :
      <View style = {styles.container}> 

        <ScrollView style={{color: 'white', marginHorizontal: 5, marginTop: -5}}>
        { 
          rows.map((item, keys)=>(
            keys%2 ?
              <Text style ={styles.announcements}>{rows[keys]}{'\n'}</Text>
            :  
              <Text style={styles.date}>{rows[keys-2]}</Text>
          ))            
        }
              <Text style={styles.date}>{rows[rows.length - 2]}</Text>
        </ScrollView>

        <TouchableHighlight activeOpacity={0.5} 
                            onPress={ ()=>{ Linking.openURL('https://ktu.edu.in/eu/core/announcements.htm')}}>
            <Text style={styles.viewmore}>🔗View More{'\n'}</Text>
        </TouchableHighlight>   

        </View>
    );
  }
}

const styles = StyleSheet.create({
    viewmore:{
      color:'#00ff00', 
      fontSize: 18, 
      fontStyle: 'italic', 
      textDecorationLine: 'underline', 
      fontWeight: 'bold',  
      alignSelf: 'center',
    },
    container:{
      backgroundColor: '#000000', 
      flex: 1,
      borderTopWidth: 1, 
      borderColor:'white',
    },
    announcements:{
      color: 'white', 
      fontSize: 16,  
      fontWeight: 'bold',
    },
    date:{
      borderBottomWidth: 1,
      borderBottomColor: '#8bc34a',
      color: 'white',
      textAlign: 'right',
    }
})

export default KTUAnnouncements;