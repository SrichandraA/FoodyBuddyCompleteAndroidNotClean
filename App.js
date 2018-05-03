import React, { Component } from 'react';
import { Container, Header, Content, Card, View, CardItem, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';

import { Image, TouchableHighlight, Alert,Dimensions } from 'react-native';
import Splash from './js/splash';
import Main from './js/main';
import Second from './js/Second';
import { Provider } from "react-redux";
export default class MainActivity extends Component {
    constructor(props){
      super(props);
      this.state = { currentScreen:'Splash'};
      setTimeout(()=>{
        this.setState({currentScreen:'Main'})
      },3000)
    }
  render() {
    const { currentScreen } = this.state
    let mainScreen = currentScreen === 'Splash' ? <Splash/>:<Main/>
    return mainScreen;
    // return <Second/>

  }
}
