import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView } from "react-native";
import axios from "axios";
var HTMLParser = require("fast-html-parser");

import TimetableElement from "./TimetableElement";
import Spinner from "./Spinner";

const TimetableList = ({ sem = sem, branch = branch }) => {
  const [state, setState] = useState({
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: []
  });
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    let clas = branch;
    let s = sem;

    let url2 = s;
    if (clas === 0) url2 = "C" + url2 + "A";
    else if (clas === 1) url2 = "C" + url2 + "B";
    else if (clas === 2) url2 = "EE" + url2;
    else if (clas === 3) url2 = "E" + url2 + "A";
    else if (clas === 4) url2 = "E" + url2 + "B";
    else url2 = "B" + url2;

    const url =
      "http://attendance.mec.ac.in/view4stud.php?class=" +
      url2 +
      "&submit=view";

    axios
      .get(url)
      .then(function(response) {
        let root = HTMLParser.parse(response.data);
        let rows = root.querySelectorAll(".attn");

        rows = rows.map(item => JSON.stringify(item.rawText));
        rows = rows[0].split("Time Table");
        rows.shift();

        let x = JSON.stringify(rows[0].replace(/\s\s+/g, ""));
        x = x.replace(/\\\\n/g, "");
        rows = x.split("\\\\t");
        rows.shift();
        rows.pop();
        rows = rows.filter(function(e) {
          return (
            e !== " " &&
            e !== " MON" &&
            e !== " TUE" &&
            e !== " WED" &&
            e !== " THU" &&
            e !== " FRI"
          );
        });
        rows = rows.filter((value, index) => index % 2);
        rows = rows.filter((value, index) => !(index % 2));
        rows.pop();
        let mon = [];
        let tue = [];
        let wed = [];
        let thu = [];
        let fri = [];
        for (let i = 0; i < 6; i++) fri.unshift(rows.pop());
        for (let i = 0; i < 6; i++) thu.unshift(rows.pop());
        for (let i = 0; i < 6; i++) wed.unshift(rows.pop());
        for (let i = 0; i < 6; i++) tue.unshift(rows.pop());
        for (let i = 0; i < 6; i++) mon.unshift(rows.pop());
        setState({ fri: fri, thu: thu, wed: wed, tue: tue, mon: mon });
        setisloading(false);
      })
      .catch(e => console.log(e));
  }, [branch, sem]);

  return isloading ? (
    <Spinner />
  ) : (
    <ScrollView style={styles.container}>
      <TimetableElement head="MONDAY" data={state.mon} />
      <TimetableElement head="TUESDAY" data={state.tue} />
      <TimetableElement head="WEDNESDAY" data={state.wed} />
      <TimetableElement head="THURSDAY" data={state.thu} />
      <TimetableElement head="FRIDAY" data={state.fri} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default TimetableList;
