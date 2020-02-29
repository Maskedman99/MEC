import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import useEvaluationAxios from "../Components/Logic/useEvaluationAxios";
import EvaluationParser from "../Components/Logic/EvaluationParser";

import Spinner from "../Components/Spinner";

const Evaluation = () => {
  const [loading, setLoading] = useState(true);
  let Clas = "C5B";
  let rollNo = "44";
  let response = [];

  response = useEvaluationAxios({ Clas, rollNo });
  if (response.length !== 0 && loading === true) {
    let A = EvaluationParser(response);
    console.log(A);
    setLoading(false);
  }

  return loading ? (
    <Spinner />
  ) : (
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
