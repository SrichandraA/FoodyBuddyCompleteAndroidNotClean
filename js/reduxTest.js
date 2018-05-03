import React, { Component } from 'react';
import { Container, Header,Label, Content, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet,TextInput} from 'react-native';
import { connect } from "react-redux";
import { addCustomer,getCustomer } from "./actions/index";
import data from './data/data';
const mapStateToProps = state => {
    return { customers: state.customers,
                info: state.info
             };
  };
  
  const mapDispatchToProps = dispatch => {
      return {
        addCustomer: customer => dispatch(addCustomer(customer)),
        getCustomer:info =>dispatch(getCustomer())
      };
    };
    
 class Redux extends React.Component {

    constructor(props){
        super(props);
        this.state = {value:'',username:'',password:''};
        this.props.getCustomer();

        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submit = this.submit.bind(this);

    }

    usernameChange(text){
         this.setState({username:text});
    }
    passwordChange(text){
        this.setState({password:text});
    }

  submit(){
    this.props.addCustomer({username:this.state.username,password:this.state.password});
  }

  render() {
    let listItems = this.props.info.map((customer) =>
    <Text key='x' >
        {customer.title}{customer.section}
    </Text>);
    return (
        <Container>
            <Header/>
       <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input onChangeText={this.usernameChange} />
            </Item>
            <Item fixedLabel>
              <Label>Password</Label>
              <Input onChangeText={this.passwordChange}/>
            </Item>
            <Item fixedLabel last>
            <Button onPress={this.submit} >
                <Text>Submit</Text>
            </Button>
            </Item>
          </Form>
          <Text>{listItems}</Text>
          
      </Container>
    );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Redux);


