import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Linking,
  StyleSheet
} from "react-native";

import Spinner from "../Components/Spinner";
import useAxios from "../Components/useAxios";
import KTUParser from "../Components/KTUParser";

const KTUAnnouncements = () => {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);

  let data = [];
  data = useAxios("https://ktu.edu.in/home.htm");
  if (data.length !== 0 && loading === true) {
    let x = KTUParser(data);
    setRows(x);
    setLoading(false);
  }

  return loading ? (
    <Spinner />
  ) : (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {rows.map((item, keys) =>
          keys % 2 ? (
            <View />
          ) : (
            <View>
              <Text style={styles.announcements}>{rows[keys + 1]}</Text>
              <Text style={styles.date}>{item}</Text>
            </View>
          )
        )}

        <TouchableHighlight
          activeOpacity={0.5}
          onPress={() => {
            Linking.openURL("https://ktu.edu.in/eu/core/announcements.htm");
          }}
        >
          <Text style={styles.viewmore}>
            https://ktu.edu.in/eu/core/announcements.htm
          </Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewmore: {
    color: "#00cdcd",
    marginVertical: 20,
    fontSize: 16,
    fontStyle: "italic",
    textDecorationLine: "underline",
    textAlign: "center"
  },
  container: {
    backgroundColor: "#000000",
    flex: 1,
    borderTopWidth: 1,
    borderColor: "white"
  },
  announcements: {
    paddingVertical: 10,
    color: "white",
    fontSize: 15,
    fontFamily: "sans-serif"
  },
  date: {
    borderBottomWidth: 1,
    borderBottomColor: "#8bc34a",
    color: "white",
    textAlign: "right"
  },
  scroll: {
    color: "white",
    marginHorizontal: 3
  }
});

export default KTUAnnouncements;
