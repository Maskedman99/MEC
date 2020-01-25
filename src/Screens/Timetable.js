import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import TimetableList from "../Components/TimetableList";

export class Timetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      branch: this.props.navigation.getParam("branch", "0"),
      sem: this.props.navigation.getParam("sem", "1")
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TimetableList branch={this.state.branch} sem={this.state.sem} />
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
  }
});

export default Timetable;
