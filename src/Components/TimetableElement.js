import React from "react";
import { View, Text, StyleSheet } from "react-native";

class TimetableElement extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.head}>{this.props.head}</Text>
        {this.props.data.map((item, key) => (
          <View>
            <Text style={styles.sytext}>{item}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    textAlign: "center",
    color: "#8bc34a",
    fontWeight: "bold",
    fontSize: 17,
    borderTopWidth: 3,
    borderTopColor: "#8bc34a",
    textAlignVertical: "bottom"
  },
  sytext: {
    color: "white",
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center"
  }
});

export default TimetableElement;
