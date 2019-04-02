import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, Linking } from 'react-native';
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

       <View style = {{flex:1, backgroundColor: '#4280f0',justifyContent: 'center', alignItems: 'center'}}>
             <ActivityIndicator color="white" size="large" />  
       </View>
      :
      <View style = {{backgroundColor: '#4280f0', flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
       <ScrollView style={{color: 'white',}}>
        <View style={{marginHorizontal: 5, marginVertical:15}}>
        { rows.map((item, keys)=>(
            keys%2 ?
              <Text style={{color: 'white', fontSize: 16, borderBottomWidth: 1,borderBottomColor: "white", fontWeight: 'bold'}}>{item}{'\n'}</Text>
            :  
              <Text style ={{color: 'white',}}>{item}{'\n'}</Text>
          ))            
        }
        </View>
        </ScrollView>
        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://ktu.edu.in/eu/core/announcements.htm')}}>
        <Text style={{color:'#00ff00', fontSize: 17, fontStyle: 'italic', textDecorationLine: 'underline', fontWeight: 'bold'}}>
                View More{'\n'}</Text>
        </TouchableOpacity>        
        </View>
    );
  }
}

export default KTUAnnouncements;