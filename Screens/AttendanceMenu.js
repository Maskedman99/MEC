import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput
} from "react-native";

import ClassButton from "../Components/ClassButton";

export class AttendanceMenu extends Component {
  constructor(props) {
    super(props);
    this.branchhandler = this.branchhandler.bind(this);
    this.semhandler = this.semhandler.bind(this);
    this.state = {
      data: ["CSA", "CSB", "EEE", "ECA", "ECB", "EB"],
      ind: 0,
      sem: 1,
      roll: 1
    };
    this.getMyValue();
  }

  // Function is necessary for the child component to change the state value of parent (Refer Components/ClassButton)
  branchhandler = value => {
    console.log();
    this.setState({
      ind: value
    });
  };

  semhandler = value => {
    console.log();
    this.setState({
      sem: value
    });
  };

  // Function to get the class and roll.no stored locally using the async-storage package
  getMyValue = async () => {
    try {
      this.setState({ ind: JSON.parse(await AsyncStorage.getItem("@branch")) });
      this.setState({ sem: JSON.parse(await AsyncStorage.getItem("@sem")) });
      this.setState({ roll: JSON.parse(await AsyncStorage.getItem("@roll")) });
    } catch (e) {
      //  console.log(e);
    }
  };
  //Function to store the submitted values locally so user doesn't have to re-enter (async-storage)
  setValue = async () => {
    try {
      await AsyncStorage.setItem("@branch", JSON.stringify(this.state.ind));
      await AsyncStorage.setItem("@sem", JSON.stringify(this.state.sem));
      await AsyncStorage.setItem("@roll", JSON.stringify(this.state.roll));
    } catch (e) {
      //  console.log(e);
    }
    this.props.navigation.navigate("AttendanceScreen", {
      branch: this.state.ind,
      sem: this.state.sem,
      rollno: this.state.roll
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.livetextcontainer}>
          <Text style={styles.livetext}>{this.state.data[this.state.ind]}</Text>
          <Text style={styles.livetext}>{this.state.sem}</Text>
          <Text style={styles.livetext}>{this.state.roll}</Text>
        </View>
        {// eslint-disable-next-line eqeqeq
        this.state.roll == 0 ? ( //above comment disables eslint warning to strict compare
          <View style={styles.warningcontainer}>
            <Text style={styles.warningtext}> Enter a Roll number </Text>
          </View>
        ) : (
          <TouchableHighlight
            style={styles.submitcontainer}
            onPress={this.setValue}
          >
            <Text style={styles.submittext}>SUBMIT</Text>
          </TouchableHighlight>
        )}

        <Text style={styles.headtext}>Class</Text>
        <View style={styles.class}>
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
        </View>
        <Text style={styles.headtext}>Semester</Text>
        <View style={styles.class}>
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
        </View>

        <View style={styles.rollview}>
          <Text style={styles.rolltext}>
            {"\t\t"}Roll no.{"\t\t"}
          </Text>
        </View>
        <TextInput
          style={styles.textinput}
          placeholder="Enter Roll no. here "
          placeholderTextColor="white"
          keyboardType="numeric"
          maxLength={2}
          returnKeyType={"go"}
          selectionColor="white"
          enablesReturnKeyAutomatically={true}
          onSubmitEditing={this.setValue}
          keyboardAppearance={"dark"}
          onChangeText={roll => this.setState({ roll })}
        />
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

  headtext: {
    margin: 5,
    marginTop: 25,
    color: "white",
    fontSize: 15,
    textAlign: "center"
  },

  class: {
    marginHorizontal: 3
  },

  classinner: {
    flexDirection: "row",
    justifyContent: "space-around"
  },

  rollview: {
    alignSelf: "center",
    borderRadius: 3
  },

  rolltext: {
    marginTop: 20,
    color: "white",
    fontSize: 15,
    textAlign: "center",
    borderRadius: 3,
    backgroundColor: "#4caf50"
  },

  textinput: {
    marginHorizontal: 3,
    textAlign: "center",
    paddingBottom: 5,
    backgroundColor: "#4caf50",
    marginBottom: 5,
    borderRadius: 3,
    marginTop: -2
  },

  warningcontainer: {
    alignItems: "center",
    borderColor: "red",
    borderWidth: 2,
    marginTop: 15,
    borderRadius: 3,
    margin: 10
  },

  warningtext: {
    color: "#ed1c22",
    fontSize: 25,
    fontWeight: "bold",
    margin: 5
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

export default AttendanceMenu;