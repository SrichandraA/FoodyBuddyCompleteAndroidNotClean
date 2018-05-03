import React, { Component } from 'react';
import { Container, Header, Content,FooterTab,ScrollableTab ,TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title, Footer } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet,TouchableOpacity} from 'react-native';
import SoupTab from './PopularDishesTabs/soups';
import Toast from 'react-native-simple-toast';

export default class PopularDishes extends React.Component {
  constructor(props){
    super(props);
    Toast.show('Click on FILTER icon at the top to test', Toast.LONG);

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
                         Popular Dishes
           </Text>
           
         </Body>
         <Right>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate("PopularDishesFilter")} >
            <View style={{height:28,width:80,borderRadius:8,borderColor:'#E93F3F',borderWidth:1,flexDirection:'row',marginRight:10}}>
            <Image resizeMode='contain' source={require('../pics/filter-icon.png')} style={{height:30,width:30,marginLeft:30,}}/>
            </View>
        </TouchableOpacity>
        <Icon style={{color:'white'}} name='search'/>
        </Right>
        
       </Header>
       <Tabs initialPage={0} renderTabBar={()=> <ScrollableTab />} style={{backgroundColor:'white'}} tabBarUnderlineStyle={{backgroundColor:'#E93F3F'}}  >
            <Tab  heading={<TabHeading style={{backgroundColor: 'white',flexDirection:'column'}}>
                <Image style={{height:25,width:25,alignSelf:'center'}} source={require('../pics/soup.jpg')}/>
                <Text style={{color: '#6D737E',fontSize:11,marginBottom:1}}>SOUP</Text>
                  </TabHeading>}>
                  <SoupTab navigation={this.props.navigation}/>
            </Tab> 

            <Tab  heading={<TabHeading style={{backgroundColor: 'white',flexDirection:'column'}}>
                <Image style={{height:25,width:25,alignSelf:'center'}} source={require('../pics/snack.jpg')}/>
                <Text style={{color: '#6D737E',fontSize:11,marginBottom:1}}>SNACKS</Text>
                  </TabHeading>}>
                  {/* <TodayTab navigation={this.props.navigation}/> */}
            </Tab>  

            <Tab  heading={<TabHeading style={{backgroundColor: 'white',flexDirection:'column'}}>
                <Image style={{height:25,width:25,alignSelf:'center'}} source={require('../pics/maincourse.png')}/>
                <Text style={{color: '#6D737E',fontSize:11,marginBottom:1}}>MAIN COURSE</Text>
                  </TabHeading>}>
                  {/* <TodayTab navigation={this.props.navigation}/> */}
            </Tab>  

            <Tab  heading={<TabHeading style={{backgroundColor: 'white',flexDirection:'column'}}>
                <Image style={{height:25,width:25,alignSelf:'center'}} source={require('../pics/dessert.jpg')}/>
                <Text style={{color: '#6D737E',fontSize:11,marginBottom:1}}>DESSERTS</Text>
                  </TabHeading>}>
                  {/* <TodayTab navigation={this.props.navigation}/> */}
            </Tab>    

            <Tab  heading={<TabHeading style={{backgroundColor: 'white',flexDirection:'column'}}>
                <Image style={{height:25,width:25,alignSelf:'center'}} source={require('../pics/beverages.png')}/>
                <Text style={{color: '#6D737E',fontSize:11,marginBottom:1}}>BEVERAGES</Text>
                  </TabHeading>}>
                  {/* <TodayTab navigation={this.props.navigation}/> */}
            </Tab>             

            <Tab  heading={<TabHeading style={{backgroundColor: 'white',flexDirection:'column'}}>
                <Image style={{height:25,width:25,alignSelf:'center'}} source={require('../pics/other.jpg')}/>
                <Text style={{color: '#6D737E',fontSize:11,marginBottom:1}}>OTHERS</Text>
                  </TabHeading>}>
                  {/* <TodayTab navigation={this.props.navigation}/> */}
            </Tab> 

          </Tabs>
    
 
      </Container>
    );
  }
}



