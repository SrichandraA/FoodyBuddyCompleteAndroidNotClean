import React, { Component } from "react";

import { DrawerNavigator } from "react-navigation";
import SecondScreen from "./Second";
import Welcome from "./Fourth";

const NavigationDrawer = DrawerNavigator(
  {
    // SecondScreen: { screen: SecondScreen },
    // Home: { screen: Welcome },
    // ContactUs: { screen: Welcome },
    // About: { screen: Welcome },
    Dashboard: { screen: SecondScreen },
    My_Orders: { screen: Welcome },
    Order_History: { screen: Welcome },
    Invite_Neighbours: { screen: Welcome },
    Settings: { screen: Welcome },
    Food_Premier_League: { screen: Welcome },
    FoodyBuddy_Credits: { screen: Welcome },
    Contact_Us: { screen: Welcome },
    About: { screen: Welcome },
  }
);
export default NavigationDrawer;