import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';

import TimetableElement from './TimetableElement';
import Spinner from './Spinner';
import TimetableParser from './Logic/TimetableParser';

const TimetableList = ({sem = sem, branch = branch}) => {
  const [state, setState] = useState({
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
  });
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    let clas = branch;
    let s = sem;

    let url2 = s;
    if (clas === 0) url2 = 'C' + url2 + 'A';
    else if (clas === 1) url2 = 'C' + url2 + 'B';
    else if (clas === 2) url2 = 'EE' + url2;
    else if (clas === 3) url2 = 'E' + url2 + 'A';
    else if (clas === 4) url2 = 'E' + url2 + 'B';
    else url2 = 'B' + url2;

    const url =
      'http://attendance.mec.ac.in/view4stud.php?class=' +
      url2 +
      '&submit=view';

    axios
      .get(url)
      .then(function(response) {
        let A = TimetableParser(response.data);
        setState({fri: A.fri, thu: A.thu, wed: A.wed, tue: A.tue, mon: A.mon});
        setisloading(false);
      })
      .catch(e => console.log(e));
  }, [branch, sem]);

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
    flex: 1,
  },
});

export default TimetableList;
