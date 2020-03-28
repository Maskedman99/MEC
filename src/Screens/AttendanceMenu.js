import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import ClassButton from '../Components/ClassButton';

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

  // Function to get the class and roll.no stored locally using the async-storage package
  const getMyValue = async () => {
    try {
      setIndex(JSON.parse(await AsyncStorage.getItem('@branch')));
      setSemester(JSON.parse(await AsyncStorage.getItem('@sem')));
      setRollNo(JSON.parse(await AsyncStorage.getItem('@roll')));
    } catch (e) {
      //  console.log(e);
    }
  };

  //Function to store the submitted values locally so user doesn't have to re-enter (async-storage)
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
      roll == 0 || roll == null || sem == null || index == null ? (
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

      <Text style={styles.headtext}>Class</Text>
      <View style={styles.class}>
        <View style={styles.classinner}>
          <ClassButton title="CSA" value={0} action={branchhandler} />
          <ClassButton title="CSB" value={1} action={branchhandler} />
          <ClassButton title="EEE" value={2} action={branchhandler} />
        </View>
        <View style={styles.classinner}>
          <ClassButton title="ECA" value={3} action={branchhandler} />
          <ClassButton title="ECB" value={4} action={branchhandler} />
          <ClassButton title="EB" value={5} action={branchhandler} />
        </View>
      </View>
      <Text style={styles.headtext}>Semester</Text>
      <View style={styles.class}>
        <View style={styles.classinner}>
          <ClassButton title="1" value={1} action={semhandler} />
          <ClassButton title="2" value={2} action={semhandler} />
          <ClassButton title="3" value={3} action={semhandler} />
          <ClassButton title="4" value={4} action={semhandler} />
        </View>
        <View style={styles.classinner}>
          <ClassButton title="5" value={5} action={semhandler} />
          <ClassButton title="6" value={6} action={semhandler} />
          <ClassButton title="7" value={7} action={semhandler} />
          <ClassButton title="8" value={8} action={semhandler} />
        </View>
      </View>
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
  headtext: {
    margin: 5,
    marginTop: 25,
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  },
  class: {
    marginHorizontal: 3
  },
  classinner: {
    flexDirection: 'row',
    justifyContent: 'space-around'
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
