import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

function ClassButton(props) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.classbutton}
        onPress={() => props.action(props.value)}
      >
        <Text style={styles.buttontext}>{props.title}</Text>
      </TouchableHighlight>
    </View>
  );
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
