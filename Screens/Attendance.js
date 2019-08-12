/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
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

export class Attendance extends Component {
  state = {
    loading: true,
    root: {},
    Rollno: null,
    data: null
  };

  componentDidMount() {
    const { navigation } = this.props;
    const branch = navigation.getParam("branch", "0");
    const sem = navigation.getParam("sem", "1");
    const div = navigation.getParam("div", "A");
    var rollno = navigation.getParam("rollno", "1");
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ Rollno: rollno });

    var url2 = sem;
    if (branch === 0) url2 = "C" + url2 + div;
    else if (branch === 1) url2 = "E" + url2 + div;
    else if (branch === 2) url2 = "EE" + url2;
    else url2 = "B" + url2;

    const url =
      "http://attendance.mec.ac.in/view4stud.php?class=" +
      url2 +
      "&submit=view";

    axios
      .get(url)
      .then(data =>
        this.setState({
          root: HTMLParser.parse(data.data),
          loading: false
        })
      )
      .catch(err => Alert.alert(err.message));
  }

  render() {
    var rows = this.state.loading ? [] : this.state.root.querySelectorAll("td");
    var ttnos = this.state.loading
      ? []
      : this.state.root.querySelectorAll("table");

    for (var i = 0; i < rows.length; i++)
      rows[i] = JSON.stringify(rows[i].rawText).replace(/["\\]/g, "");

    var ns = 0;
    if (this.state.loading === false) {
      ns = ttnos[0].childNodes[1].childNodes.length - 7; //Total no.of subjects
      ns = (ns + 2) / 2;
    }

    var x1 = "";
    for (i = 0; i < ns * 2; i++)
      x1 = x1 + "+" + rows[this.state.Rollno * ns * 2 + i];

    //x1 = x1.replace(/[rnt]/g,'') // Can't do, letters r,n,t in name gets replaced

    x1 = x1.replace("rn", "");
    x1 = x1.split("rnt").join("");
    x1 = x1.split("t ").join("");
    const x2 = x1.split("+");

    var t1 = "";
    for (i = rows.length - 41 - (ns * 2 - 2) * 2; i < rows.length - 41; i++)
      t1 = t1 + "+" + rows[i];
    const t2 = t1.split("+rn");

    var a1 = "";
    var et = "";
    for (i = 0; i < t2.length; i++) {
      if (i % 2 !== 0) a1 = a1 + "+" + t2[i];
      else et = et + "+" + t2[i];
    }

    const a2 = a1.split("+");
    const et2 = et.split("+");
    a2.shift();

    return this.state.loading ? (
      <View style={styles.container}>
        <ActivityIndicator color="white" size="large" />
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.headcontainer}>
          <Text style={styles.textnorm}>Name: </Text>
          <Text style={styles.textbig}>{x2[2]}</Text>
        </View>

        <View style={styles.headcontainer}>
          <Text style={styles.textnorm}>Roll no: </Text>
          <Text style={styles.textbig}>{x2[1]}</Text>
        </View>

        <ScrollView style={styles.scroll}>
          <View style={styles.rowcontainer}>
            {a2.map((item, key) => (
              <Text
                key={key}
                style={[
                  styles.rows,
                  x2[key + 3] > 75
                    ? { borderColor: "#8bc34a" }
                    : { borderColor: "#ef5350" }
                ]}
              >
                {item}
                {"\n"}
                Percentage:{" "}
                <Text
                  style={
                    x2[key + 3] > 75
                      ? { color: "#8bc34a" }
                      : { color: "#ef5350" }
                  }
                >
                  {x2[key + 3]}
                  {"\t\t\t\t\t\t\t\t"}
                </Text>
                Entries till: {et2[key + 2]}
              </Text>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
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

  rows: {
    color: "white",
    marginBottom: 15,
    borderBottomWidth: 1,
    //  alignSelf:'center',
    fontSize: 14.7
  },

  rowcontainer: {
    marginLeft: 5,
    marginTop: 15,
    marginRight: 5
  }
});

export default Attendance;

//rows[rows.length -42] is the last entry
