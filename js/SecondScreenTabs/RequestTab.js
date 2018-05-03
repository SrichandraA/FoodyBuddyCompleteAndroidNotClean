// import React, { Component } from 'react';
// import { Container, Header, Content,DeckSwiper, TabHeading, Card, View, CardItem, Tab, Tabs, Thumbnail, Button, Text ,Form, Item, Input,Left, Body, Right, Icon, Title } from 'native-base';
// import Expo from 'expo';
// import { Image, TouchableHighlight, Alert,Dimensions ,StyleSheet,ViewPagerAndroid} from 'react-native';
import {StyleSheet, View, Text,ScrollView,Image,TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import GridLayout from 'react-native-layout-grid';
import Toast from 'react-native-simple-toast';



export default class RequestTab extends React.Component {
    constructor(props){
        super(props);
        Toast.show('Click on SOUPS,SNACKS or other 4 to test', Toast.LONG);

    }
    
  renderGridItem = (item) => (
      <TouchableOpacity onPress={()=>this.props.navigation.navigate("PopularDishes")} >
    <View style={styles.item}  >
      <View style={styles.flex} />
      <Image style={styles.image} source={item.iconn}/>
      <Text style={styles.name}>
        {item.name}
      </Text>
      <Text note style={styles.note}>
        {item.note}
      </Text>
    </View>
    </TouchableOpacity>
  );
 
  render() {
    const items = [{name:'SOUPS (9)',note:'E.g.Tomato Soup',iconn:require("./pics/soup.jpg")},{name:'SNACKS (6)',note:'E.g.Vada Pav, Paneer Tikka',iconn:require("./pics/snack.jpg")},{name:'MAIN COURSE (8)',note:'E.g.Rajma Chawal',iconn:require("./pics/maincourse.png")},
    {name:'DESSERTS (2)',note:'E.g.Chocolate Cake',iconn:require("./pics/dessert.jpg")},{name:'BEVERAGES (5)',note:'E.g.Milkshake',iconn:require("./pics/beverages.png")},{name:'OTHERS (1)',note:'E.g.Bread',iconn:require("./pics/other.jpg")}];

    return (
        <ScrollView>
            <View style={{flex:1,backgroundColor:'#e3e4e5'}}>
                <IndicatorViewPager
                    autoPlayEnable	
                    style={{height:230}}
                    indicator={this._renderDotIndicator()}
                >
                    <View style={{backgroundColor:'black'}}>
                        <Image style={{width: '100%', height: 230}} source={require('./pics/one.jpg')}/>
                    </View>
                    <View style={{backgroundColor:'black'}}>
                        <Image style={{width: '100%', height: 230}} source={require('./pics/two.jpg')}/>
                    </View>
                    <View style={{backgroundColor:'black'}}>
                        <Image style={{width: '100%', height: 230}} source={require('./pics/three.jpg')}/>
                    </View>
                </IndicatorViewPager>

                <Text style={{fontSize:12,color:'#a0a3a5',margin:3,backgroundColor:'#e3e4e5'}} note> VIEW POPULAR DISHES</Text>
                <View style={styles.container}>
                    <View style={styles.flex}>
                        <GridLayout
                            items={items}
                            itemsPerRow={2}
                            renderItem={this.renderGridItem}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
            );
        }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
      backgroundColor: '#e3e4e5',
    },
    welcome: {
    },
    flex: {
      flex: 1,
    },
    item: {
      height: 150,
      backgroundColor: 'white',
      padding: 10,
      elevation:3
    },
    name: {
      fontSize: 14,
      top:-50,
      textAlign: 'center',
      color: '#38393a'
    },
    image: {
      height:25,
      marginLeft:60,
      top:-60,
      width:25
    },
    note: {
      fontSize: 10,
      top:-40,
      textAlign: 'center',
      color: '#a0a3a5'
    },
  });
      