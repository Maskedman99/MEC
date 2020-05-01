import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import TimetableElement from '../Components/TimetableElement';
import Spinner from '../Components/Spinner';
import TimetableParser from '../Components/Logic/TimetableParser';
import useAxios from '../Components/Logic/useAxios';
import classToUrlForm from '../Components/Logic/classToUrlForm';

const Timetable = ({route}) => {
  const [state, setState] = useState({mon: [], tue: [], wed: [], thu: [], fri: []});
  const [isloading, setIsLoading] = useState(true);

  let url = classToUrlForm(route.param?.branch ?? '0', route.param?.sem ?? '1');
  let data = [];
  data = useAxios(`http://attendance.mec.ac.in/view4stud.php?class=${url}`);
  if (data.length !== 0 && isloading === true) {
    let A = TimetableParser(data);
    setState({fri: A.fri, thu: A.thu, wed: A.wed, tue: A.tue, mon: A.mon});
    setIsLoading(false);
  }

  return isloading ? (
    <Spinner />
  ) : (
    <ScrollView style={styles.container}>
      <TimetableElement head="MONDAY" data={state.mon} />
      <TimetableElement head="TUESDAY" data={state.tue} />
      <TimetableElement head="WEDNESDAY" data={state.wed} />
      <TimetableElement head="THURSDAY" data={state.thu} />
      <TimetableElement head="FRIDAY" data={state.fri} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: 'white'
  }
});

export default Timetable;
