import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import TXT from "../Assets/TimeTable/TTCS.json";

import TimeTableFetch from "../Components/TimetableFetch";
import TimetableList from "../Components/TimetableList";

export class Timetable extends Component {
  state = {
    branch: 0,
    sem: 0
  };

  componentDidMount() {
    const { navigation } = this.props;
    const branch = navigation.getParam("branch", "0");
    const sem = navigation.getParam("sem", "1");

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ branch: branch, sem: sem });
  }

  render() {
    return this.state.branch === 1 && this.state.sem === 5 ? (
      <View style={styles.container}>
        <TimetableList data={TXT.S5} />
      </View>
    ) : (
      <View style={styles.container}>
        <TimeTableFetch />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    justifyContent: "center",
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "white"
  },
  textnorm: {
    color: "white",
    fontSize: 19,
    textAlign: "center"
  }
});

export default Timetable;
