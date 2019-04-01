import React, {Component} from 'react';
import {ScrollView, ActivityIndicator, Text, View} from 'react-native';
import axios from 'axios';


var HTMLParser = require('fast-html-parser');

export default class Attendance extends Component {
  
  state = {
            loading: true,
            root: {},
            Rollno: null,
            NOS: null,         //Number of Subjects
            data: null,
  }



  componentDidMount() {
    const { navigation } = this.props;
    const branch = navigation.getParam('branch', '0');
    const sem = navigation.getParam('sem', '1');
    const div = navigation.getParam('div', 'A');
    var rollno = navigation.getParam('rollno', '1');
    this.setState({Rollno: rollno});

    if(sem ==1 | sem == 2)
        this.setState({NOS: 6});
    else if(sem ==3 | sem ==4)
        this.setState({NOS: 5});
    else
        this.setState({NOS: 5.5})        

    var url2 = sem;
    if (branch == 0)
      url2 = 'C' + url2 + div;
    else if (branch == 1)
      url2 = 'E' + url2 + div;
    else if (branch == 2)
      url2 = 'EE' + url2;
    else
      url2 = 'B' + url2;

    const url = 'http://attendance.mec.ac.in/view4stud.php?class=' + url2 + '&submit=view';

    axios.get(url)
    .then(data => this.setState({
                              root: HTMLParser.parse(data.data),
                              loading: false
                              }))
    .catch(err => alert('Something went wrong! Check your connection.'));
  }
  
  render() {
    
    var rows = this.state.loading ? [] : this.state.root.querySelectorAll('td');

    for(i=0;i<rows.length;i++)
      rows[i] = JSON.stringify(rows[i].rawText).replace(/["\\]/g,'');

  /*
  for(i=0;i<rows.length;i++){                 |
    var x = rows[i].split(" ");               | //Not required
    for(j=0; j<x.length;j++)                  |
      if(x[j] == this.state.Rollno){          |
        console.log(i);                       |
        break;                                |
      }  
  }
  */
  var x1 = '';
  for(i = 0; i<this.state.NOS * 2; i++)
    x1 = x1 + '+' + rows[this.state.Rollno * this.state.NOS * 2 + i];  
  
  //x1 = x1.replace(/[rnt]/g,'') // Can't do, letters r,n,t in name gets replaced
  x1 = x1.replace("rn",'');
  x1 = x1.split('rnt').join('');
  x1 = x1.split('t ').join('') 
  const x2 = x1.split("+");

  var t1 = '';
  for(i = (rows.length - 41 -(((this.state.NOS*2)-2)*2)); i<rows.length - 41; i++)
    t1 = t1 + '+' + rows[i];
  const t2 = t1.split("+rn");
  
  var a1 ='';
  var et = ''; 
  for(i=0; i<t2.length; i++)
  {
    if(i%2 != 0)
      a1 = a1 + '+' + t2[i];
    else
      et = et + '+' + t2[i];
  }
  const a2 = a1.split('+');
  const et2 = et.split('+');
  a2.shift();

    return (
      this.state.loading ?

       <View style = {{flex:1, backgroundColor: '#4280f0',justifyContent: 'center', alignItems: 'center'}}>
             <ActivityIndicator color="white" size="large" />  
       </View>
      :
    
        <View style = {{flex: 1, backgroundColor: '#4280f0',}}> 

        <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
          <Text style={{color: 'white', fontSize: 16}}>Name:   </Text>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>{x2[2]}</Text>
        </View>

        <View style={{flexDirection: 'row',justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
          <Text style={{color: 'white', fontSize: 16}}>Roll no:   </Text>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>{x2[1]}</Text>
        </View>

        <ScrollView style={{color: 'white',marginTop: 10, borderTopColor:'white', borderTopWidth: 2}}>

        <View style={{marginLeft: 5, marginTop: 15, marginRight: 5}}>
        { a2.map((item, key)=>(
         <Text key={key} style={{color: 'white', marginBottom: 15, borderBottomWidth: 1, borderBottomColor:'white'}}>
                    {item}{'\n'}Percentage:  {x2[key+3]}{'\n'}Entries till:     {et2[key+2]}</Text>
         )
         )}
        </View>
        </ScrollView>
        </View>
    );
  }
}

//rows[rows.length -42] is the last entry