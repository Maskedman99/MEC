import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput
} from "react-native";

export class Attendance1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["CSA", "CSB", "EEE", "ECA", "ECB", "EB"],
      checked: 0,
      sem: 1,
      rollno: 0
    };
    this.getMyValue();
  }

  getMyValue = async () => {
    try {
      this.setState({
        checked: JSON.parse(await AsyncStorage.getItem("@branch"))
      });
      this.setState({ sem: JSON.parse(await AsyncStorage.getItem("@sem")) });
      this.setState({
        rollno: JSON.parse(await AsyncStorage.getItem("@rollno"))
      });
    } catch (e) {
      console.log(e);
    }
  };

  setValue = async () => {
    try {
      await AsyncStorage.setItem("@branch", JSON.stringify(this.state.checked));
      await AsyncStorage.setItem("@sem", JSON.stringify(this.state.sem));
      await AsyncStorage.setItem("@rollno", JSON.stringify(this.state.rollno));
    } catch (e) {
      console.log(e);
    }
    this.props.navigation.navigate("AttendanceScreen", {
      branch: this.state.checked,
      sem: this.state.sem,
      rollno: this.state.rollno
    });
  };

  render() {
    //  this.getMyValue;
    return (
      <View style={styles.container}>
        <View style={styles.livetextcontainer}>
          <Text style={styles.livetext}>
            {this.state.data[this.state.checked]}
          </Text>
          <Text style={styles.livetext}>{this.state.sem}</Text>
          <Text style={styles.livetext}>{this.state.rollno}</Text>
        </View>

        {// eslint-disable-next-line eqeqeq
        this.state.rollno == 0 ? ( //above comment disables eslint warning to strict compare
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
            <TouchableHighlight
              style={styles.classbutton}
              onPress={() => {
                this.setState({ checked: 0 });
              }}
            >
              <Text style={styles.buttontext}>CSA</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.classbutton}
              onPress={() => {
                this.setState({ checked: 1 });
              }}
            >
              <Text style={styles.buttontext}>CSB</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.classbutton}
              onPress={() => {
                this.setState({ checked: 2 });
              }}
            >
              <Text style={styles.buttontext}>EEE</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.classinner}>
            <TouchableHighlight
              style={styles.classbutton}
              onPress={() => {
                this.setState({ checked: 3 });
              }}
            >
              <Text style={styles.buttontext}>ECA</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.classbutton}
              onPress={() => {
                this.setState({ checked: 4 });
              }}
            >
              <Text style={styles.buttontext}>ECB</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.classbutton}
              onPress={() => {
                this.setState({ checked: 5 });
              }}
            >
              <Text style={styles.buttontext}>EB</Text>
            </TouchableHighlight>
          </View>
        </View>

        <Text style={styles.headtext}>Semester</Text>
        <View style={styles.class}>
          <View style={styles.classinner}>
            <TouchableHighlight
              style={styles.classbutton}
              onPress={() => {
                this.setState({ sem: 1 });
              }}
            >
              <Text style={styles.buttontext}>1</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.classbutton}
              onPress={() => {
                this.setState({ sem: 2 });
              }}
            >
              <Text style={styles.buttontext}>2</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.classbutton}
              onPress={() => {
                this.setState({ sem: 3 });
              }}
            >
              <Text style={styles.buttontext}>3</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.classbutton}
              onPress={() => {
                this.setState({ sem: 4 });
              }}
            >
              <Text style={styles.buttontext}>4</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.classinner}>
            <TouchableHighlight
              style={styles.classbutton}
              onPress={() => {
                this.setState({ sem: 5 });
              }}
            >
              <Text style={styles.buttontext}>5</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.classbutton}
              onPress={() => {
                this.setState({ sem: 6 });
              }}
            >
              <Text style={styles.buttontext}>6</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.classbutton}
              onPress={() => {
                this.setState({ sem: 7 });
              }}
            >
              <Text style={styles.buttontext}>7</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.classbutton}
              onPress={() => {
                this.setState({ sem: 8 });
              }}
            >
              <Text style={styles.buttontext}>8</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.classinner}>
          <Text style={styles.textnorm}>{"\n\t"}Roll no: </Text>
          <TextInput
            style={styles.textinput}
            placeholder="Enter Roll no. here "
            placeholderTextColor="#9e9e9e"
            keyboardType="numeric"
            returnKeyType={"go"}
            selectionColor="white"
            enablesReturnKeyAutomatically={true}
            keyboardAppearance={"dark"}
            onChangeText={rollno => this.setState({ rollno })}
          />
        </View>
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

  classbutton: {
    borderWidth: 1,
    borderColor: "#4caf50",
    borderRadius: 3,
    flex: 1
  },

  buttontext: {
    margin: 15,
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold"
  },

  textnorm: {
    color: "white",
    fontSize: 16,
    marginTop: 5
  },

  division: {
    flexDirection: "row",
    marginLeft: -65,
    marginTop: 5
  },

  textinput: {
    borderBottomColor: "#4caf50",
    borderBottomWidth: 1,
    marginHorizontal: 30,
    flex: 1
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

export default Attendance1;
