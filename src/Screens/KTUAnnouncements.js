import React, {useState} from 'react';
import {View, Text, FlatList, TouchableHighlight, Linking, StyleSheet} from 'react-native';

import Spinner from '../Components/Spinner';
import useAxios from '../Components/Logic/useAxios';
import KTUParser from '../Components/Logic/KTUParser';

const KTUAnnouncements = () => {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);

  let data = [];
  data = useAxios('https://ktu.edu.in/home.htm');
  if (data.length !== 0 && loading === true) {
    let x = KTUParser(data);
    setRows(x);
    setLoading(false);
  }

  return loading ? (
    <Spinner />
  ) : (
    <View style={styles.container}>
      <FlatList
        data={rows}
        renderItem={({item, index}) => {
          if (index % 2 === 0) {
            return <Text style={styles.date}>{item}</Text>;
          }
          return <Text style={styles.announcements}>{item}</Text>;
        }}
      />

      <TouchableHighlight
        activeOpacity={0.5}
        onPress={() => {
          Linking.openURL('https://ktu.edu.in/eu/core/announcements.htm');
        }}>
        <Text style={styles.viewmore}>https://ktu.edu.in/eu/core/announcements.htm</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  viewmore: {
    color: '#00cdcd',
    paddingVertical: 20,
    fontSize: 16,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  container: {
    backgroundColor: '#000000',
    flex: 1,
    paddingTop: 10
  },
  announcements: {
    paddingVertical: 10,
    color: 'white',
    fontSize: 15,
    fontFamily: 'sans-serif',
    borderBottomWidth: 1,
    borderBottomColor: '#8bc34a',
    paddingHorizontal: 5
  },
  date: {
    color: 'white',
    textAlign: 'right',
    paddingHorizontal: 5
  }
});

export default KTUAnnouncements;
