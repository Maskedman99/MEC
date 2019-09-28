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
    root: {}
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

  render() {
    var rows = this.state.loading
      ? []
      : this.state.root.querySelectorAll(".annuncement");
    if (!this.state.loading) {
      var str = "";
      str = JSON.stringify(rows[0].rawText);
      str = str.replace(/\\t/g, "");
      str = str.replace(/"/g, "");
      str = str.replace(/ {2}/g, ""); //means 2 spaces {2} is eslint requirement
      rows = str.split("\\n");

      for (var i = 0; i < rows.length; i++)
        if (rows[i].length < 2) {
          rows.splice(i, 1);
          i = -1; //Every time splice is used a new array is copied into the old one, if 0 used 1st null don't
        } // get deleted. If the statement not used then then index of the old array is used.
    }
    return this.state.loading ? (
      <View style={styles.activitycontainer}>
        <ActivityIndicator color="white" size="large" />
      </View>
    ) : (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          {rows.map((item, keys) =>
            keys % 2 ? (
              <Text style={styles.announcements}>
                {"\n"}
                {rows[keys]}
              </Text>
            ) : (
              <Text style={styles.date}>{rows[keys - 2]}</Text>
            )
          )}
          <Text style={styles.date}>{rows[rows.length - 2]}</Text>

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
    alignSelf: "center"
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
    marginHorizontal: 3,
    marginTop: -15
  }
});

export default KTUAnnouncements;
