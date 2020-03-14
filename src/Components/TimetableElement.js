import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function TimetableElement(props) {
  return (
    <View>
      <Text style={styles.head}>{props.head}</Text>
      {props.data.map((item, key) => (
        <View>
          <Text style={styles.sytext}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    textAlign: 'center',
    color: '#8bc34a',
    fontWeight: 'bold',
    fontSize: 17,
    borderTopWidth: 3,
    borderTopColor: '#8bc34a',
    textAlignVertical: 'bottom',
  },
  sytext: {
    color: 'white',
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default TimetableElement;
