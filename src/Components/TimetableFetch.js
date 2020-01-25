import React from "react";
import { View, Text } from "react-native";
import axios from "axios";
var HTMLParser = require("fast-html-parser");

class TimetableFetch extends React.Component {
  componentDidMount() {
    const url =
      "http://attendance.mec.ac.in/view4stud.php?class=C6B&submit=view";
    axios
      .get(url)
      .then(function(response) {
        let root = HTMLParser.parse(response.data);
        let rows = root.querySelectorAll(".attn");
        for (let i = 0; i < rows.length; i++)
          rows[i] = JSON.stringify(rows[i].rawText);
        rows = rows[0].split("Time Table");
        rows.shift();
        let x = JSON.stringify(rows[0].replace(/\s\s+/g, ""));
        x = x.replace(/\\\\n/g, "");
        rows = x.split("\\\\t");
        rows = rows.filter(function(e) {
          return (
            e !== "" &&
            e !== " " &&
            e !== " MON" &&
            e !== " TUE" &&
            e !== " WED" &&
            e !== " THU" &&
            e !== " FRI"
          );
        });
        rows.pop();
        rows.pop();
        rows.pop();
        rows.shift();
        console.log(rows);
      })
      .catch(e => console.log(e));
  }
  render() {
    return (
      <View>
        <Text>hello</Text>
      </View>
    );
  }
}

export default TimetableFetch;
