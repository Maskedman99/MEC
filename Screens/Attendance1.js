import React, { Component } from "react";
import {
  View,
  Text,
  Picker,
  TouchableHighlight,
  Image,
  StyleSheet,
  TextInput
} from "react-native";

export class Attendance1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        "Computer Science and Engineering",
        "Electronics and Communication Engineering",
        "Electrical Engineering",
        "Biomedical Engineering"
      ],
      checked: 0,
      sem: 1,
      div: "A",
      rollno: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.textnorm, styles.branchtext]}>Branch:</Text>
        {this.state.data.map((data, key) => {
          return (
            <View>
              {this.state.checked === key ? (
                <View style={styles.btn}>
                  <Image
                    style={styles.img}
                    source={require("../Assets/Checked.png")}
                  />
                  <Text style={styles.checkedtext}>{data}</Text>
                </View>
              ) : (
                <TouchableHighlight
                  onPress={() => {
                    this.setState({ checked: key });
                  }}
                >
                  <View style={styles.btn}>
                    <Image
                      style={styles.img}
                      source={require("../Assets/Unchecked.png")}
                    />
                    <Text style={styles.uncheckedtext}>{data}</Text>
                  </View>
                </TouchableHighlight>
              )}
            </View>
          );
        })}
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.textnorm}>Semester: </Text>
            <Picker
              selectedValue={this.state.sem}
              style={styles.pickr}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ sem: itemValue })
              }
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
            </Picker>
          </View>

          {this.state.checked === 0 || this.state.checked === 1 ? (
            <View style={styles.division}>
              <Text style={styles.textnorm}>Division: </Text>
              <Picker
                selectedValue={this.state.div}
                style={styles.pickr}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ div: itemValue })
                }
                mode="dropdown"
              >
                <Picker.Item label="A" value="A" />
                <Picker.Item label="B" value="B" />
              </Picker>
            </View>
          ) : (
            <Text>{"\n"}</Text>
          )}
        </View>
        <View style={styles.row}>
          <Text style={styles.textnorm}>{"\t"}Roll no: </Text>
          <TextInput
            style={[styles.pickr, styles.textinp]}
            placeholder="Enter  Roll no.  here "
            placeholderTextColor="#9e9e9e"
            keyboardType="numeric"
            returnKeyType={"go"}
            selectionColor="white"
            enablesReturnKeyAutomatically={true}
            keyboardAppearance={"dark"}
            onChangeText={rollno => this.setState({ rollno })}
          />
        </View>

        {// eslint-disable-next-line eqeqeq
        this.state.rollno == 0 ? ( //above comment disables eslint warning to strict compare
          <View style={styles.warningcontainer}>
            <Text style={styles.warningtext}> Enter a Roll number </Text>
          </View>
        ) : (
          <TouchableHighlight
            style={styles.submitcontainer}
            onPress={() =>
              this.props.navigation.navigate("AttendanceScreen", {
                branch: this.state.checked,
                sem: this.state.sem,
                div: this.state.div,
                rollno: this.state.rollno
              })
            }
          >
            <Text style={styles.submittext}>SUBMIT</Text>
          </TouchableHighlight>
        )}
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

  img: {
    height: 20,
    width: 20,
    marginRight: 20
  },

  branchtext: {
    margin: 10,
    marginTop: 15
  },

  btn: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginBottom: 10
  },

  checkedtext: {
    color: "#4caf50",
    fontSize: 16,
    marginBottom: 5
  },

  uncheckedtext: {
    color: "white",
    fontSize: 15
    //    marginBottom: 5
  },

  textnorm: {
    color: "white",
    fontSize: 16,
    marginTop: 5
  },

  row: {
    flexDirection: "row",
    margin: 5
  },

  division: {
    flexDirection: "row",
    marginLeft: -65,
    marginTop: 5
  },
  pickr: {
    height: 20,
    width: 125,
    color: "#4caf50",
    //alignSelf: 'center',
    marginHorizontal: 40,
    transform: [{ scale: 1.5 }]
  },

  textinp: {
    height: 40,
    paddingTop: 2
  },

  warningcontainer: {
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center"
  },

  warningtext: {
    color: "red",
    textDecorationLine: "underline"
  },

  submitcontainer: {
    alignItems: "center",
    borderColor: "green",
    borderWidth: 1,
    marginTop: -5
  },

  submittext: { color: "#8bc34a", fontWeight: "bold", fontSize: 25 }
});

export default Attendance1;
