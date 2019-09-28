import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Settings from "./Screens/Settings";
import Home from "./Screens/Home";
import Attendance from "./Screens/Attendance";
import Evaluation from "./Screens/Evaluation";
import Announcements from "./Screens/KTUAnnouncements";
import Credits from "./Screens/Credits";
import Attendance1 from "./Screens/Attendance1";

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Home, navigationOptions: { header: null } },

  SettingScreen: {
    screen: Settings,
    navigationOptions: {
      title: "Settings",
      headerStyle: {
        backgroundColor: "#000000"
      },
      headerTintColor: "#fff"
    }
  },

  AttendanceScreen: {
    screen: Attendance,
    navigationOptions: {
      title: "Attendance",
      headerStyle: {
        backgroundColor: "#000000"
      },
      headerTintColor: "#fff"
    }
  },

  EvaluationScreen: {
    screen: Evaluation,
    navigationOptions: {
      title: "Evaluation",
      headerStyle: {
        backgroundColor: "#000000"
      },
      headerTintColor: "#fff"
    }
  },

  KTUAnnouncementsScreen: {
    screen: Announcements,
    navigationOptions: {
      title: "KTU Announcements",
      headerStyle: {
        backgroundColor: "#000000"
      },
      headerTintColor: "#fff"
    }
  },

  CreditsScreen: {
    screen: Credits,
    navigationOptions: {
      title: "Credits",
      headerStyle: {
        backgroundColor: "#000000"
      },
      headerTintColor: "#fff"
    }
  },

  Attendance1Screen: {
    screen: Attendance1,
    navigationOptions: {
      title: "Attendance",
      headerStyle: {
        backgroundColor: "#000000"
      },
      headerTintColor: "#fff"
    }
  }
});

const App = createAppContainer(AppNavigator);

export default App;
