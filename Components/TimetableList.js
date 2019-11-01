import React, { Component } from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";

class TimetableList extends Component {
  renderRow(item, index) {
    return (
      <View>
        <Text style={styles.sytext}>{item.row}</Text>
      </View>
    );
  }

  renderSectionHeader(title) {
    return <Text style={styles.head}>{title}</Text>;
  }

  render() {
    return (
      <View>
        <SectionList
          renderItem={({ item, index, section }) => this.renderRow(item, index)}
          renderSectionHeader={({ section: { title } }) =>
            this.renderSectionHeader(title)
          }
          sections={this.props.data}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    textAlign: "center",
    color: "#8bc34a",
    fontWeight: "bold",
    fontSize: 17,
    borderTopWidth: 3,
    borderTopColor: "#8bc34a"
  },

  sytext: {
    color: "white",
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center"
  }
});
export default TimetableList;
