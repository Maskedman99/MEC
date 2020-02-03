import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Alert,
  Linking,
  StyleSheet,
  ScrollView,
  Share
} from "react-native";

function Settings() {
  async function onShare() {
    try {
      await Share.share(
        {
          message:
            "https://play.google.com/store/apps/details?id=com.maskedmanmec",
          url: "https://play.google.com/store/apps/details?id=com.maskedmanmec", //Only IOS
          title: "Hey there, checkout this app!"
        },
        {
          // Android only:
          dialogTitle: "Share MEC with your freinds!",
          // iOS only:
          excludedActivityTypes: ["com.apple.UIKit.activity.PostToTwitter"]
        }
      );
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <TouchableHighlight
          activeOpacity={0.5}
          onPress={() => {
            Linking.openURL("market://details?id=com.maskedmanmec");
          }}
        >
          <Text style={styles.menutext}>{"\t\t"}Check for Updates</Text>
        </TouchableHighlight>

        <TouchableHighlight
          activeOpacity={0.5}
          onPress={() => {
            Alert.alert(
              "Create an Issue at:",
              "https://github.com/Maskedman99/MEC/issues"
            );
          }}
        >
          <Text style={styles.menutext}>{"\t\t"}Report Bugs</Text>
        </TouchableHighlight>

        <TouchableHighlight activeOpacity={0.5} onPress={() => onShare()}>
          <Text style={styles.menutext}>{"\t\t"}Share</Text>
        </TouchableHighlight>

        <TouchableHighlight
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("CreditsScreen")}
        >
          <Text style={styles.menutext}>{"\t\t"}Credits</Text>
        </TouchableHighlight>

        <TouchableHighlight
          activeOpacity={0.5}
          onPress={() => {
            Alert.alert("About", "Version 1.2");
          }}
        >
          <Text style={styles.menutext}>{"\t\t"}About</Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    borderTopWidth: 1,
    borderColor: "white"
  },

  menutext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 15,
    marginHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#8bc34a"
  },

  scroll: {
    marginTop: 20
  }
});
export default Settings;
