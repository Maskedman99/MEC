import React, { Component } from "react";
import { View, StyleSheet, ScrollView, StatusBar, Image } from "react-native";

import HomeButton from "../Components/HomeButton";

import ImageSlider from "react-native-image-slider";
import SplashScreen from "react-native-splash-screen";

export class Home extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 150);
  }

  render() {
    const images = [
      "https://www.excelmec.org/static/media/excel.c7c894bc.png",
      "https://pbs.twimg.com/media/EBg4aeQUIAAhUvU.jpg",
      "https://pbs.twimg.com/media/EBSh5kgVAAI4Y-0.jpg"
    ];
    console.log(this.props);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />

        <View style={styles.imgcontainer}>
          <ImageSlider
            autoPlayWithInterval={4000}
            images={images} //required for some reason
            customSlide={({ index, item, style, width }) => (
              <View key={index} style={[style, styles.customSlide]}>
                <Image source={{ uri: item }} style={styles.bigimg} />
              </View>
            )}
          />
        </View>

        <View style={styles.inner}>
          <ScrollView>
            <View style={styles.buttonContainer}>
              <HomeButton
                navscreen="EvaluationScreen"
                nav={this.props.navigation}
                title="EVALUATION"
                img={require("../Assets/Evaluation.png")}
              />
              <HomeButton
                navscreen="Attendance1Screen"
                nav={this.props.navigation}
                title="ATTENDANCE"
                img={require("../Assets/Attendance.png")}
              />
            </View>

            <View style={styles.buttonContainer}>
              <HomeButton
                navscreen="KTUAnnouncementsScreen"
                nav={this.props.navigation}
                title="ANNOUNCEMENTS"
                img={require("../Assets/Announcements.png")}
              />
              <HomeButton
                navscreen="SettingScreen"
                nav={this.props.navigation}
                title="SETTINGS"
                img={require("../Assets/Settings.png")}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#000000",
    flex: 1
  },

  imgcontainer: {
    borderWidth: 1,
    borderColor: "#8bc34a",
    borderRadius: 2.5,
    flex: 1,
    marginTop: 5
  },

  bigimg: {
    height: "100%",
    width: "95%",
    resizeMode: "stretch"
  },

  customSlide: {
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },

  inner: {
    height: "53%",
    width: "95%",
    marginTop: 20
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default Home;
