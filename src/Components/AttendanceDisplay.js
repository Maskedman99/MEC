import React from "react";
import { Text, StyleSheet } from "react-native";

function AttendanceDisplay(props) {
  return (
    <Text
      style={[styles.rows, props.percentage >= 75 ? styles.bhigh : styles.blow]}
    >
      {props.subject}
      {"\n"}
      Percentage:{" "}
      <Text style={props.percentage >= 75 ? styles.high : styles.low}>
        {props.percentage}
        {"\t\t\t\t\t\t\t\t"}
      </Text>
      Entries till: {props.entriestill}
    </Text>
  );
}

const styles = StyleSheet.create({
  rows: {
    color: "white",
    marginBottom: 15,
    borderBottomWidth: 1,
    fontSize: 14.7
  },
  low: {
    color: "#ef5350"
  },
  high: {
    color: "#8bc34a"
  },
  bhigh: {
    borderColor: "#8bc34a"
  },
  blow: {
    borderColor: "#ef5350"
  }
});

export default AttendanceDisplay;
