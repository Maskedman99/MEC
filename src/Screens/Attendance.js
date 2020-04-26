import React, {useState} from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';

import AttendanceDisplay from '../Components/AttendanceDisplay';
import Spinner from '../Components/Spinner';
import useAxios from '../Components/Logic/useAxios';
import AttendanceParser from '../Components/Logic/AttendanceParser';
import classToUrlForm from '../Components/Logic/classToUrlForm';

const Attendance = ({navigation}) => {
  // x => Name, roll.no and percentages, et => Subject names and entries till
  const [state, setState] = useState({x: [], et: [], a: [], tc: []});
  const [loading, setLoading] = useState(true);
  const Rollno = navigation.getParam('rollno', '1');

  let url = classToUrlForm(navigation.getParam('branch', '0'), navigation.getParam('sem', '1'));

  let data = [];
  data = useAxios(`http://attendance.mec.ac.in/view4stud.php?class=${url}`);
  if (data.length !== 0 && loading === true) {
    let A = AttendanceParser(data, Rollno);
    setState({x: A.x, et: A.et, a: A.a, tc: A.tc});
    setLoading(false);
  }

  return loading ? (
    <Spinner />
  ) : (
    <View style={styles.container}>
      <View style={styles.headcontainer}>
        <Text style={styles.textnorm}>Name: </Text>
        <Text style={styles.textbig}>{state.x[2].trim()}</Text>
      </View>

      <View style={styles.headcontainer}>
        <Text style={styles.textnorm}>Roll no: </Text>
        <Text style={styles.textbig}>{state.x[1]}</Text>
      </View>

      <FlatList
        style={styles.list}
        data={state.a}
        renderItem={({item, index}) => (
          <AttendanceDisplay
            subject={item}
            percentage={state.x[index + 3]}
            entriestill={state.et[index + 2]}
            totalClasses={state.tc[index]}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: 'white'
  },
  textnorm: {
    color: 'white',
    fontSize: 16
  },
  textbig: {
    color: '#8bc34a',
    fontWeight: 'bold',
    fontSize: 16
  },
  headcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5
  },
  list: {
    paddingTop: 10,
    borderTopColor: '#8bc34a',
    borderTopWidth: 2
  }
});

export default Attendance;
