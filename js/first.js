import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet} from 'react-native';
import AppartmentTab from './FirstScreenTabs/AppartmentTab';
import OfficeTab from './FirstScreenTabs/OfficeTab';
import Toast from 'react-native-simple-toast';


export default class First extends React.Component {
  constructor(props){
    super(props);
    Toast.show('Click on any APARTMENT or OFFICE to proceed');

    
  }
  render() {
    return (
        <Container>
            <Header style={{height:70,backgroundColor: '#E93F3F'}} hasTabs>
         
         <Body>
           <Text style={{color:'white',
                         fontWeight:'bold',
                         fontSize:19,
                         top:5
                         }}>
                         Select Address
           </Text>
           
         </Body>
        
       </Header>
        
        <Tabs initialPage={0} >
        <Tab heading={<TabHeading style={{backgroundColor: '#E93F3F'}}>
                 <Text style={{color: '#ffffff'}}>Appartment</Text>
               </TabHeading>}>
               <AppartmentTab navigation={this.props.navigation}/>
   </Tab> 
    <Tab heading={<TabHeading style={{backgroundColor: '#E93F3F'}}>
                 <Text style={{color: '#ffffff'}}>Office</Text>
               </TabHeading>}>
               <OfficeTab navigation={this.props.navigation}/>
   </Tab>  

        </Tabs>
      </Container>
    );
  }
}



