import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import axios from "axios";
var HTMLParser = require("fast-html-parser");

class TimetableList extends Component {
  state = {
    isloading: true,
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: []
  };

  componentDidMount() {
    const clas = this.props.branch;
    const sem = this.props.sem;

    var url2 = sem;
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

    // eslint-disable-next-line consistent-this
    const self = this;
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
        self.setState({ fri: fri, thu: thu, wed: wed, tue: tue, mon: mon });
      })
      .catch(e => console.log(e));
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.head}>MONDAY</Text>
        {this.state.mon.map((item, key) => (
          <View>
            <Text style={styles.sytext}>{item}</Text>
          </View>
        ))}
        <Text style={styles.head}>TUESDAY</Text>
        {this.state.tue.map((item, key) => (
          <View>
            <Text style={styles.sytext}>{item}</Text>
          </View>
        ))}
        <Text style={styles.head}>WEDNESDAY</Text>
        {this.state.wed.map((item, key) => (
          <View>
            <Text style={styles.sytext}>{item}</Text>
          </View>
        ))}
        <Text style={styles.head}>THURSDAY</Text>
        {this.state.thu.map((item, key) => (
          <View>
            <Text style={styles.sytext}>{item}</Text>
          </View>
        ))}
        <Text style={styles.head}>FRIDAY</Text>
        {this.state.fri.map((item, key) => (
          <View>
            <Text style={styles.sytext}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    textAlign: "center",
    color: "#8bc34a",
    fontWeight: "bold",
    fontSize: 17,
    borderTopWidth: 3,
    borderTopColor: "#8bc34a",
    textAlignVertical: "bottom"
  },
  container: {
    flex: 1
  },
  sytext: {
    color: "white",
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center"
  }
});
export default TimetableList;
