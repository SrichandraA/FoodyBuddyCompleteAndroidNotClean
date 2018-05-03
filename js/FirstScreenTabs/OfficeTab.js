import React, { Component } from 'react';
import { Container, Header, Content, TabHeading, Card,Toast, View,List,ListItem ,CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet, TextInput,FlatList,TouchableOpacity} from 'react-native';
import { connect } from "react-redux";
import { getOffice } from "../actions/index";

const mapStateToProps = state => {
    return { offices: state.offices,
               
             };
  };
  
  const mapDispatchToProps = dispatch => {
      return {
        getOffice:info =>dispatch(getOffice())
      };
    };
    

 class AppartmentTab extends React.Component {

    constructor(props){
	    super(props);
		this.state = {value:'',addresses:[],list:'',isLoaded:false};
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.props.getOffice();
    }

    onChangeHandler(text){
            // this.setState({value:text,list:'',addresses:[]});
            // if(text === ''){
            //     this.setState({list:'',addresses:[],isLoaded:false});
            //     this.setState({value:text});
            // }
            // else{
                
            //     fetch("http://maps.googleapis.com/maps/api/geocode/json?address="+text+"&sensor=true%27")
			// 	.then(res => res.json())
			// 	.then(
			// 		(result) => {
			// 			this.setState({
            //                 isLoaded: true
							
            //             });
			// 			for(let i = 0; i < result.results.length; i++){
            //                 this.state.addresses.push(JSON.stringify(result.results[i].formatted_address));
                         
			// 			}
         
			// 		},
		
			// 		(error) => {
			// 			this.setState({
			// 				isLoaded: false,
							
			// 			});
			// 		}
			// 	)
            // }


    }
  render() {

    var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];


    const screenHT = Dimensions.get('window').height;
    const screenWT = Dimensions.get('window').width;
    return (
        <Container>
             <Content>
                <View style={{width:screenWT,
                            backgroundColor:'#FAFAFA',
                            height:90, 
                            paddingTop:20,
                            paddingBottom:20,
                            paddingLeft:10,
                            paddingRight:10,
                            justifyContent:'center',
                            alignItems:'center'}}>

                    <Item style={{backgroundColor:'white',elevation:3}}>
                        <Icon active name='search' style={{paddingLeft:10,color:'#cccccc'}} />
                        <Input style={{fontSize:14 , height:42,}} placeholderTextColor='#cccccc' placeholder='Search your Office' onChangeText={this.onChangeHandler } />
                    </Item>
                </View>
      
            <View>
                <FlatList

                    data={this.props.offices[0]}
                    renderItem={({item}) =>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("FourthScreen")}
                    >
                        <View style={{marginLeft:7,flex:1,flexDirection:'row',height:50,width:'100%',borderBottomColor:'#999999',borderBottomWidth:0.5}}>
                            <Image style={{ width:20,height:20,marginTop:15,opacity:0.5}} source={require('../../pics/apartment.png')}/>         
                            <Text style={{textAlignVertical:'center',marginLeft:10,color:'#4c4c4c',fontSize:14}} key='x'>{item.value}</Text>
                        </View>
                    </TouchableOpacity>
                    }
                    keyExtractor={() => Math.random().toString(36).substr(2, 9)}
                />                
            </View>
        </Content>
      </Container>
    );
   
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(AppartmentTab);
