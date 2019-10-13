import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

export class SyllabusMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["CS", "EEE", "EC", "EB"],
      checked: 0,
      sem: 1
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.livetextcontainer}>
          <Text style={styles.livetext}>
            {this.state.data[this.state.checked]}
          </Text>
          <Text style={styles.livetext}>{this.state.sem}</Text>
        </View>

        <TouchableHighlight
          style={styles.submitcontainer}
          onPress={() => this.props.navigation.navigate("SyllabusScreen")}
        >
          <Text style={styles.submittext}>SUBMIT</Text>
        </TouchableHighlight>

        <Text style={styles.headtext}>Class</Text>
        <View style={styles.class}>
          <View style={styles.classinner}>
            <TouchableHighlight
              style={styles.classbutton}
              onPress={() => {
                this.setState({ checked: 0 });
              }}
            >
              <Text style={styles.buttontext}>CS</Text>
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
              <Text style={styles.buttontext}>EC</Text>
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
  headtext: {
    margin: 5,
    marginTop: 25,
    color: "white",
    fontSize: 15,
    textAlign: "center"
  },
  buttontext: {
    margin: 15,
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold"
  },

  classbutton: {
    borderWidth: 1,
    borderColor: "#4caf50",
    borderRadius: 3,
    flex: 1
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

export default SyllabusMenu;
