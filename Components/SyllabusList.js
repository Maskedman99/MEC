import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class SyllabusList extends Component {
  render() {
    return (
      <View>
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
