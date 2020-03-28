import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ClassButton from './ClassButton';

const SemesterMenu = ({action}) => {
  return (
    <View>
      <Text style={styles.headtext}>Semester</Text>
      <View style={styles.class}>
        <View style={styles.classinner}>
          <ClassButton title="1" value={1} action={action} />
          <ClassButton title="2" value={2} action={action} />
          <ClassButton title="3" value={3} action={action} />
          <ClassButton title="4" value={4} action={action} />
        </View>
        <View style={styles.classinner}>
          <ClassButton title="5" value={5} action={action} />
          <ClassButton title="6" value={6} action={action} />
          <ClassButton title="7" value={7} action={action} />
          <ClassButton title="8" value={8} action={action} />
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

export default SemesterMenu;
