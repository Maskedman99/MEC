import React from 'react';
import {View, StyleSheet} from 'react-native';

import TimetableList from '../Components/TimetableList';

function Timetable(props) {
  return (
    <View style={styles.container}>
      <TimetableList
        branch={props.navigation.getParam('branch', '0')}
        sem={props.navigation.getParam('sem', '1')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: 'white'
  }
});

export default Timetable;
