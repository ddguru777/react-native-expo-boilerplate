import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import SideBar from "../containers/SlidebarContainer";
import Home from "../containers/HomeContainer";
import Photoslider from "../containers/PhotosliderContainer";

export default createDrawerNavigator(
  {
    Home: { screen: Home },
    Photoslider: { screen: Photoslider },
  },
  {
    initialRouteName: "Home",
    contentComponent: props => <SideBar {...props} />
  }
);
