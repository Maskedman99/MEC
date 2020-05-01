import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

const Credits = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>maskedman</Text>
      <Text style={styles.specialthankstext}>Special thanks to: </Text>
      <Text style={styles.text}>u/heo5981</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1
  },
  text: {
    marginTop: 30,
    color: '#8bc34a',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center'
  },
  specialthankstext: {
    color: 'white',
    marginTop: 30,
    marginBottom: -15,
    fontSize: 15,
    textAlign: 'center'
  }
});

export default Credits;
