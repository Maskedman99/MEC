import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Settings from "./src/Screens/Settings";
import Home from "./src/Screens/Home";
import Attendance from "./src/Screens/Attendance";
import Evaluation from "./src/Screens/Evaluation";
import Announcements from "./src/Screens/KTUAnnouncements";
import Credits from "./src/Screens/Credits";
import AttendanceMenu from "./src/Screens/AttendanceMenu";
import SyllabusMenu from "./src/Screens/SyllabusMenu";
import Syllabus from "./src/Screens/Syllabus";
import TimetableMenu from "./src/Screens/Timetablemenu";
import Timetable from "./src/Screens/Timetable";

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

  AttendanceMenuScreen: {
    screen: AttendanceMenu,
    navigationOptions: {
      title: "Attendance",
      headerStyle: {
        backgroundColor: "#000000"
      },
      headerTintColor: "#fff"
    }
  },

  SyllabusMenuScreen: {
    screen: SyllabusMenu,
    navigationOptions: {
      title: "Syllabus",
      headerStyle: {
        backgroundColor: "#000000"
      },
      headerTintColor: "#fff"
    }
  },

  SyllabusScreen: {
    screen: Syllabus,
    navigationOptions: {
      title: "Syllabus",
      headerStyle: {
        backgroundColor: "#000000"
      },
      headerTintColor: "#fff"
    }
  },

  TimetableMenuScreen: {
    screen: TimetableMenu,
    navigationOptions: {
      title: "Time-table",
      headerStyle: {
        backgroundColor: "#000000"
      },
      headerTintColor: "#fff"
    }
  },

  TimetableScreen: {
    screen: Timetable,
    navigationOptions: {
      title: "Time-table",
      headerStyle: {
        backgroundColor: "#000000"
      },
      headerTintColor: "#fff"
    }
  }
});

const App = createAppContainer(AppNavigator);

export default App;
