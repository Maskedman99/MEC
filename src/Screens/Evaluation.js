import React, {useState} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';

import useEvaluationAxios from '../Components/Logic/useEvaluationAxios';
import EvaluationParser from '../Components/Logic/EvaluationParser';
import classToUrlForm from '../Components/Logic/classToUrlForm';
var HTMLParser = require('fast-html-parser');

import Spinner from '../Components/Spinner';

const Evaluation = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  let Clas = classToUrlForm(navigation.getParam('branch', '0'), navigation.getParam('sem', '1'));
  let rollNo = '44';
  let response = [];

  response = useEvaluationAxios({Clas, rollNo});
  if (response.length !== 0 && loading === true) {
    let root = HTMLParser.parse(JSON.stringify(response.data));
    let cols = root.querySelectorAll('th');
    let rows = root.querySelectorAll('td');
    rows = rows.map(item => item.childNodes[0].rawText.replace('\\n', '').trim());
    cols = cols.map(item => item.childNodes[0].rawText);
    cols.shift();
    cols.shift();
    cols.shift();
    setX(rows);
    setY(cols);
    console.log(cols);
    setLoading(false);
  }

  return loading ? (
    <Spinner />
  ) : (
    <ScrollView style={styles.container}>
      {x.map((item, key) =>
        item.charCodeAt(0) < 58 ? (
          <View style={styles.rowstyle}>
            <Text style={styles.textnorm}>{y[(key % y.length) - 1]}</Text>
            <Text style={styles.textnorm}>{item}</Text>
          </View>
        ) : (
          <Text style={styles.subject}>{item}</Text>
        )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: 'white'
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
    borderTopWidth: 3,
    borderTopColor: '#8bc34a',
    textAlignVertical: 'bottom'
  }
});

export default Evaluation;
