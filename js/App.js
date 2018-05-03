import React, { Component } from 'react';
import { Container, Header, Content, Card, View, CardItem, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import Expo from 'expo';
import { Image, TouchableHighlight, Alert,Dimensions } from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import WelcomeScreen from './js/welcome';
import FirstScreen from './js/first';
import NavigationDrawer from './js/NavigationDrawer';
import LoginScreen from './js/Login';
import FourthScreen from './js/Fourth';
import ReduxScreen from './js/reduxTest';

import { Provider } from "react-redux";
import store from "./js/store/index";
export default class ButtonExample extends Component {

  render() {
    
    return (
      <Provider store={store}>  

        <AppNavigator/>
      </Provider>
     
    );
  }
}

const AppNavigator = StackNavigator({

  WelcomeScreen:{screen: WelcomeScreen,
    header: { visible: false },
    navigationOptions: {
      title: 'Welcome',
      header: null
    }},
  FirstScreen:{screen: FirstScreen,
    header: { visible: false },
    navigationOptions: {
      title: 'First',
      header: null
    }},
    NavigationDrawer:{screen: NavigationDrawer,
      header: { visible: false },
      navigationOptions: {
        title: 'First',
        header: null
      }},
      
    LoginScreen:{screen: LoginScreen,
      header: { visible: false },
      navigationOptions: {
        title: 'First',
        header: null
      }},
      
      
    FourthScreen:{screen: FourthScreen,
      header: { visible: false },
      navigationOptions: {
        title: 'First',
        header: null
      }},
 
      ReduxScreen:{screen: ReduxScreen,
        header: { visible: false },
        navigationOptions: {
          title: 'First',
          header: null
        }},

})