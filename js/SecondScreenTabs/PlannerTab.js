import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, Fab, View, CardItem, Tab, Picker,Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import Toast from 'react-native-simple-toast';


export default class PlannerTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          active: false
        };
        Toast.show('Click on ADD PREFERENCES or VIEW MEAL PLANNER', Toast.LONG);

      }
  render() {
 

    const screenHT = Dimensions.get('window').height;
    const screenWT = Dimensions.get('window').width;

   
    return (
        <Container style={{backgroundColor:'#EDF1F4',}}>

            <Image resizeMode='stretch' style={{width:screenWT,height:320,marginTop:0,position:'absolute'}} source={require('../../pics/planner.png')} />
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("AddPreferences")} style={{marginLeft:'56%'}} >
                        <View style={{height:35,width:150,flexDirection:'row'}}>
                        <Text style={{color:'white',fontSize:13,textAlignVertical:'center',marginTop:10,marginRight:10}}>Add preferences</Text>
                        <Icon style={{color:'white',marginTop:7}} name='settings'/>
                        </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("ViewMealPlanner")} style={{marginTop:285}} >
                        <View style={{height:56,width:screenWT,flexDirection:'row',backgroundColor:'white',backgroundColor:'white',paddingLeft:'15%'}}>
                        <Image style={{height:25,width:25,alignSelf:'center',marginRight:10}} source={require('../../pics/maincourse.png')}/>
                        <Text style={{color:'#E93F3F',fontSize:15,textAlignVertical:'center'}}>VIEW YOUR MEAL PLANNER</Text>
                        </View>
            </TouchableOpacity>
            
        </Container>
    );
  }
}



