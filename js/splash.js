import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet,StatusBar} from 'react-native';

export default class Splash extends React.Component {
  render() {
    return (
        <Container>
                  <StatusBar hidden={true} />

        <View style={{width:'100%',height:'100%',}}>
                <Image style={{ width:'100%',height:'100%', position: 'absolute', top: 0, left: 0 }} source={require('../pics/splash.png')}/>
            </View>          
      </Container>
    );
  }
}



