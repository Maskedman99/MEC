import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  ActivityIndicator,
  Linking,
  StyleSheet,
  Alert
} from "react-native";
import axios from "axios";

var HTMLParser = require("fast-html-parser");

export class KTUAnnouncements extends Component {
  state = {
    loading: true,
    root: {},
    rows: []
  };

  componentDidMount() {
    axios
      .get("https://ktu.edu.in/home.htm")
      .then(data =>
        this.setState({
          root: HTMLParser.parse(data.data),
          loading: false
        })
      )
      .catch(err => Alert.alert(err.message));
  }

  componentDidUpdate() {
    if (!this.state.loading && !this.state.rows.length) {
      var x = this.state.root.querySelectorAll(".annuncement");
      console.log(x);
      var str = "";
      str = JSON.stringify(x[0].rawText);
      str = str.replace(/\\t/g, "");
      str = str.replace(/"/g, "");
      str = str.replace(/ {2}/g, ""); //means 2 spaces {2} is eslint requirement
      x = str.split("\\n");
      for (var i = 0; i < x.length; i++)
        if (x[i].length < 2) {
          x.splice(i, 1);
          i = -1; //Every time splice is used a new array is copied into the old one, if 0 used 1st null don't
        } // get deleted. If the statement not used then then index of the old array is used.

      this.setState({ rows: x });
    }
  }

  render() {
    return this.state.loading ? (
      <View style={styles.activitycontainer}>
        <ActivityIndicator color="white" size="large" />
      </View>
    ) : (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          {this.state.rows.map((item, keys) =>
            keys % 2 ? (
              <View />
            ) : (
              <View>
                <Text style={styles.announcements}>
                  {"\n"}
                  {this.state.rows[keys + 1]}
                </Text>
                <Text style={styles.date}>{this.state.rows[keys]}</Text>
              </View>
            )
          )}

          <TouchableHighlight
            activeOpacity={0.5}
            onPress={() => {
              Linking.openURL("https://ktu.edu.in/eu/core/announcements.htm");
            }}
          >
            <Text style={styles.viewmore}>
              {"\n"}https://ktu.edu.in/eu/core/announcements.htm{"\n"}
            </Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewmore: {
    color: "#00cdcd",
    fontSize: 16,
    fontStyle: "italic",
    textDecorationLine: "underline",
    textAlign: "center"
  },
  container: {
    backgroundColor: "#000000",
    flex: 1,
    borderTopWidth: 1,
    borderColor: "white"
  },
  announcements: {
    color: "white",
    fontSize: 15,
    fontFamily: "sans-serif"
  },
  date: {
    borderBottomWidth: 1,
    borderBottomColor: "#8bc34a",
    color: "white",
    textAlign: "right"
  },
  activitycontainer: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center"
  },
  scroll: {
    color: "white",
    marginHorizontal: 3
  }
});

export default KTUAnnouncements;
