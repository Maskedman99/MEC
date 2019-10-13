import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TXT from "../Assets/Syllabus/CS.json";

export class Syllabus extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{TXT.S5.GT.M1}</Text>
        <Text style={styles.text}>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 15,
    marginTop: 10,
    color: "#8bc34a",
    fontWeight: "bold",
    fontSize: 17
  },

  container: {
    backgroundColor: "#000000",
    flex: 1,
    borderTopWidth: 1,
    borderColor: "white"
  }
});

export default Syllabus;
