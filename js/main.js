import React, { Component } from 'react';
import { Container, Header, Content, Card, View, CardItem, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions } from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import WelcomeScreen from './welcome';
import FirstScreen from './first';
import NavigationDrawer from './NavigationDrawer';
import LoginScreen from './Login';
import FourthScreen from './Fourth';
import ReduxScreen from './reduxTest';
import OTPScreen from './otp';
import ChefFilter from './chefFilter';
import PopularDishes from './PopularDishes';
import OtherFilter from './otherFilter';
import { Provider } from "react-redux";
import store from "./store/index";
import PopularDishesFilter from './PopularDishesFilter';
import ViewMealPlanner from './ViewMealPlanner';
import AddPreferences from './AddPreferences';
export default class Main extends Component {

  render() {
    
    return (
      <Provider store={store}>  

        <AppNavigator/>
      </Provider>
     
    );
  }
}

const AppNavigator = StackNavigator({

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
      
      OTPScreen:{screen: OTPScreen,
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
        ChefFilter:{screen: ChefFilter,
            header: { visible: false },
            navigationOptions: {
              title: 'First',
              header: null
            }},
        OtherFilter:{screen: OtherFilter,
            header: { visible: false },
            navigationOptions: {
                title: 'First',
                header: null
            }},
        PopularDishes:{screen: PopularDishes,
            header: { visible: false },
            navigationOptions: {
                title: 'First',
                header: null
            }},
        PopularDishesFilter:{screen: PopularDishesFilter,
            header: { visible: false },
            navigationOptions: {
                title: 'First',
                header: null
            }},
        AddPreferences:{screen: AddPreferences,
            header: { visible: false },
            navigationOptions: {
                title: 'First',
                header: null
            }},
            ViewMealPlanner:{screen: ViewMealPlanner,
                header: { visible: false },
                navigationOptions: {
                    title: 'First',
                    header: null
                }},
})