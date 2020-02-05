import React from "react";
import { View, Text, StyleSheet } from "react-native";

function AttendanceDisplay(props) {
  var attented = (props.percentage * props.totalClasses) / 100;
  var canCut =
    props.percentage >= 75
      ? Math.floor((4 * attented - 3 * props.totalClasses) / 3)
      : Math.round(3 * props.totalClasses - 4 * attented);

  return (
    <View style={props.percentage >= 75 ? styles.bhigh : styles.blow}>
      <View>
        <Text style={styles.rows}>{props.subject}</Text>
      </View>
      <View style={styles.details}>
        <View>
          <Text style={styles.rows}>
            Percentage:{" "}
            <Text style={props.percentage >= 75 ? styles.high : styles.low}>
              {props.percentage}
            </Text>
          </Text>
          {props.percentage >= 75 ? (
            <Text style={styles.high}>Can cut {canCut} classes</Text>
          ) : (
            <Text style={styles.low}>Have to Attend {canCut} classes</Text>
          )}
        </View>
        <View>
          <Text style={styles.et}>Attended: {Math.floor(attented)}</Text>
          <Text style={styles.et}>Total Classes: {props.totalClasses}</Text>
          <Text style={styles.et}>Entries till: {props.entriestill}</Text>
        </View>
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
    borderBottomWidth: 1,
    marginBottom: 5
  },
  blow: {
    borderColor: "#ef5350",
    borderBottomWidth: 1,
    marginBottom: 5
  },
  et: {
    textAlign: "right",
    color: "white",
    fontSize: 12
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default AttendanceDisplay;
