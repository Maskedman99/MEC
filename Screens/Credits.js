import React, { Component } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export class Credits extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>maskedman</Text>
        <Text style={styles.specialthankstext}>Special thanks to: </Text>
        <Text style={styles.text}>r/heo5981</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    color: "#8bc34a",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center"
  },

  container: {
    backgroundColor: "#000000",
    flex: 1,
    borderTopWidth: 1,
    borderColor: "white"
    //  alignItems: "center"
  },

  specialthankstext: {
    color: "white",
    marginTop: 30,
    marginBottom: -15,
    fontSize: 15,
    textAlign: "center"
  }
});

export default Credits;
