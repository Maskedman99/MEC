import React, { useEffect, useState } from "react";
import {
  ScrollView,
  ActivityIndicator,
  Text,
  View,
  Alert,
  StyleSheet
} from "react-native";
import axios from "axios";
var HTMLParser = require("fast-html-parser");

import AttendanceDisplay from "../Components/AttendanceDisplay";

function Attendance(props) {
  // x => Name, roll.no and percentages, et => Subject names and entries till
  const [state, setState] = useState({
    loading: true,
    Rollno: props.navigation.getParam("rollno", "1"),
    x: [],
    et: [],
    a: [],
    tc: []
  });

  useEffect(() => {
    let clas = props.navigation.getParam("branch", "0");
    let sem = props.navigation.getParam("sem", "1");

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
      .then(function(data) {
        let root = HTMLParser.parse(data.data);
        let rows = root.querySelectorAll("td");
        let ttnos = root.querySelectorAll("table");

        for (let i = 0; i < rows.length; i++)
          rows[i] = JSON.stringify(rows[i].rawText).replace(/["\\]/g, "");

        let ns = ttnos[0].childNodes[1].childNodes.length - 7; //Total no.of subjects
        ns = (ns + 2) / 2;

        let x1 = "";
        let totalClasses = "";
        for (let i = 0; i < ns * 2; i++) {
          x1 = x1 + "+" + rows[state.Rollno * ns * 2 + i];
          totalClasses = totalClasses + rows[i];
        }

        //x1 = x1.replace(/[rnt]/g,'') // Can't do, letters r,n,t in name gets replaced
        x1 = x1.replace("rn", "");
        x1 = x1.split("rnt").join("");
        x1 = x1.split("t ").join("");
        x1 = x1.split("n ").join("");
        x1 = x1.split("nt").join("");
        x1 = x1.split("+");

        let t1 = "";
        //rows[rows.length -42] is the last entry
        for (
          let i = rows.length - 41 - (ns * 2 - 2) * 2;
          i < rows.length - 41;
          i++
        )
          t1 = t1 + "+" + rows[i];
        const t2 = t1.split("+n");

        let a1 = "";
        let et1 = "";
        for (let i = 0; i < t2.length; i++) {
          if (i % 2 !== 0) a1 = a1 + "+" + t2[i];
          else et1 = et1 + "+" + t2[i];
        }

        a1 = a1.split("+");
        et1 = et1.split("+");
        a1.shift();

        var regExp = /\(([^)]+)\)/g;
        var totalClasses1 = totalClasses.match(regExp);
        for (let i = 0; i < totalClasses1.length; i++)
          totalClasses1[i] = totalClasses1[i].replace(/[()]/g, "");

        setState({ x: x1, et: et1, a: a1, tc: totalClasses1, loading: false });
      })
      .catch(err => Alert.alert(err.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state.loading ? (
    <View style={styles.container}>
      <ActivityIndicator color="white" size="large" />
    </View>
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
}

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
    color: "white",
    marginTop: 10,
    borderTopColor: "#8bc34a",
    borderTopWidth: 2
  },
  rowcontainer: {
    marginLeft: 5,
    marginTop: 15,
    marginRight: 5
  }
});

export default Attendance;
