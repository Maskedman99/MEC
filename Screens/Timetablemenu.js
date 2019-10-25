import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableHighlight
} from "react-native";

import ClassButton from "../Components/ClassButton";

export class TimetableMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["CSA", "CSB", "EEE", "ECA", "ECB", "EB"],
      ind: 0,
      sem: 1
    };
  }

  // Function is necessary for the child component to change the state value of parent (Refer Components/ClassButton)
  branchhandler = value => {
    this.setState({
      ind: value
    });
  };

  semhandler = value => {
    this.setState({
      sem: value
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.livetextcontainer}>
          <Text style={styles.livetext}>{this.state.data[this.state.ind]}</Text>
          <Text style={styles.livetext}>{this.state.sem}</Text>
        </View>

        <TouchableHighlight
          style={styles.submitcontainer}
          onPress={() => this.props.navigation.navigate("TimetableScreen")}
        >
          <Text style={styles.submittext}>SUBMIT</Text>
        </TouchableHighlight>

        <Text style={styles.headtext}>Class</Text>

        <View style={styles.classinner}>
          <ClassButton title="CSA" value={0} action={this.branchhandler} />
          <ClassButton title="CSB" value={1} action={this.branchhandler} />
          <ClassButton title="EEE" value={2} action={this.branchhandler} />
        </View>
        <View style={styles.classinner}>
          <ClassButton title="ECA" value={3} action={this.branchhandler} />
          <ClassButton title="ECB" value={4} action={this.branchhandler} />
          <ClassButton title="EB" value={5} action={this.branchhandler} />
        </View>

        <Text style={styles.headtext}>Semester</Text>
        <View style={styles.classinner}>
          <ClassButton title="1" value={1} action={this.semhandler} />
          <ClassButton title="2" value={2} action={this.semhandler} />
          <ClassButton title="3" value={3} action={this.semhandler} />
          <ClassButton title="4" value={4} action={this.semhandler} />
        </View>
        <View style={styles.classinner}>
          <ClassButton title="5" value={5} action={this.semhandler} />
          <ClassButton title="6" value={6} action={this.semhandler} />
          <ClassButton title="7" value={7} action={this.semhandler} />
          <ClassButton title="8" value={8} action={this.semhandler} />
        </View>

        {/* This text is not displayed and is only used to show space under the menu after scrolling in small size mobile*/}
        <Text>maskedman_</Text>
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
  },
  headtext: {
    margin: 5,
    marginTop: 25,
    color: "white",
    fontSize: 15,
    textAlign: "center"
  },

  classinner: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 5
  },
  livetextcontainer: {
    marginTop: 30,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },

  livetext: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#4caf50"
  },

  submitcontainer: {
    alignItems: "center",
    borderColor: "green",
    borderWidth: 3,
    marginTop: 15,
    borderRadius: 2,
    margin: 10
  },

  submittext: {
    color: "#8bc34a",
    fontWeight: "bold",
    fontSize: 25,
    margin: 5
  }
});

export default TimetableMenu;
