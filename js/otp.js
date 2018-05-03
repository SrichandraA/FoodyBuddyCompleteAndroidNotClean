import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import Toast from 'react-native-simple-toast';


export default class First extends React.Component {
    constructor(props){
        super(props);
        Toast.show('Click on DONE or enter verification Code is 1234 to proceed', Toast.LONG);

    }
    onFinishCheckingCode2=(code)=>{
            if(code === true){
                this.props.navigation.navigate("FirstScreen");
            }
            else{
                Toast.show("Wrong Code !")
            }
    }
  render() {
    const screenHT = Dimensions.get('window').height;
    const screenWT = Dimensions.get('window').width;
    const {goBack} = this.props.navigation;

    return (
        <Container>


            <Header style={{backgroundColor: '#E93F3F'}}>
                <Left>
                    <Button transparent onPress={() => goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Text style={{color:'white',marginLeft:-25}}>Phone Verification</Text>
                </Body>
                <Right>
                    <Text onPress={() => this.props.navigation.navigate("FirstScreen")} style={{color: 'white',paddingTop:10,height:45,width:45}}>Done</Text>
                </Right>
            </Header>
            <View style={{width:'100%',height:screenHT,backgroundColor:'white'}}>
            <Image resizeMode='contain' style={{opacity:0.4, width:'100%',height:'100%', position: 'absolute', top:-15, left: 0 }} source={require('../pics/splash.png')}/>
            <View style={{height:200,width:'100%',backgroundColor:'white',borderColor:'black', borderWidth:1,borderRadius:5,alignSelf:'center',marginTop:15}}>

                <Text style={{marginTop:8,alignSelf:'center',color:'#7f7f7f'}}>Enter Verification Code </Text>
                      <CodeInput
        ref="codeInputRef2"
        keyboardType="numeric"
        codeLength={4}
        className='border-circle'
        compareWithCode='1234'
        autoFocus={false}
        size={50}
        containerStyle={{marginBottom:60}}
        codeInputStyle={{color:'#7f7f7f' , fontWeight: '800',borderColor:'#7f7f7f',borderWidth:1,textDecorationLine:'underline' }}
        onFulfill={(code) => this.onFinishCheckingCode2(code)}
      />
                      <Text style={{top:-45,alignSelf:'center', fontSize:14 ,color:'#7f7f7f'}}>You should be getting a text message shortly</Text>
                      <Text onPress={()=>Toast.show("Code is 1234")} style={{top:-25,alignSelf:'center', fontSize:16, fontWeight:'bold' ,color:'#E93F3F'}}>RESEND</Text>

            </View>
            </View>
            </Container>

    );
  }
}



