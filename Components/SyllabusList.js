import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class SyllabusList extends Component {
  render() {
    return (
      <View>
        <Text style={styles.head}>{this.props.title}</Text>
        <FlatList
          data={this.props.data}
          renderItem={({ item }) => (
            <Text style={styles.modtext}>
              {"\n"}
              {"MODULE  "}
              {item.id}
              {"\n"}
              <Text style={styles.sytext}>{item.M}</Text>
            </Text>
          )}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    textAlign: "center",
    marginTop: 10,
    color: "#8bc34a",
    fontWeight: "bold",
    fontSize: 17
  },

  sytext: {
    color: "white",
    fontSize: 14,
    margin: 10,
    fontWeight: "normal"
  },
  modtext: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  }
});
export default SyllabusList;
