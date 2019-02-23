import React, { Component } from 'react';
import {WebView} from 'react-native';

export class Evaluation extends Component {

  render() {
    return (     
         <WebView
        source={{uri: 'http://evaluation.mec.ac.in/'}}
        style={{

        }}/>
    );
  }
}


export default Evaluation;
