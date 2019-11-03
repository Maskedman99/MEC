import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class Evaluation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textnorm}>Comming Soon!</Text>
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

export default Evaluation;
