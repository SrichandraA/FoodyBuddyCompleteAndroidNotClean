import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card, View, CardItem, CheckBox ,ListItem,
     Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet,TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export default class DayTab extends React.Component {
  constructor(props){
    super(props);
    this.checkHandler=this.checkHandler.bind(this);
    this.state={check:false,datetime:'6:30PM-10:30PM',pointerEvents:'none',opacity:0.4}
  }
  checkHandler(){
      this.setState({check:!this.state.check});
      if(this.state.pointerEvents === 'none'){
          this.setState({pointerEvents:'auto',opacity:1})
      }
      else{
        this.setState({pointerEvents:'none',opacity:0.4})

      }
  }
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
        <Container>
            <View style={{width:screenWT,height:150,backgroundColor:'#EDF1F4',padding:20}}>
                <Text style={{fontSize:14,color:'#9AA5AA',textAlignVertical:'center',lineHeight:25}}>
                    Select the meals you would like to order for the week. The meals displayed
                    below are either popular dishes in the apartment or are inspired from your preferences
                </Text>
            </View>
            <View style={{width:screenWT,height:65,backgroundColor:'#D5DBE2',paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10}}>
            <ListItem>
            <CheckBox color='#D02F43' checked={this.state.check} onPress={this.checkHandler} />
            <Body>
              <Text style={{fontWeight:'bold'}}>DINNER - between 8 PM to 9 PM</Text>
            </Body>
          </ListItem>
            </View>
            <View style={{height:220,opacity:this.state.opacity}} pointerEvents={this.state.pointerEvents}>
                        <Card style={{}}>
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
                    {
                        this.state.check &&
                        <View style={{marginBottom:0,top:40, padding:10 ,backgroundColor:'#9B3483',width:screenWT,height:80,flexDirection:'row'}}
                        >
                        <Image style={{width:30,height:30}} resizeMode='contain' source={require('../../pics/cart.png')}/>
                        <View style={{flexDirection:'column',marginLeft:15,marginRight:30}}
                        >
                            <Text style={{fontSize:12,color:'white'}}>1 ITEM SELECTED</Text>
                            <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>INR 80</Text>

                        </View>
                        <TouchableOpacity onPress={this._showDateTimePicker} >
                            <View style={{height:40,width:150,backgroundColor:'white' ,borderRadius:7,padding:7}}>
                                <Text style={{color:'#9B3483',fontSize:16,alignSelf:'center', fontWeight:'bold'}}>PROCEED</Text>

                            </View>
                        </TouchableOpacity>

                        </View>
                        
                    }

      </Container>
    );
  }
}



