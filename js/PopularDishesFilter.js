import React, { Component } from 'react';
import { Container, Header, Content,FooterTab, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title, Footer } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet,ScrollView} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import Toast from 'react-native-simple-toast';

export default class PopularDishesFilter extends React.Component {
  constructor(props){
    super(props);
    this.state = { pressStatus: false,
        pressStatus1: false,
        pressStatus2: false,
        pressStatus3: false,
        pressStatus4: false,
        pressStatus5: false,
        pressStatus6: false,
        pressStatus7: false,pressStatus8: false,
        pressStatus9: false, };
        Toast.show('Can click on all the available buttons', Toast.LONG);


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
        <ScrollView>
            <View style={{width:'100%',height:65,backgroundColor:'white',padding:7,marginTop:10,flexDirection:'row'}}>
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
           <View style={{width:'100%',height:350,backgroundColor:'white',padding:7,marginTop:10}}>
                <Text style={{color:'#95989F', margin:10 ,fontSize:12}}>DELIVERY TIME</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginRight:10}}>
                         
             
                        <TouchableHighlight
                            activeOpacity={1}
                            onPress={()=>{this.setState({pressStatus:!this.state.pressStatus})}}
                            style={ this.state.pressStatus ? styles.buttonPress : styles.button }
                            >
                            <Text style={ this.state.pressStatus ? styles.textPress : styles.text }>06 AM-11 AM</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            activeOpacity={1}
                            onPress={()=>{this.setState({pressStatus1:!this.state.pressStatus1})}}
                            style={ this.state.pressStatus1 ? styles.buttonPress : styles.button }
                            >
                            <Text style={ this.state.pressStatus1 ? styles.textPress : styles.text }>11 AM-03 PM</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            activeOpacity={1}
                            onPress={()=>{this.setState({pressStatus2:!this.state.pressStatus2})}}
                            style={ this.state.pressStatus2 ? styles.buttonPress : styles.button }
                            >
                            <Text style={ this.state.pressStatus2 ? styles.textPress : styles.text }>03 PM-07 PM</Text>
                        </TouchableHighlight>

                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginRight:10,marginTop:20}}>
                         
             
                        <TouchableHighlight
                            activeOpacity={1}
                            onPress={()=>{this.setState({pressStatus3:!this.state.pressStatus3})}}
                            style={ this.state.pressStatus3 ? styles.buttonPress : styles.button }
                            >
                            <Text style={ this.state.pressStatus3 ? styles.textPress : styles.text }>07 PM-11 PM</Text>
                        </TouchableHighlight>

                </View>
                <Text style={{color:'#95989F', marginLeft:10, marginRight:10, marginBottom:10 , marginTop:25 ,fontSize:12}}>TYPE OF DISH</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginRight:10}}>
                         
             
                        <TouchableHighlight
                            activeOpacity={1}
                            onPress={()=>{this.setState({pressStatus4:!this.state.pressStatus4})}}
                            style={ this.state.pressStatus4 ? styles.buttonPress : styles.button }
                            >
                            <Text style={ this.state.pressStatus4 ? styles.textPress : styles.text }>SOUP</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            activeOpacity={1}
                            onPress={()=>{this.setState({pressStatus5:!this.state.pressStatus5})}}
                            style={ this.state.pressStatus5 ? styles.buttonPress : styles.button }
                            >
                            <Text style={ this.state.pressStatus5 ? styles.textPress : styles.text }>SNACKS</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            activeOpacity={1}
                            onPress={()=>{this.setState({pressStatus6:!this.state.pressStatus6})}}
                            style={ this.state.pressStatus6 ? styles.buttonPress : styles.button }
                            >
                            <Text style={ this.state.pressStatus6 ? styles.textPress : styles.text }>MAIN COURSE</Text>
                        </TouchableHighlight>

                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginRight:10,marginTop:20}}>
                         
             
                        <TouchableHighlight
                            activeOpacity={1}
                            onPress={()=>{this.setState({pressStatus7:!this.state.pressStatus7})}}
                            style={ this.state.pressStatus7 ? styles.buttonPress : styles.button }
                            >
                            <Text style={ this.state.pressStatus7 ? styles.textPress : styles.text }>DESSERTS</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            activeOpacity={1}
                            onPress={()=>{this.setState({pressStatus8:!this.state.pressStatus8})}}
                            style={ this.state.pressStatus8 ? styles.buttonPress : styles.button }
                            >
                            <Text style={ this.state.pressStatus8 ? styles.textPress : styles.text }>BEVERAGES</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            activeOpacity={1}
                            onPress={()=>{this.setState({pressStatus9:!this.state.pressStatus9})}}
                            style={ this.state.pressStatus9 ? styles.buttonPress : styles.button }
                            >
                            <Text style={ this.state.pressStatus9 ? styles.textPress : styles.text }>OTHERS</Text>
                        </TouchableHighlight>

                </View>

           </View>

                           
        </ScrollView>
        </Content>
       <Footer >
          <FooterTab style={{backgroundColor:'#F0F1F3'}}>
            <Button transparent onPress={() => goBack()}>
              <Text style={{fontWeight:'bold' , color:'#BFC4CF',opacity:0.6,fontSize:16}}>CANCEL</Text>
            </Button>
          </FooterTab>
          <FooterTab style={{backgroundColor:'white'}}>
            <Button transparent danger onPress={() => goBack()} >
              <Text style={{fontWeight:'bold',fontSize:16}}>APPLY FILTER</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}



const styles = StyleSheet.create({
    
    text: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight:'bold',
      marginTop:11,
      color: '#565D6A'
    },
    textPress: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight:'bold',
        marginTop:11,
        color: '#E93F3F'
    },
    button: {
        height:47,width:95,borderColor:'#E8EBEE',borderRadius:7,borderWidth:2
    },
    buttonPress: {
        height:47,width:95,borderColor:'#E93F3F',borderRadius:7,borderWidth:2

    },
  });