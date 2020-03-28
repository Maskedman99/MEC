import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, TouchableHighlight, StyleSheet, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import ClassMenu from '../Components/ClassMenu';
import SemesterMenu from '../Components/SemesterMenu';

const AttendanceMenu = ({navigation}) => {
  const data = ['CSA', 'CSB', 'EEE', 'ECA', 'ECB', 'EB'];
  const [index, setIndex] = useState(0);
  const [roll, setRollNo] = useState(1);
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
    try {
      setIndex(JSON.parse(await AsyncStorage.getItem('@branch')) || 0);
      setSemester(JSON.parse(await AsyncStorage.getItem('@sem')) || 1);
      setRollNo(JSON.parse(await AsyncStorage.getItem('@roll')) || 1);
    } catch (e) {
      //  console.log(e);
    }
  };

  const setValue = async () => {
    try {
      await AsyncStorage.setItem('@branch', JSON.stringify(index));
      await AsyncStorage.setItem('@sem', JSON.stringify(sem));
      await AsyncStorage.setItem('@roll', JSON.stringify(roll));
    } catch (e) {
      //  console.log(e);
    }
    navigation.navigate('AttendanceScreen', {
      branch: index,
      sem: sem,
      rollno: roll
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.livetextcontainer}>
        <Text style={styles.livetext}>{data[index]}</Text>
        <Text style={styles.livetext}>{sem}</Text>
        <Text style={styles.livetext}>{roll}</Text>
      </View>
      {// eslint-disable-next-line eqeqeq
      roll == 0 || roll == null ? (
        <View style={styles.warningcontainer}>
          <Text style={styles.warningtext}> Enter Data </Text>
        </View>
      ) : (
        <TouchableHighlight style={styles.submitcontainer} onPress={setValue}>
          <Text style={styles.submittext}>SUBMIT</Text>
        </TouchableHighlight>
      )}

      <Text style={styles.rolltext}>Roll no.</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Enter roll no. here "
        placeholderTextColor="gray"
        keyboardType="numeric"
        maxLength={2}
        returnKeyType={'go'}
        selectionColor="white"
        enablesReturnKeyAutomatically={true}
        onSubmitEditing={setValue}
        keyboardAppearance={'dark'}
        onChangeText={i => setRollNo(i)}
      />
      <ClassMenu action={branchhandler} />
      <SemesterMenu action={semhandler} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    borderTopWidth: 1,
    borderColor: 'white'
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
  rolltext: {
    marginTop: 20,
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  },
  textinput: {
    marginHorizontal: 3,
    textAlign: 'center',
    color: 'white',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#4caf50',
    marginBottom: 5,
    marginTop: -2
  },
  warningcontainer: {
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 3,
    marginTop: 15,
    borderRadius: 2,
    margin: 10
  },
  warningtext: {
    color: '#ed1c22',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5
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

export default AttendanceMenu;
