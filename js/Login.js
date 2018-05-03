import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, 
    Text ,Form, Item, Input,Left, Body, Right, Icon, Title, Label,Picker } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native';
import { StatusBar } from "react-native";
import { Dropdown } from 'react-native-material-dropdown';
import { connect } from "react-redux";
import { getApartment } from "./actions/index";
import Toast from 'react-native-simple-toast';


const mapStateToProps = state => {
    return { apartments: state.apartments,
               
             };
  };
  
  const mapDispatchToProps = dispatch => {
      return {
       
        getApartment:info =>dispatch(getApartment())
      };
    };
    

class Login extends React.Component {

    constructor(props){
        super(props);
        this.props.getApartment();
        this.state = { fontsAreLoaded: true };
        Toast.show('Click NEXT to proceed');


    }

  render() {
      
    const screenHT = Dimensions.get('window').height;
    const screenWT = Dimensions.get('window').width;
    const {goBack} = this.props.navigation;

    return (
       <Container>
        <StatusBar hidden={true} />

            <Header style={{backgroundColor: '#E93F3F'}}>
                <Left>
                    <Button transparent onPress={() => goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
            
                <Right>
                    <Text onPress={() => this.props.navigation.navigate("OTPScreen")} style={{color: 'white',paddingTop:10,height:45,width:45}}>Next</Text>
                </Right>
            </Header>
            <ScrollView >

                <View style={{width:'100%',height:800,backgroundColor:'white'}}>
                <Image resizeMode='contain' style={{ width:'100%',height:'100%', position: 'absolute', top:10, left: 0 }} source={require('../pics/splash.png')}/>
                <View style={{width:'100%',height:800,backgroundColor:'black' , position:'absolute',opacity:0.4}}>

                </View>
                <Text style={{fontSize:32, marginTop:10, marginBottom:10,fontWeight:'bold',color:'white', alignSelf:'center' ,elevation:4 ,fontFamily:'sans-serif-condensed'}}>Hey Foody!</Text>
                <Text style={{color:'white', fontSize:14,alignSelf:'center' ,elevation:4 ,fontFamily:'sans-serif'}}>Tell us about yourself and get started</Text>

                <View style={{height:340,width:'90%',backgroundColor:'white',position:'absolute',borderRadius:5,alignSelf:'center',marginTop:'40%'}}>
                <Form>
                    <Item floatingLabel primary>
                        <Label style={{fontSize:14}}><Image style={{ width:40,height:40,marginBottom:-5}}source={require('../pics/username.png')}/>    Username</Label>
                        <Input keyboardType='email-address' />
                    </Item>
                    <Item floatingLabel>
                        <Label style={{fontSize:14}}><Image style={{ width:40,height:40}} source={require('../pics/password.png')}/>    Password</Label>
                        <Input secureTextEntry require />
                    </Item>
                    <Item floatingLabel>
                        <Label style={{fontSize:14}}><Image style={{ width:40,height:40}} source={require('../pics/phone.png')}/>    Phone</Label>
                        <Input keyboardType='phone-pad' />
                    </Item>
                    
                    <View style={{flexDirection:'row',margin:15,marginTop:15}}>
                    <Image style={{ width:20,height:20,top:25}} source={require('../pics/apartment.png')}/>         
                    {/* <Picker
                        mode='dropdown'
                        textStyle={{fontSize:10}}
                        style={{ height: 50, width: 280,left:10}}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker> */}
                    <Dropdown
                        containerStyle={{width:260,left:10,top:-10}}
                        label='Select apartment'
                       
                        data={this.props.apartments[0]}
                    />
          
                    </View>

                    <Text style={{fontSize:14,color:'#7C7A7A',fontFamily:'Roboto',textAlign:'center'}}>By tapping next you are agreeing to the</Text>
                    <Text style={{fontSize:14,color:'#E93F3F',fontFamily:'Roboto',textAlign:'center',marginTop:5, textDecorationLine:'underline'}}>Privacy Policy Terms of Services</Text>
                </Form>
                </View>
                <Image resizeMode='contain' style={{ width:75,height:75,alignSelf:'center', position:'absolute',marginTop:'20%' }} source={require('../pics/dinelogo.png')}/>
                
                </View>
              </ScrollView>
        </Container>
    );
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Login);
