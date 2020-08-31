import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import Header from "../shared/header";
import React from "react";
import Detail from "../screens/detail";
import A from "../screens/a";
import B from "../screens/b";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

const TabNavigator = createBottomTabNavigator({
  검색: {
    screen: Home,
  },
  Point: {
    screen: A,
  },
  이벤트: {
    screen: B,
  },
});

/*home header design*/
const HomeStack = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#94E2F7" },
      };
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => {
      return {
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#94E2F7" },
      };
    },
  },
});

export default createAppContainer(HomeStack);
