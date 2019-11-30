import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  StyleSheet
} from "react-native";

class HomeButton extends React.Component {
  render() {
    //  console.log(this.props);
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.props.nav.navigate(this.props.navscreen)}
        >
          <View style={styles.button}>
            <Image style={styles.img} source={this.props.img} />
            <Text style={styles.textstyle}>{this.props.title}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  button: {
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#388e3c",
    borderRadius: 2,
    margin: "1%",
    borderColor: "#76ff03"
  },

  textstyle: {
    color: "white",
    fontWeight: "bold"
  },

  img: {
    height: "45%",
    width: "35%",
    marginBottom: "1.5%",
    resizeMode: "stretch"
  }
});

export default HomeButton;
