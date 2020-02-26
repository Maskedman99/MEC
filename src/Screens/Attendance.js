import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Alert, StyleSheet } from "react-native";
import axios from "axios";

import AttendanceDisplay from "../Components/AttendanceDisplay";
import Spinner from "../Components/Spinner";
import AttendanceParser from "../Components/AttendanceParser";

const Attendance = ({ navigation = navigation }) => {
  // x => Name, roll.no and percentages, et => Subject names and entries till
  const [state, setState] = useState({
    loading: true,
    Rollno: navigation.getParam("rollno", "1"),
    x: [],
    et: [],
    a: [],
    tc: []
  });

  useEffect(() => {
    let clas = navigation.getParam("branch", "0");
    let sem = navigation.getParam("sem", "1");

    let url2 = sem;
    if (clas === 0) url2 = "C" + url2 + "A";
    else if (clas === 1) url2 = "C" + url2 + "B";
    else if (clas === 2) url2 = "EE" + url2;
    else if (clas === 3) url2 = "E" + url2 + "A";
    else if (clas === 4) url2 = "E" + url2 + "B";
    else url2 = "B" + url2;

    const url = "http://attendance.mec.ac.in/view4stud.php?class=" + url2;

    axios
      .get(url)
      .then(function(response) {
        let A = AttendanceParser(response.data, state.Rollno);
        setState({ x: A.x, et: A.et, a: A.a, tc: A.tc, loading: false });
      })
      .catch(err => Alert.alert(err.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state.loading ? (
    <Spinner />
  ) : (
    <View style={styles.container}>
      <View style={styles.headcontainer}>
        <Text style={styles.textnorm}>Name: </Text>
        <Text style={styles.textbig}>{state.x[2].trim()}</Text>
      </View>

      <View style={styles.headcontainer}>
        <Text style={styles.textnorm}>Roll no: </Text>
        <Text style={styles.textbig}>{state.x[1]}</Text>
      </View>

      <ScrollView style={styles.scroll}>
        <View style={styles.rowcontainer}>
          {state.a.map((item, key) => (
            <AttendanceDisplay
              subject={item}
              percentage={state.x[key + 3]}
              entriestill={state.et[key + 2]}
              totalClasses={state.tc[key]}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "white"
  },
  textnorm: {
    color: "white",
    fontSize: 16
  },
  textbig: {
    color: "#8bc34a",
    fontWeight: "bold",
    fontSize: 16
  },
  headcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  scroll: {
    marginTop: 10,
    borderTopColor: "#8bc34a",
    borderTopWidth: 2
  },
  rowcontainer: {
    marginTop: 15
  }
});

export default Attendance;
