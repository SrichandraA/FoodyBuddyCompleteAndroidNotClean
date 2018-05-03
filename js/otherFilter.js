import React, { Component } from 'react';
import { Container, Header, Content,FooterTab, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title, Footer } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

export default class OtherFilter extends React.Component {
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
                         Filter
           </Text>
           
         </Body>
        
       </Header>
       <Content style={{backgroundColor:'#EDF1F4'}}>
       <View style={{width:'100%',height:65,backgroundColor:'white',padding:7,marginTop:8,flexDirection:'row'}}>
                <Text style={{color:'#95989F',textAlignVertical:'center',fontSize:14,width:'75%'}}>Show only vegetarian dishes</Text>
                <ToggleSwitch
                    isOn={false}
                    onColor='green'
                    offColor='#B2B2B2'
                    size='small'
                    onToggle={ (isOn) => console.log('changed to : ', isOn) }
                />
           </View>
           <View style={{width:'100%',height:65,backgroundColor:'white',padding:7,marginTop:2,flexDirection:'row'}}>
                <Text style={{color:'#95989F',width:'75%',textAlignVertical:'center',fontSize:14}}>Show only non-vegetarian dishes</Text>
                <ToggleSwitch
                    isOn={false}
                    onColor='green'
                    offColor='#B2B2B2'
                    size='small'
                    onToggle={ (isOn) => console.log('changed to : ', isOn) }
                />
           </View>
           <View style={{width:'100%',height:65,backgroundColor:'white',padding:7,marginTop:2,flexDirection:'row'}}>
                <Text style={{color:'#95989F',textAlignVertical:'center',fontSize:14,width:'75%'}}>Show only home delivery</Text>
                <ToggleSwitch
                    isOn={false}
                    onColor='green'
                    offColor='#B2B2B2'
                    size='small'
                    onToggle={ (isOn) => console.log('changed to : ', isOn) }
                />
           </View>
           </Content>
       <Footer >
          <FooterTab style={{backgroundColor:'#F0F1F3'}}>
            <Button transparent onPress={() => goBack()}>
              <Text style={{fontWeight:'bold' , color:'#BFC4CF',opacity:0.6,fontSize:16}}>CANCEL</Text>
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



