import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import MenuButton from "../shared/menuButton";
import React from "react";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "UCRA",
        headerLeft: <MenuButton navigation={navigation} />,
        headerTitleStyle: { fontSize: 20, letterSpacing: 2 },
      };
    },
  },
};

/*about header design*/
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#fff",
    headerStyle: { backgroundColor: "#94E2F7" },
  },
});

export default AboutStack;
