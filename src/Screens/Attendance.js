import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

import AttendanceDisplay from "../Components/AttendanceDisplay";
import Spinner from "../Components/Spinner";
import useAxios from "../Components/useAxios";
import AttendanceParser from "../Components/AttendanceParser";

const Attendance = ({ navigation = navigation }) => {
  // x => Name, roll.no and percentages, et => Subject names and entries till
  const [state, setState] = useState({ x: [], et: [], a: [], tc: [] });
  const [loading, setLoading] = useState(true);
  const Rollno = navigation.getParam("rollno", "1");
  let clas = navigation.getParam("branch", "0");
  let sem = navigation.getParam("sem", "1");

  let url = sem;
  if (clas === 0) url = "C" + url + "A";
  else if (clas === 1) url = "C" + url + "B";
  else if (clas === 2) url = "EE" + url;
  else if (clas === 3) url = "E" + url + "A";
  else if (clas === 4) url = "E" + url + "B";
  else url = "B" + url;

  let data = [];
  data = useAxios(`http://attendance.mec.ac.in/view4stud.php?class=${url}`);
  if (data.length !== 0 && loading === true) {
    let A = AttendanceParser(data, Rollno);
    setState({ x: A.x, et: A.et, a: A.a, tc: A.tc });
    setLoading(false);
  }

  return loading ? (
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
