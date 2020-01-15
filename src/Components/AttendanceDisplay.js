import React from "react";
import { Text, StyleSheet } from "react-native";

class AttendanceDisplay extends React.Component {
  render() {
    return (
      <Text
        style={[
          styles.rows,
          this.props.percentage >= 75 ? styles.bhigh : styles.blow
        ]}
      >
        {this.props.subject}
        {"\n"}
        Percentage:{" "}
        <Text style={this.props.percentage >= 75 ? styles.high : styles.low}>
          {this.props.percentage}
          {"\t\t\t\t\t\t\t\t"}
        </Text>
        Entries till: {this.props.entriestill}
      </Text>
    );
  }
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
