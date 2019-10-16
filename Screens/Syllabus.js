import React, { Component } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import TXT from "../Assets/Syllabus/CS.json";

import SyllabusList from "../Components/SyllabusList";

export class Syllabus extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <SyllabusList data={TXT.S5.SS} title="SYSTEM SOFTWARE" />
        <SyllabusList data={TXT.S5.GT} title="GRAPH THEORY" />
        <SyllabusList data={TXT.S5.DC} title="DATA COMMUNICATION" />
        <SyllabusList data={TXT.S5.TOC} title="THEORY OF COMPUTATION" />
        <SyllabusList data={TXT.S5.SC} title="SOFT COMPUTING" />
        <SyllabusList
          data={TXT.S5.MM}
          title="MICROPROCESSORS AND MICROCONTROLLERS"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    borderTopWidth: 1,
    borderColor: "white"
  }
});

export default Syllabus;
