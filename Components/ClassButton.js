import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

class ClassButton extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.classbutton}
          onPress={() => this.props.action(this.props.value)}
        >
          <Text style={styles.buttontext}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  classbutton: {
    borderWidth: 1,
    borderColor: "#4caf50",
    borderRadius: 3
  },

  buttontext: {
    margin: 15,
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold"
  }
});

export default ClassButton;
