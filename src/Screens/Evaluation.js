import React, {useState} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

import useEvaluationAxios from '../Components/Logic/useEvaluationAxios';
import EvaluationParser from '../Components/Logic/EvaluationParser';
import classToUrlForm from '../Components/Logic/classToUrlForm';

import Spinner from '../Components/Spinner';

const Evaluation = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);
  const [name, setName] = useState('');
  let Clas = classToUrlForm(navigation.getParam('branch', '0'), navigation.getParam('sem', '1'));
  let rollNo = navigation.getParam('rollno', '1');

  let response = [];
  response = useEvaluationAxios({Clas, rollNo});
  if (response.length !== 0 && loading === true) {
    let A = EvaluationParser(response);
    setRows(A.rows);
    setCols(A.cols);
    setName(A.name);
    setLoading(false);
  }

  return loading ? (
    <Spinner />
  ) : (
    <View style={styles.container}>
      {cols === [] || rows === [] || name === '' ? (
        <Text style={styles.subject}>No Marks has been Entered</Text>
      ) : (
        <View>
          <Text style={styles.subject}>{name}</Text>
          <ScrollView style={styles.scroll}>
            {rows.map((item, key) =>
              item.charCodeAt(0) < 58 ? (
                <View style={styles.rowstyle}>
                  <Text style={styles.textnorm}>{cols[key]}</Text>
                  <Text style={styles.mark}>{item}</Text>
                </View>
              ) : (
                <Text style={styles.subject}>{item}</Text>
              )
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  scroll: {
    marginTop: 10
  },
  rowstyle: {
    flexDirection: 'row'
  },
  textnorm: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    marginVertical: 5,
    textAlign: 'center'
  },
  subject: {
    textAlign: 'center',
    color: '#8bc34a',
    fontWeight: 'bold',
    fontSize: 17,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: '#8bc34a',
    textAlignVertical: 'bottom'
  },
  mark: {
    color: '#fcfc02',
    fontSize: 16,
    marginLeft: 40,
    marginVertical: 5,
    textAlign: 'center'
  }
});

export default Evaluation;
