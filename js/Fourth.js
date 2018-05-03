import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import { Image, TouchableOpacity, Alert,Dimensions ,StyleSheet,} from 'react-native';
import Toast from 'react-native-simple-toast';


export default class Fourth extends React.Component {
    constructor(props){
        super(props);
        Toast.show('Click on ORDER FOOD or SELL FOOD to proceed', Toast.LONG);

    }
    
  render() {
    return (
        <Container style={{backgroundColor:'#E93F3F'}}>
            <View style={{flex:1,flexDirection:'column',paddingTop:15}}>
            
                <View style={{flexDirection:'row',width:'90%',height:160,backgroundColor:'white',borderRadius:7,alignSelf:'center',marginTop:110,marginBottom:20}}>
                    <Image style={{width:'40%',height:'100%'}} resizeMode='contain' source={require('../pics/foody.jpg')}/>                
                    <View style={{padding:20}}>
                        <Text style={{fontSize:18,marginLeft:15,color:'#959595',fontFamily:'Roboto'}}>Be a Foody</Text>
                        <Text style={{fontSize:15,width:150,marginLeft:15,marginBottom:10,color:'#cccccc',fontFamily:'Roboto'}}>
                        Order Delicious home cooked food from your neighbours
                        </Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("NavigationDrawer")} >
                            <View style={{height:40,width:150,flexDirection:'row',marginLeft:15,marginTop:5}}>
                                <Text style={{color:'#E93F3F',fontWeight:'bold',fontSize:14}}>ORDER FOOR</Text>
                                <Icon style={{color:'#E93F3F',marginLeft:15,top:-5}} name='arrow-forward'/>

                            </View>
                            </TouchableOpacity>
                        {/* <Button transparent danger onPress={()=>this.props.navigation.navigate("SecondScreen")} >
                            <Text >ORDER FOOD</Text>
                            <Icon name='arrow-forward'/>
                        </Button> */}
                    </View>
                </View>

                <View style={{flexDirection:'row',width:'90%',height:160,backgroundColor:'white',borderRadius:7,alignSelf:'center'}}>
                    <Image style={{width:'40%',height:'100%'}} resizeMode='contain' source={require('../pics/buddy.png')}/>                
                    <View style={{padding:20}}>
                        <Text style={{fontSize:18,marginLeft:15,color:'#959595',fontFamily:'Roboto'}}>Be a Buddy</Text>
                        <Text style={{fontSize:15,width:150,marginLeft:15,marginBottom:10,color:'#cccccc',fontFamily:'Roboto'}}>
                            Sell yummy home cooked food to your neighbours
                        </Text>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("NavigationDrawer")} >
                            <View style={{height:40,width:150,flexDirection:'row',marginLeft:15,marginTop:5}}>
                                <Text style={{color:'#E93F3F',fontWeight:'bold',fontSize:14}}>SELL FOOD</Text>
                                <Icon style={{color:'#E93F3F',marginLeft:15,top:-5}} name='arrow-forward'/>

                            </View>
                        </TouchableOpacity>
                        {/* <Button transparent danger>
                            <Text>SELL FOOD</Text>
                            <Icon name='arrow-forward'/>

                        </Button>                    */}
                    </View>
                </View>

            </View>
      </Container>
    );
  }
}



