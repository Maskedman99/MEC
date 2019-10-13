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
    console.log(this.props);
    return (
      <View>
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
  button: {
    width: 170,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#388e3c",
    borderRadius: 2,
    borderWidth: 0.2,
    marginRight: 5,
    marginBottom: 5,
    borderColor: "#76ff03"
  },

  textstyle: {
    color: "white",
    fontWeight: "bold"
  },

  img: {
    height: 45,
    width: 45,
    marginBottom: 5
  }
});

export default HomeButton;
