import React from "react";
import { StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  View,
  Right,Picker,Form, Tab, Tabs, Thumbnail,TabHeading, ScrollableTab 
} from "native-base";
// import { Dropdown } from 'react-native-material-dropdown';
import TodayTab from './SecondScreenTabs/TodayTab';
import TomorrowTab from './SecondScreenTabs/TomorrowTab';
import RequestTab from './SecondScreenTabs/RequestTab';
import PlannerTab from './SecondScreenTabs/PlannerTab';


export default class Second extends React.Component {

//   async componentWillMount() {
//     await Expo.Font.loadAsync({
//       'Roboto': require('native-base/Fonts/Roboto.ttf'),
//       'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
//     });
//     this.setState({fontsAreLoaded: false});
// }
  constructor(props) {
    super(props);
    this.state = { fontsAreLoaded: true };
  }
  render() {
    // if (this.state.fontsAreLoaded) {
    //   return <Expo.AppLoading />;
    // }
    return (
      <Container>
        <Header style={{height:80,backgroundColor: '#E93F3F',paddingTop:13}} hasTabs >
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
          <View style={{flex: 1,
          flexDirection: 'column',
          marginLeft:15,
          justifyContent: 'space-between'}}>
            <Text style={{fontSize:10,color:'white',top:15}} note >YOUR LOCATION</Text>
            <Picker
                mode="dropdown"
                style={{ width: 160,height:50,color:'white' }}
                
              >
                <Picker.Item label="FoodyBuddy" value="key0" />
                <Picker.Item label="FoodyBuddy" value="key1" />
            
              </Picker>
              </View>
            </Body>
          <Right />
        </Header>
          <Tabs initialPage={0} renderTabBar={()=> <ScrollableTab />} style={{backgroundColor:'#E93F3F'}} >
            <Tab heading={<TabHeading style={{backgroundColor: '#E93F3F'}}>
                    <Text style={{color: '#ffffff',fontSize:12}}>TODAY</Text>
                  </TabHeading>}>
                  <TodayTab navigation={this.props.navigation}/>
            </Tab> 
            <Tab heading={<TabHeading style={{backgroundColor: '#E93F3F'}}>
                        <Text style={{color: '#ffffff',fontSize:12}}>TOMORROW</Text>
                      </TabHeading>}>
                      <TodayTab navigation={this.props.navigation}/>
            </Tab>  
            <Tab heading={<TabHeading style={{backgroundColor: '#E93F3F'}}>
                          <Text style={{color: '#ffffff',fontSize:12}}>REQUEST</Text>
                        </TabHeading>}>
                        <RequestTab navigation={this.props.navigation}/>
            </Tab> 
            <Tab heading={<TabHeading style={{backgroundColor: '#E93F3F'}}>
                        <Text style={{color: '#ffffff',fontSize:12}}>PLANNER</Text>
                      </TabHeading>}>
                      <PlannerTab navigation={this.props.navigation}/>
            </Tab>  
            <Tab heading={<TabHeading style={{backgroundColor: '#E93F3F'}}>
                          <Text style={{color: '#ffffff',fontSize:12}}>FEED</Text>
                        </TabHeading>}>
            </Tab>  

          </Tabs>
      </Container>
    );
  }
}