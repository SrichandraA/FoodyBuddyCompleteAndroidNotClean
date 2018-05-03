import React, { Component } from 'react';
import { Container, Header, Content,FooterTab, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title, Footer } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet} from 'react-native';

export default class ChefFilter extends React.Component {
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
                         fontSize:13,
                         marginLeft:-40
                         }}>
                         Chef Filter
           </Text>
           
         </Body>
        
       </Header>
       <Content style={{backgroundColor:'white'}}>
           <View style={{width:'100%',height:65,backgroundColor:'#EDF1F4',padding:7}}>
                <Text  style={{fontWeight:'bold',fontSize:14,color:'#B8C0CD'}}>ACTIVE CHEFS</Text>
                <Text  style={{fontSize:13,color:'#B8C0CD',marginTop:3}}>Tap on the Chef name to see dishes from that seller</Text>

           </View>
           </Content>
       <Footer >
          <FooterTab style={{backgroundColor:'#F0F1F3'}}>
            <Button transparent onPress={() => goBack()}>
              <Text style={{fontWeight:'bold' , color:'#BFC4CF',opacity:0.6,fontSize:16}}>RESET</Text>
            </Button>
          </FooterTab>
          <FooterTab style={{backgroundColor:'white'}}>
            <Button transparent danger onPress={() => goBack()}>
              <Text style={{fontWeight:'bold',fontSize:16}}>APPLY FILTER</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}



