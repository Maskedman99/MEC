import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ClassButton from './ClassButton';

const ClassMenu = ({action}) => {
  return (
    <View>
      <Text style={styles.headtext}>Class</Text>
      <View style={styles.class}>
        <View style={styles.classinner}>
          <ClassButton title="CSA" value={0} action={action} />
          <ClassButton title="CSB" value={1} action={action} />
          <ClassButton title="EEE" value={2} action={action} />
        </View>
        <View style={styles.classinner}>
          <ClassButton title="ECA" value={3} action={action} />
          <ClassButton title="ECB" value={4} action={action} />
          <ClassButton title="EB" value={5} action={action} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headtext: {
    margin: 5,
    marginTop: 25,
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  },
  class: {
    marginHorizontal: 3
  },
  classinner: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default ClassMenu;
