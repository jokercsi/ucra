import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import AboutStack from "./aboutstack";
import HomeStack from "./homestack";

const RootDraweNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Account: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDraweNavigator);
