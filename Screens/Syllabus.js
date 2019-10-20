import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import TXT from "../Assets/Syllabus/CS.json";

import SyllabusList from "../Components/SyllabusList";

export class Syllabus extends Component {
  state = {
    branch: 0,
    sem: 0
  };

  componentDidMount() {
    const { navigation } = this.props;
    const branch = navigation.getParam("branch", "0");
    const sem = navigation.getParam("sem", "1");

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ branch: branch });
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ sem: sem });
  }

  render() {
    return this.state.branch === 0 && this.state.sem === 5 ? (
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
    ) : (
      <View style={styles.container}>
        <Text style={styles.textnorm}>Comming Soon!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    borderTopWidth: 1,
    borderColor: "white"
  },
  textnorm: {
    color: "white",
    fontSize: 19,
    textAlign: "center"
  }
});

export default Syllabus;
