import React from "react";
import { View, Text, StyleSheet } from "react-native";

function AttendanceDisplay(props) {
  return (
    <View style={props.percentage >= 75 ? styles.bhigh : styles.blow}>
      <View>
        <Text style={styles.rows}>{props.subject}</Text>
      </View>
      <View>
        <Text style={styles.rows}>
          Percentage:{" "}
          <Text style={props.percentage >= 75 ? styles.high : styles.low}>
            {props.percentage}
          </Text>
        </Text>
        <Text style={styles.et}>Entries till: {props.entriestill}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rows: {
    color: "white",
    fontSize: 14.7
  },
  low: {
    color: "#ef5350"
  },
  high: {
    color: "#8bc34a"
  },
  bhigh: {
    borderColor: "#8bc34a",
    borderBottomWidth: 1
  },
  blow: {
    borderColor: "#ef5350",
    borderBottomWidth: 1
  },
  et: {
    textAlign: "right",
    color: "white",
    fontSize: 12
  }
});

export default AttendanceDisplay;
