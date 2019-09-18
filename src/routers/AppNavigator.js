import { createStackNavigator } from "react-navigation-stack";
import Drawer from "./DrawerNavigator";

export default createStackNavigator(
  {
    Drawer: { screen: Drawer },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);
