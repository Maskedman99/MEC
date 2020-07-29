import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, StyleSheet, Pressable} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import ClassMenu from '../Components/ClassMenu';
import SemesterMenu from '../Components/SemesterMenu';

const TimetableMenu = ({navigation}) => {
  const data = ['CSA', 'CSB', 'EEE', 'ECA', 'ECB', 'EB'];
  const [index, setIndex] = useState(0);
  const [sem, setSemester] = useState(1);

  useEffect(() => {
    getMyValue();
  }, []);

  const branchhandler = value => {
    setIndex(value);
  };
  const semhandler = value => {
    setSemester(value);
  };

  const getMyValue = async () => {
    const [x, y] = await Promise.all([
      AsyncStorage.getItem('@branch'),
      AsyncStorage.getItem('@sem')
    ]);
    setIndex(JSON.parse(x) || 0);
    setSemester(JSON.parse(y) || 1);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.livetextcontainer}>
        <Text style={styles.livetext}>{data[index]}</Text>
        <Text style={styles.livetext}>{sem}</Text>
      </View>

      <Pressable
        style={styles.submitcontainer}
        onPress={() =>
          navigation.navigate('Timetable', {
            branch: index,
            sem: sem
          })
        }>
        <Text style={styles.submittext}>SUBMIT</Text>
      </Pressable>

      <ClassMenu action={branchhandler} />
      <SemesterMenu action={semhandler} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1
  },
  livetextcontainer: {
    marginTop: 30,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  livetext: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4caf50'
  },
  submitcontainer: {
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 3,
    marginTop: 15,
    borderRadius: 2,
    margin: 10
  },
  submittext: {
    color: '#8bc34a',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 5
  }
});

export default TimetableMenu;
