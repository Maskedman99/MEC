import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Linking } from 'react-native';
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

    var rows = this.state.loading ? [] : this.state.root.querySelectorAll('b');
    rows.pop(); //To remove the unwanted 'n' appearing in the announcement list

    return (
      this.state.loading ?

       <View style = {{flex:1, backgroundColor: '#4E4E4E',justifyContent: 'center', alignItems: 'center'}}>
             <ActivityIndicator color="white" size="large" />  
       </View>
      :
      <View style = {{backgroundColor: '#4E4E4E', flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
        <FlatList style ={{backgroundColor: '#4E4E4E'}}
            data = {rows}
            renderItem = {({item}) => 
                    <Text style={{marginVertical:5, color: 'white', marginLeft: 10, fontSize: 16}}>
                                {JSON.stringify(item.childNodes[0].rawText).replace(/["\\]/g,'')} </Text>}
        />
        
        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://ktu.edu.in/eu/core/announcements.htm')}}>
        <Text style={{color:'violet', fontSize: 17, fontStyle: 'italic', textDecorationLine: 'underline'}}>
                View More{'\n'}</Text>
        </TouchableOpacity>        
        </View>
    );
  }
}

export default KTUAnnouncements;