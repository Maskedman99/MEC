import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';

import ClassButton from '../Components/ClassButton';
import SemesterMenu from '../Components/SemesterMenu';

const SyllabusMenu = ({navigation}) => {
  const data = ['CS', 'EEE', 'EC', 'EB'];
  const [index, setIndex] = useState(0);
  const [sem, setSemester] = useState(1);

  const branchhandler = value => {
    setIndex(value);
  };
  const semhandler = value => {
    setSemester(value);
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
          navigation.navigate('Syllabus', {
            branch: index,
            sem: sem
          })
        }>
        <Text style={styles.submittext}>SUBMIT</Text>
      </Pressable>

      <Text style={styles.headtext}>Class</Text>
      <View style={styles.classinner}>
        <ClassButton title="CS" value={0} action={branchhandler} />
        <ClassButton title="EEE" value={1} action={branchhandler} />
      </View>
      <View style={styles.classinner}>
        <ClassButton title="EC" value={2} action={branchhandler} />
        <ClassButton title="EB" value={3} action={branchhandler} />
      </View>

      <SemesterMenu action={semhandler} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    marginBottom: -10
  },
  headtext: {
    margin: 5,
    marginTop: 25,
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  },

  classinner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 5
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

export default SyllabusMenu;
