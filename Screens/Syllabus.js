import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import TXT from "../Assets/Syllabus/CS.json";

import SyllabusList from "../Components/SyllabusList";

export class Syllabus extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.head}>SYSTEM SOFTWARE</Text>
        <SyllabusList data={TXT.S5.SS} />
        <Text style={styles.head}>GRAPH THEORY</Text>
        <SyllabusList data={TXT.S5.GT} />
        <Text style={styles.head}>DATA COMMUNICATION</Text>
        <SyllabusList data={TXT.S5.DC} />
        <Text style={styles.head}>MICROPROCESSORS AND MICROCONTROLLERS</Text>
        <SyllabusList data={TXT.S5.MM} />
        <Text style={styles.head}>THEORY OF COMPUTATION</Text>
        <SyllabusList data={TXT.S5.TOC} />
        <Text style={styles.head}>SOFT COMPUTING</Text>
        <SyllabusList data={TXT.S5.SC} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    textAlign: "center",
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
