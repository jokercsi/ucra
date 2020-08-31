import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import AboutStack from "./aboutstack";
import HomeStack from "./homestack";

const RootDraweNavigator = createDrawerNavigator({
  Account: {
    screen: AboutStack,
  },
  Home: {
    screen: HomeStack,
  },
});

export default createAppContainer(RootDraweNavigator);
