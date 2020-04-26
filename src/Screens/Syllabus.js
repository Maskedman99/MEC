import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

// import SyllabusList from '../Components/SyllabusList';

const Syllabus = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textnorm}>Comming Soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    justifyContent: 'center',
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
