import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import Header from "../shared/header";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    /*홈 화면에서의 헤더 디자인 지정*/
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
};

/*home header design*/
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#fff",
    headerStyle: { backgroundColor: "#94E2F7" },
  },
});

export default HomeStack;
