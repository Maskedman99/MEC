import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const AttendanceDisplay = ({
  subject = subject,
  percentage = percentage,
  totalClasses = totalClasses,
  entriestill = entriestill
}) => {
  const [attented, setattented] = useState("-");
  const [canCut, setcanCut] = useState("-");

  useEffect(() => {
    let y = (percentage * totalClasses) / 100;
    let x =
      percentage >= 75
        ? Math.floor((4 * y - 3 * totalClasses) / 3)
        : Math.round(3 * totalClasses - 4 * y);

    setattented(y);
    setcanCut(x);
  }, [percentage, totalClasses]);

  return (
    <View style={percentage >= 75 ? styles.bhigh : styles.blow}>
      <View>
        <Text style={styles.rows}>{subject}</Text>
      </View>
      <View style={styles.details}>
        <View>
          <Text style={styles.rows}>
            {"Percentage: "}
            <Text style={percentage >= 75 ? styles.high : styles.low}>
              {percentage}
            </Text>
          </Text>
          {percentage >= 75 ? (
            <Text style={styles.high}>Can cut {canCut} classes</Text>
          ) : (
            <Text style={styles.low}>Have to Attend {canCut} classes</Text>
          )}
        </View>
        <View>
          <Text style={styles.et}>Attended: {Math.floor(attented)}</Text>
          <Text style={styles.et}>Total Classes: {totalClasses}</Text>
          <Text style={styles.et}>Entries till: {entriestill}</Text>
        </View>
      </View>
    </View>
  );
};

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
