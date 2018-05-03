import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, Fab, View, CardItem, Tab, Picker,Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {StackNavigator,TabNavigator} from 'react-navigation';


export default class TodayTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          active: false,    isDateTimePickerVisible: false,datetime:'6:30PM-10:30PM',datetime1:'6:30PM-10:30PM',datetime2:'6:30PM-10:30PM'

        };
      }

      _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
      _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
     
      _handleDatePicked = (date,time) => {
        console.log('A date has been picked: ', date+'');
        this.setState({datetime:date+''})
        this._hideDateTimePicker();
      };
     
     
     
  render() {
    let data = [{
        value: '6:30PM-10:30PM',
      }, {
        value: '10:30AM-12:30PM',
      }, {
        value: '2:30PM-6:30PM',
      }];

    const screenHT = Dimensions.get('window').height;
    const screenWT = Dimensions.get('window').width;

   
    return (
        
        <Container style={{backgroundColor:'#EDF1F4',}}>
            <View style={{flex: 1,}}>
         
                <ScrollView style={{ padding:5}}>
                    <View style={{height:220}}>
                        <Card style={{margin:30}}>
                            <CardItem style={{}}>
                                <View style={{flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            paddingBottom:10
                                            }}>
                                            
                                    <Image  source={{uri: 'https://upload.wikimedia.org/wikipedia/hi/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png'}} style={{width: 20, height: 20,marginRight:20}} />
                                    <View style={{flex: 1,
                                            flexDirection: 'column',
                                            marginLeft:7,
                                            justifyContent: 'space-between'}}>
                            
                                        <Text style={{fontSize:18,fontWeight:'bold'}}>Mooli Paratha</Text>
                                        <Text note style={{fontSize:12}}>2 parathas and curd and pickle</Text>
                                        <Text note style={{fontSize:12}}>0 Bookmarks</Text>
                                    </View>
                                    <Text style={{fontSize:15,fontWeight:'bold',justifyContent:'flex-end',textAlignVertical:'bottom'}}>INR 88</Text>
                                </View>
                            </CardItem>
                            <CardItem style={{top:-15,
                                            borderBottomColor:'#EDF1F4',borderBottomWidth:1,
                                            borderTopColor:'#EDF1F4',borderTopWidth:1}}>
                                <Left>
                                    <Thumbnail small source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkLDPVexqmxsVBBLUhiNb6fuh8pvZuU7JHdRYEkSsNHwa3TI-Tw'}} />
                                    <Body>
                                        <Text style={{fontSize:14}}>Chef Name</Text>
                                        <Text note style={{fontSize:12}}>143 meals sold - 3 followers</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem style={{top:-10,
                                            }}> 
                                <View style={{flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'}}>
                                            
                                    <Icon style={{marginLeft:10}} name='grid' />
                                    <View style={{flex: 1,
                                                flexDirection: 'column',
                                                marginLeft:15,
                                                justifyContent: 'space-between'}}>
                                        <Text style={{fontSize:11}} note >DELIVERY TIME</Text>
                                        <View style={{width:100,top:-15}}>
                                            {/* <Picker
                                            mode="dropdown"
                                            textStyle={{fontSize: 5}}
                                            >
                                                <Picker.Item label="Set" value="time" />
                                                <Picker.Item label="6:30PM-10:30PM" value="java" />
                                                <Picker.Item label="6:30PM-10:30PM" value="js" />
                                            </Picker> */}
                                            <Dropdown
                                                containerStyle={{width:130,top:-15}}
                                                fontSize={12}
                                                data={data}
                                                value={this.state.datetime}
                                            />
                                        </View>
                                                                
                                    </View>
                                    <TouchableOpacity onPress={this._showDateTimePicker} >
                                        <View style={{height:35,width:120,borderRadius:8,borderColor:'#E93F3F',borderWidth:1,flexDirection:'row'}}>
                                            <Text style={{color:'#E93F3F',fontSize:12,textAlignVertical:'center',marginLeft:5}}>ADD TO CART</Text>
                                            <Icon style={{color:'#E93F3F',marginLeft:15,top:4}} name='arrow-forward'/>

                                        </View>
                                    </TouchableOpacity>
                                    {/* <Button iconRight bordered danger style={{height:30,width:115,paddingRight:5}}>
                                        <Text style={{fontSize:11}}>ADD TO CART</Text>
                                        <Icon  name='add' />
                                    </Button>                 */}
                                </View>
                            </CardItem>
                        </Card>
                    </View>

                    <View style={{height:220}}>
                        <Card style={{margin:30}}>
                            <CardItem style={{}}>
                                <View style={{flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            paddingBottom:10
                                            }}>
                                            
                                    <Image  source={{uri: 'https://upload.wikimedia.org/wikipedia/hi/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png'}} style={{width: 20, height: 20,marginRight:20}} />
                                    <View style={{flex: 1,
                                            flexDirection: 'column',
                                            marginLeft:7,
                                            justifyContent: 'space-between'}}>
                            
                                        <Text style={{fontSize:18,fontWeight:'bold'}}>Mooli Paratha</Text>
                                        <Text note style={{fontSize:12}}>2 parathas and curd and pickle</Text>
                                        <Text note style={{fontSize:12}}>0 Bookmarks</Text>
                                    </View>
                                    <Text style={{fontSize:15,fontWeight:'bold',justifyContent:'flex-end',textAlignVertical:'bottom'}}>INR 88</Text>
                                </View>
                            </CardItem>
                            <CardItem style={{top:-15,
                                            borderBottomColor:'#EDF1F4',borderBottomWidth:1,
                                            borderTopColor:'#EDF1F4',borderTopWidth:1}}>
                                <Left>
                                    <Thumbnail small source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkLDPVexqmxsVBBLUhiNb6fuh8pvZuU7JHdRYEkSsNHwa3TI-Tw'}} />
                                    <Body>
                                        <Text style={{fontSize:14}}>Chef Name</Text>
                                        <Text note style={{fontSize:12}}>143 meals sold - 3 followers</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem style={{top:-10,
                                            }}> 
                                <View style={{flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'}}>
                                            
                                    <Icon style={{marginLeft:10}} name='grid' />
                                    <View style={{flex: 1,
                                                flexDirection: 'column',
                                                marginLeft:15,
                                                justifyContent: 'space-between'}}>
                                        <Text style={{fontSize:11}} note >DELIVERY TIME</Text>
                                        <View style={{width:100,top:-15}}>
                                            {/* <Picker
                                            mode="dropdown"
                                            textStyle={{fontSize: 5}}
                                            >
                                                <Picker.Item label="Set" value="time" />
                                                <Picker.Item label="6:30PM-10:30PM" value="java" />
                                                <Picker.Item label="6:30PM-10:30PM" value="js" />
                                            </Picker> */}
                                            <Dropdown
                                                containerStyle={{width:130,top:-15}}
                                                fontSize={12}
                                                data={data}
                                                value={this.state.datetime1}

                                            />
                                        </View>
                                                                
                                    </View>
                                    <TouchableOpacity onPress={this._showDateTimePicker} >
                                        <View style={{height:35,width:120,borderRadius:8,borderColor:'#E93F3F',borderWidth:1,flexDirection:'row'}}>
                                            <Text style={{color:'#E93F3F',fontSize:12,textAlignVertical:'center',marginLeft:5}}>ADD TO CART</Text>
                                            <Icon style={{color:'#E93F3F',marginLeft:15,top:4}} name='arrow-forward'/>

                                        </View>
                                    </TouchableOpacity>
                                    {/* <Button iconRight bordered danger style={{height:30,width:115,paddingRight:5}}>
                                        <Text style={{fontSize:11}}>ADD TO CART</Text>
                                        <Icon  name='add' />
                                    </Button>                 */}
                                </View>
                            </CardItem>
                        </Card>
                    </View>


                    <View style={{height:220}}>
                        <Card style={{margin:30}}>
                            <CardItem style={{}}>
                                <View style={{flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            paddingBottom:10
                                            }}>
                                            
                                    <Image  source={{uri: 'https://upload.wikimedia.org/wikipedia/hi/thumb/b/b2/Veg_symbol.svg/1024px-Veg_symbol.svg.png'}} style={{width: 20, height: 20,marginRight:20}} />
                                    <View style={{flex: 1,
                                            flexDirection: 'column',
                                            marginLeft:7,
                                            justifyContent: 'space-between'}}>
                            
                                        <Text style={{fontSize:18,fontWeight:'bold'}}>Mooli Paratha</Text>
                                        <Text note style={{fontSize:12}}>2 parathas and curd and pickle</Text>
                                        <Text note style={{fontSize:12}}>0 Bookmarks</Text>
                                    </View>
                                    <Text style={{fontSize:15,fontWeight:'bold',justifyContent:'flex-end',textAlignVertical:'bottom'}}>INR 88</Text>
                                </View>
                            </CardItem>
                            <CardItem style={{top:-15,
                                            borderBottomColor:'#EDF1F4',borderBottomWidth:1,
                                            borderTopColor:'#EDF1F4',borderTopWidth:1}}>
                                <Left>
                                    <Thumbnail small source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkLDPVexqmxsVBBLUhiNb6fuh8pvZuU7JHdRYEkSsNHwa3TI-Tw'}} />
                                    <Body>
                                        <Text style={{fontSize:14}}>Chef Name</Text>
                                        <Text note style={{fontSize:12}}>143 meals sold - 3 followers</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem style={{top:-10,
                                            }}> 
                                <View style={{flex: 1,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'}}>
                                            
                                    <Icon style={{marginLeft:10}} name='grid' />
                                    <View style={{flex: 1,
                                                flexDirection: 'column',
                                                marginLeft:15,
                                                justifyContent: 'space-between'}}>
                                        <Text style={{fontSize:11}} note >DELIVERY TIME</Text>
                                        <View style={{width:100,top:-15}}>
                                            {/* <Picker
                                            mode="dropdown"
                                            textStyle={{fontSize: 5}}
                                            >
                                                <Picker.Item label="Set" value="time" />
                                                <Picker.Item label="6:30PM-10:30PM" value="java" />
                                                <Picker.Item label="6:30PM-10:30PM" value="js" />
                                            </Picker> */}
                                            <Dropdown
                                                containerStyle={{width:130,top:-15}}
                                                fontSize={12}
                                                data={data}
                                                value={this.state.datetime2}

                                            />
                                        </View>
                                                                
                                    </View>
                                    <TouchableOpacity onPress={this._showDateTimePicker} >
                                        <View style={{height:35,width:120,borderRadius:8,borderColor:'#E93F3F',borderWidth:1,flexDirection:'row'}}>
                                            <Text style={{color:'#E93F3F',fontSize:12,textAlignVertical:'center',marginLeft:5}}>ADD TO CART</Text>
                                            <Icon style={{color:'#E93F3F',marginLeft:15,top:4}} name='arrow-forward'/>

                                        </View>
                                    </TouchableOpacity>
                                    {/* <Button iconRight bordered danger style={{height:30,width:115,paddingRight:5}}>
                                        <Text style={{fontSize:11}}>ADD TO CART</Text>
                                        <Icon  name='add' />
                                    </Button>                 */}
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
                style={{ backgroundColor: 'orange' }}
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
            <DateTimePicker
            mode='datetime'
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          is24Hour={false}
          onCancel={this._hideDateTimePicker}
        />
        </Container>
    );
  }
}



