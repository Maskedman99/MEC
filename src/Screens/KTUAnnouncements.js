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
        style={styles.list}
        data={rows}
        renderItem={({item, index}) => {
          if (index % 2 === 0) {
            return (
              <View>
                <Text style={styles.date}>{item}</Text>
              </View>
            );
          }
          return (
            <View>
              <Text style={styles.announcements}>{item}</Text>
            </View>
          );
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
    marginVertical: 20,
    fontSize: 16,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  container: {
    backgroundColor: '#000000',
    flex: 1,
    borderTopWidth: 1,
    borderColor: 'white',
    paddingTop: 10
  },
  announcements: {
    paddingVertical: 10,
    color: 'white',
    fontSize: 15,
    fontFamily: 'sans-serif',
    borderBottomWidth: 1,
    borderBottomColor: '#8bc34a'
  },
  date: {
    color: 'white',
    textAlign: 'right'
  },
  list: {
    color: 'white',
    marginHorizontal: 3
  }
});

export default KTUAnnouncements;
