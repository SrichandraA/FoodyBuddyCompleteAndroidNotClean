import React, { Component } from 'react';
import { Container, Header, Content,FooterTab, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title, Footer } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet,Picker} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

export default class AddPreferences extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const {goBack} = this.props.navigation;

    return (
        <Container>
            <Header style={{backgroundColor: '#E93F3F'}} hasTabs>
            <Left>
                    <Button transparent onPress={() => goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
         <Body>
           <Text style={{color:'white',
                         fontSize:14,
                         width:200,
                         marginLeft:-30
                         }}>
                         Manage Planner Preferences
           </Text>
           
         </Body>
         <Right>
                    <Text onPress={() => goBack()} style={{color: 'white',paddingTop:10,height:45,width:45}}>Save</Text>
                </Right>        
       </Header>
       <Content style={{backgroundColor:'#EDF1F4'}}>
       <View style={{width:'100%',height:65,backgroundColor:'white',padding:7,marginTop:6,  elevation:3 ,flexDirection:'row'}}>
                <Text style={{color:'#4E607E',textAlignVertical:'center',fontSize:14,width:'75%'}}>Show only vegetarian dishes</Text>
                <ToggleSwitch
                    isOn={false}
                    onColor='green'
                    offColor='#B2B2B2'
                    size='small'
                    onToggle={ (isOn) => console.log('changed to : ', isOn) }
                />
        </View>

        <View style={{width:'100%',height:200,backgroundColor:'white',padding:7,marginTop:6, elevation:3  ,flexDirection:'column'}}>
                <Text style={{color:'#4E607E',textAlignVertical:'center',fontSize:16,marginTop:10}}>Prefered Breakfast Time</Text>
                
                <Picker
                mode='dropdown'
                style={{ height: 50, width: 200 ,color:'#4E607E', }}>
                <Picker.Item label="6:30PM-10:30PM" value="java" />
                <Picker.Item label="6:30PM-10:30PM" value="js" />
                </Picker>
                
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'#4E607E',textAlignVertical:'center',fontSize:16}}>Breakfast Preferences</Text>
                <Image resizeMode='contain' style={{width:35,height:35,marginLeft:10}} source={require('../pics/editorange.png')}/>
                </View>

                <TouchableHighlight
                     
                            style={ {   backgroundColor:'#FFF2F2',marginTop:15,height:42,width:110,borderColor:'#E93F3F',borderRadius:7,borderWidth:2 } }
                            >
                            <Text style={ {fontSize: 10,
                            textAlign: 'center',
                            backgroundColor:'#FFF2F2',
                            fontWeight:'bold',
                            marginTop:11,
                            color: '#E93F3F'}}>MAIN COURSE</Text>
                </TouchableHighlight>
        </View>

        <View style={{width:'100%',height:200,backgroundColor:'white',padding:7,marginTop:6, elevation:3  ,flexDirection:'column'}}>
                <Text style={{color:'#4E607E',textAlignVertical:'center',fontSize:16,marginTop:10}}>Prefered Lunch Time</Text>
                
                <Picker
                mode='dropdown'
                style={{ height: 50, width: 200 ,color:'#4E607E', }}>
                <Picker.Item label="6:30PM-10:30PM" value="java" />
                <Picker.Item label="6:30PM-10:30PM" value="js" />
                </Picker>
                
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'#4E607E',textAlignVertical:'center',fontSize:16}}>Lunch Preferences</Text>
                <Image resizeMode='contain' style={{width:35,height:35,marginLeft:10}} source={require('../pics/editorange.png')}/>
                </View>

                <TouchableHighlight
                     
                            style={ {   backgroundColor:'#FFF2F2',marginTop:15,height:42,width:110,borderColor:'#E93F3F',borderRadius:7,borderWidth:2 } }
                            >
                            <Text style={ {fontSize: 10,
                            textAlign: 'center',
                            backgroundColor:'#FFF2F2',
                            fontWeight:'bold',
                            marginTop:11,
                            color: '#E93F3F'}}>MAIN COURSE</Text>
                </TouchableHighlight>
        </View>

        <View style={{width:'100%',height:200,backgroundColor:'white',padding:7,marginTop:6, elevation:3  ,flexDirection:'column'}}>
                <Text style={{color:'#4E607E',textAlignVertical:'center',fontSize:16,marginTop:10}}>Prefered Dinner Time</Text>
                
                <Picker
                mode='dropdown'
                style={{ height: 50, width: 200 ,color:'#4E607E', }}>
                <Picker.Item label="6:30PM-10:30PM" value="java" />
                <Picker.Item label="6:30PM-10:30PM" value="js" />
                </Picker>
                
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'#4E607E',textAlignVertical:'center',fontSize:16}}>Dinner Preferences</Text>
                <Image resizeMode='contain' style={{width:35,height:35,marginLeft:10}} source={require('../pics/editorange.png')}/>
                </View>

                <TouchableHighlight
                     
                            style={ {   backgroundColor:'#FFF2F2',marginTop:15,height:42,width:110,borderColor:'#E93F3F',borderRadius:7,borderWidth:2 } }
                            >
                            <Text style={ {fontSize: 10,
                            textAlign: 'center',
                            backgroundColor:'#FFF2F2',
                            fontWeight:'bold',
                            marginTop:11,
                            color: '#E93F3F'}}>MAIN COURSE</Text>
                </TouchableHighlight>
        </View>
           
        </Content>

      </Container>
    );
  }
}



