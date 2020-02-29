import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

import axios from "axios";
import queryString from "query-string";

const Evaluation = () => {
  useEffect(() => {
    var Data = queryString.stringify({
      class: "C5B",
      rollno: "44",
      Button1: "Submit"
    });

    axios({
      method: "post",
      url: "http://evaluation.mec.ac.in/",
      data: Data,
      headers: { "Content-type": "application/x-www-form-urlencoded" }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textnorm}>Comming Soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    justifyContent: "center",
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "white"
  },
  textnorm: {
    color: "white",
    fontSize: 19,
    textAlign: "center"
  }
});

export default Evaluation;
