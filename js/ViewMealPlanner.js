import React, { Component } from 'react';
import { Container, Header, Content,FooterTab,ScrollableTab ,TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title, Footer } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet,TouchableOpacity} from 'react-native';
import DayTab from './ViewMealPlannerTabs/DayTab';
import Toast from 'react-native-simple-toast';

export default class PopularDishes extends React.Component {
  constructor(props){
    super(props);
    Toast.show('Checkbox can be tested', Toast.LONG);

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
                         fontSize:13,
                         marginLeft:-30
                         }}>
                         Weekly Planner
           </Text>
           
         </Body>
         <Right>
   
        <Icon style={{color:'white'}} name='settings'/>
        </Right>
        
       </Header>
       <Tabs initialPage={0} renderTabBar={()=> <ScrollableTab />} style={{backgroundColor:'white'}} tabBarUnderlineStyle={{backgroundColor:'#E93F3F'}}  >
            <Tab  heading={<TabHeading style={{backgroundColor: 'white',flexDirection:'column'}}>
            <Text style={{color: '#E9EAEB',fontSize:11,marginBottom:1}}>Thu</Text>
                <Text style={{color: '#686E79',fontSize:13,marginBottom:1,fontWeight:'bold'}}>03</Text>
                  </TabHeading>}>
                  <DayTab navigation={this.props.navigation}/>
            </Tab> 

                   <Tab  heading={<TabHeading style={{backgroundColor: 'white',flexDirection:'column'}}>
            <Text style={{color: '#E9EAEB',fontSize:11,marginBottom:1}}>Fri</Text>
                <Text style={{color: '#686E79',fontSize:13,marginBottom:1,fontWeight:'bold'}}>04</Text>
                  </TabHeading>}>
                  
            </Tab> 

                   <Tab  heading={<TabHeading style={{backgroundColor: 'white',flexDirection:'column'}}>
            <Text style={{color: '#E9EAEB',fontSize:11,marginBottom:1}}>Sat</Text>
                <Text style={{color: '#686E79',fontSize:13,marginBottom:1,fontWeight:'bold'}}>05</Text>
                  </TabHeading>}>
                  
            </Tab> 

                   <Tab  heading={<TabHeading style={{backgroundColor: 'white',flexDirection:'column'}}>
            <Text style={{color: '#E9EAEB',fontSize:11,marginBottom:1}}>Sun</Text>
                <Text style={{color: '#686E79',fontSize:13,marginBottom:1,fontWeight:'bold'}}>06</Text>
                  </TabHeading>}>
                  
            </Tab> 

                   <Tab  heading={<TabHeading style={{backgroundColor: 'white',flexDirection:'column'}}>
            <Text style={{color: '#E9EAEB',fontSize:11,marginBottom:1}}>Mon</Text>
                <Text style={{color: '#686E79',fontSize:13,marginBottom:1,fontWeight:'bold'}}>07</Text>
                  </TabHeading>}>
                  
            </Tab> 

                   <Tab  heading={<TabHeading style={{backgroundColor: 'white',flexDirection:'column'}}>
            <Text style={{color: '#E9EAEB',fontSize:11,marginBottom:1}}>Tue</Text>
                <Text style={{color: '#686E79',fontSize:13,marginBottom:1,fontWeight:'bold'}}>08</Text>
                  </TabHeading>}>
                  
            </Tab> 

                   <Tab  heading={<TabHeading style={{backgroundColor: 'white',flexDirection:'column'}}>
            <Text style={{color: '#E9EAEB',fontSize:11,marginBottom:1}}>Wed</Text>
                <Text style={{color: '#686E79',fontSize:13,marginBottom:1,fontWeight:'bold'}}>09</Text>
                  </TabHeading>}>
                  
            </Tab> 

           
          </Tabs>
    
 
      </Container>
    );
  }
}



