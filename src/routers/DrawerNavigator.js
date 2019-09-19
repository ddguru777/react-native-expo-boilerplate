import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import SideBar from "../containers/SlidebarContainer";
import Usernavi from "./UserNavigator";

export default createDrawerNavigator(
  {
    Usernavi: { screen: Usernavi }
  },
  {
    initialRouteName: "Usernavi",
    contentComponent: props => <SideBar {...props} />
  }
);
