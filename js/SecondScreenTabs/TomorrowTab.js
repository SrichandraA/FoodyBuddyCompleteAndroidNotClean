import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, Fab, View, CardItem, Tab, Picker,Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet,ScrollView} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';


export default class TomorrowTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          active: false
        };
      }
  render() {
    let data = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pear',
      }];

    const screenHT = Dimensions.get('window').height;
    const screenWT = Dimensions.get('window').width;

   
    return (
        <Container style={{backgroundColor:'#D4DADD',}}>
            <View style={{flex: 1,}}>
                <View style={{
                            marginLeft:15,
                            marginRight:15,
                            height:80,
                            marginTop:15,
                            marginBottom:-40,
                            flexDirection: 'row',
                            justifyContent: 'space-between'}}>
                    <Text style={{flex:20,fontSize:12,color:'#E93F3F',marginTop:8}}>FILTER BY</Text>

                    <Button iconLeft bordered danger style={{flex:20,height:30,marginRight:10,paddingRight:15}}>
                        <Icon name='settings' />
                        <Text style={{fontSize:11}}>CHEF</Text>
                    </Button>
                    <Button iconLeft bordered danger style={{flex:20,height:30,paddingRight:25}}>
                        <Icon name='settings' />
                        <Text style={{fontSize:11}}>OTHER</Text>
                    </Button>
                    <View style={{flex:20}}></View>
                </View>
                <ScrollView style={{ padding:5}}>
                    <View style={{height:230}}>
                        <Card style={{margin:30}}>
                            <CardItem>
                                <View style={{flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'}}>
                                            
                                    <Image  source={{uri: 'https://upload.wikimedia.org/wikipedia/hi/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png'}} style={{width: 20, height: 20,marginRight:20}} />
                                    <View style={{flex: 1,
                                            flexDirection: 'column',
                                            marginLeft:30,
                                            justifyContent: 'space-between'}}>
                            
                                        <Text style={{fontSize:18,fontWeight:'bold'}}>Mooli Paratha</Text>
                                        <Text note style={{fontSize:12}}>2 parathas and curd and pickle</Text>
                                        <Text note style={{fontSize:12}}>0 Bookmarks</Text>
                                    </View>
                                    <Text style={{fontSize:15,fontWeight:'bold',justifyContent:'flex-end',textAlignVertical:'bottom'}}>INR 88</Text>
                                </View>
                            </CardItem>
                            <CardItem >
                                <Left>
                                    <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkLDPVexqmxsVBBLUhiNb6fuh8pvZuU7JHdRYEkSsNHwa3TI-Tw'}} />
                                    <Body>
                                        <Text style={{fontSize:15}}>Chef Name</Text>
                                        <Text note style={{fontSize:12}}>143 meals sold - 3 followers</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <View style={{flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'}}>
                                            
                                    <Icon style={{marginLeft:30}} name='grid' />
                                    <View style={{flex: 1,
                                                flexDirection: 'column',
                                                marginLeft:20,
                                                justifyContent: 'space-between'}}>
                                        <Text style={{fontSize:12}} note >DELIVERY TIME</Text>
                                        <View style={{width:100,top:-15}}>
                                            <Picker
                                            mode="dropdown"
                                            textStyle={{fontSize: 5}}
                                            >
                                                <Picker.Item label="Set" value="time" />
                                                <Picker.Item label="6:30PM-10:30PM" value="java" />
                                                <Picker.Item label="6:30PM-10:30PM" value="js" />
                                            </Picker>
                                        </View>
                                                                
                                    </View>
                                    <Button iconRight bordered danger style={{height:30,width:115,paddingRight:5}}>
                                        <Text style={{fontSize:11}}>ADD TO CART</Text>
                                        <Icon  name='add' />
                                    </Button>                
                                </View>
                            </CardItem>
                        </Card>
                    </View>

                    <View style={{height:230}}>
                        <Card style={{margin:30}}>
                            <CardItem>
                                <View style={{flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'}}>
                                            
                                    <Image  source={{uri: 'https://upload.wikimedia.org/wikipedia/hi/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png'}} style={{width: 20, height: 20,marginRight:20}} />
                                    <View style={{flex: 1,
                                            flexDirection: 'column',
                                            marginLeft:30,
                                            justifyContent: 'space-between'}}>
                            
                                        <Text style={{fontSize:18,fontWeight:'bold'}}>Mooli Paratha</Text>
                                        <Text note style={{fontSize:12}}>2 parathas and curd and pickle</Text>
                                        <Text note style={{fontSize:12}}>0 Bookmarks</Text>
                                    </View>
                                    <Text style={{fontSize:15,fontWeight:'bold',justifyContent:'flex-end',textAlignVertical:'bottom'}}>INR 88</Text>
                                </View>
                            </CardItem>
                            <CardItem >
                                <Left>
                                    <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkLDPVexqmxsVBBLUhiNb6fuh8pvZuU7JHdRYEkSsNHwa3TI-Tw'}} />
                                    <Body>
                                        <Text style={{fontSize:15}}>Chef Name</Text>
                                        <Text note style={{fontSize:12}}>143 meals sold - 3 followers</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <View style={{flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'}}>
                                            
                                    <Icon style={{marginLeft:30}} name='grid' />
                                    <View style={{flex: 1,
                                                flexDirection: 'column',
                                                marginLeft:20,
                                                justifyContent: 'space-between'}}>
                                        <Text style={{fontSize:12}} note >DELIVERY TIME</Text>
                                        <View style={{width:100,top:-15}}>
                                            <Picker
                                            mode="dropdown"
                                            textStyle={{fontSize: 5}}
                                            >
                                                <Picker.Item label="Set" value="time" />
                                                <Picker.Item label="6:30PM-10:30PM" value="java" />
                                                <Picker.Item label="6:30PM-10:30PM" value="js" />
                                            </Picker>
                                        </View>
                                                                
                                    </View>
                                    <Button iconRight bordered danger style={{height:30,width:115,paddingRight:5}}>
                                        <Text style={{fontSize:11}}>ADD TO CART</Text>
                                        <Icon  name='add' />
                                    </Button>                
                                </View>
                            </CardItem>
                        </Card>
                    </View>

                                        <View style={{height:230}}>
                        <Card style={{margin:30}}>
                            <CardItem>
                                <View style={{flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'}}>
                                            
                                    <Image  source={{uri: 'https://upload.wikimedia.org/wikipedia/hi/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png'}} style={{width: 20, height: 20,marginRight:20}} />
                                    <View style={{flex: 1,
                                            flexDirection: 'column',
                                            marginLeft:30,
                                            justifyContent: 'space-between'}}>
                            
                                        <Text style={{fontSize:18,fontWeight:'bold'}}>Mooli Paratha</Text>
                                        <Text note style={{fontSize:12}}>2 parathas and curd and pickle</Text>
                                        <Text note style={{fontSize:12}}>0 Bookmarks</Text>
                                    </View>
                                    <Text style={{fontSize:15,fontWeight:'bold',justifyContent:'flex-end',textAlignVertical:'bottom'}}>INR 88</Text>
                                </View>
                            </CardItem>
                            <CardItem >
                                <Left>
                                    <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkLDPVexqmxsVBBLUhiNb6fuh8pvZuU7JHdRYEkSsNHwa3TI-Tw'}} />
                                    <Body>
                                        <Text style={{fontSize:15}}>Chef Name</Text>
                                        <Text note style={{fontSize:12}}>143 meals sold - 3 followers</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <View style={{flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'}}>
                                            
                                    <Icon style={{marginLeft:30}} name='grid' />
                                    <View style={{flex: 1,
                                                flexDirection: 'column',
                                                marginLeft:20,
                                                justifyContent: 'space-between'}}>
                                        <Text style={{fontSize:12}} note >DELIVERY TIME</Text>
                                        <View style={{width:100,top:-15}}>
                                            <Picker
                                            mode="dropdown"
                                            textStyle={{fontSize: 5}}
                                            >
                                                <Picker.Item label="Set" value="time" />
                                                <Picker.Item label="6:30PM-10:30PM" value="java" />
                                                <Picker.Item label="6:30PM-10:30PM" value="js" />
                                            </Picker>
                                        </View>
                                                                
                                    </View>
                                    <Button iconRight bordered danger style={{height:30,width:115,paddingRight:5}}>
                                        <Text style={{fontSize:11}}>ADD TO CART</Text>
                                        <Icon  name='add' />
                                    </Button>                
                                </View>
                            </CardItem>
                        </Card>
                    </View>
                </ScrollView>
            </View>
            <Fab
                active={this.state.active}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: '#5067FF' }}
                position="bottomRight"
                onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="share" />
                    <Button style={{ backgroundColor: '#34A34F' }}>
                        <Icon name="logo-whatsapp" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                        <Icon name="logo-facebook" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#DD5144' }}>
                        <Icon name="mail" />
                    </Button>
            </Fab>
        </Container>
    );
  }
}



