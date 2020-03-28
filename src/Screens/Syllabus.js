import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TXT from '../Assets/Syllabus/CS.json';

import SyllabusList from '../Components/SyllabusList';

function Syllabus(props) {
  return props.navigation.getParam('branch', '0') === 0 &&
    props.navigation.getParam('sem', '1') === 5 ? (
    <View style={styles.container}>
      <SyllabusList data={TXT.S5} />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.textnorm}>Comming Soon!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    borderTopWidth: 1,
    borderColor: 'white'
  },
  textnorm: {
    color: 'white',
    fontSize: 19,
    textAlign: 'center'
  }
});

export default Syllabus;
