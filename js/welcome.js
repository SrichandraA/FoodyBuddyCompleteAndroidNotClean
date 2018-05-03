import React, { Component } from 'react';
import { Container, Header, Content, Card, View, CardItem, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import { Image, TouchableHighlight, TouchableOpacity, Alert,Dimensions } from 'react-native';


export default class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = { fontsAreLoaded: true };
  }

  redirectHandler = () => {
    Alert.alert('please enter name and section !');

  }

    // async componentWillMount() {
    //     await Expo.Font.loadAsync({
    //       'Roboto': require('native-base/Fonts/Roboto.ttf'),
    //       'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    //     });
    //     this.setState({fontsAreLoaded: false});
    // }
  render() {
    const screenHT = Dimensions.get('window').height;
    const screenWT = Dimensions.get('window').width;

    // if (this.state.fontsAreLoaded) {
    //   return <Expo.AppLoading />;
    // }
    return (
      <Container>
       
       <Header style={{height:80}}>
         
          <Body>
            <Text style={{color:'white',
                          fontWeight:'bold',
                          fontSize:20,
                          top:10
                          }}>
                          FoodyBuddy Application
            </Text>
            
          </Body>
         
        </Header>
        <Content>
        <Card>
        <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://foodiesonfoot.ca/wp-content/uploads/2015/06/macrones.jpg'}} />
                <Body>
                  <Text>FoodyBuddy</Text>
                  <Text note>Delicious</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://foodiesonfoot.ca/wp-content/uploads/2015/06/macrones.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
           
          </Card>
          <TouchableHighlight
          onPress={()=>this.props.navigation.navigate('FirstScreen')}
          underlayColor = 'white'

 
        >
          <View style={{
            backgroundColor:'#0069D9',
            padding:10,
            borderRadius:5,
            height:40,
            width:300,
            justifyContent:'center',
            alignItems:'center',
            margin:10,
        
          }}>
            <Text style={{
                color:'white',
                fontWeight:'bold',
                fontSize:15
              }}>
              FiRsT ScReEn
            </Text>
          </View>
          
        </TouchableHighlight>
        <Button full success  onPress={()=>this.props.navigation.navigate('NavigationDrawer')}>
              <Text>Second Screen</Text>
            </Button>
            <View style={{flex:1, flexDirection: 'row',}}>
            <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('LoginScreen')}
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:100,
       height:100,
       margin:5,
       backgroundColor:'red',
       borderRadius:100,
     }}
 >
 <Text style={{fontFamily:'monospace',fontWeight:'bold',color:'white'}}>Login !</Text>
 </TouchableOpacity>
 <Button rounded warning style={{marginTop:15,marginLeft:10}} onPress={()=>this.props.navigation.navigate('FourthScreen')}>
              <Text>Fourth Screen</Text>
            </Button>
            <Button style={{marginTop:15,marginLeft:10}} onPress={()=>this.props.navigation.navigate('ReduxScreen')}>
              <Text>Redux</Text>
            </Button>
            </View>
        </Content>
      </Container>
    );
  }
}

