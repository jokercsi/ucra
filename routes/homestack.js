import { createStackNavigator } from "react-navigation-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/home";
import MenuButton from "../shared/menuButton";
import React from "react";
import Detail from "../screens/detail";
import Reservation from "../screens/reservation";
import A from "../screens/a";
import B from "../screens/b";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

const TabNavigator = createBottomTabNavigator(
  {
    검색: {
      screen: Home,
    },
    포인트적립: {
      screen: A,
    },
    이벤트: {
      screen: B,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "검색") {
          iconName = "md-search";
        } else if (routeName === "포인트적립") {
          iconName = "md-cash";
        } else if (routeName === "이벤트") {
          iconName = "md-calendar";
        }
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      },
    }),
  }
);

/*home header design*/
const HomeStack = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "UCRA",
        headerTintColor: "#fff",
        headerTitleStyle: { fontSize: 20, letterSpacing: 2 },
        headerStyle: { backgroundColor: "#94E2F7" },
        headerLeft: <MenuButton navigation={navigation} />,
      };
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: navigation.getParam("name"),
        headerBackTitleVisible: false,
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#94E2F7" },
      };
    },
  },
  Reservation: {
    screen: Reservation,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "예약하기",
        headerBackTitleVisible: false,
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#94E2F7" },
      };
    },
  },
});

export default createAppContainer(HomeStack);
