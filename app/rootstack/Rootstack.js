import React, {Component} from 'react';
import {Platform, View, Text, Image, StyleSheet} from 'react-native';
import {createStackNavigator, createTabNavigator} from 'react-navigation';
import {Container, Content, Header, Body,Right, Left, Icon, Thumbnail} from 'native-base';


import splashscreens from '../../src/screens/Splash/splashscreen';
import Register from '../../src/screens/Register/registerscreen';
import codeverification from '../../src/screens/Register/codeverification';
import infoprofile from '../../src/screens/Register/infoprofile';
import listchatscreens from '../../src/screens/TabNavigators/listchatscreens';
import liststatusscreens from '../../src/screens/TabNavigators/liststatuscreens';
import listcallscreens from '../../src/screens/TabNavigators/listcallscreens';
import ContactScreen from '../../src/screens/Contact/contactsreens';
import ChatScreen from '../../src/screens/Chat/chatscreen';

export default class Rootstack extends Component {

    render() {
      return (
        <MyApp />
      );
    }
  }

class NamingHeader extends Component{
  render(){
    return(
      <View style={{top:20}}>
        <Text style={{color:'white', fontWeight: 'bold', left: 10, fontSize: 17, top: 10}}>WhatsApp</Text>
        <Icon name="ios-search" style={{color: 'white', left: 290, top:-10, fontSize: 25}} />
        <Icon type="Entypo" name="dots-three-vertical" style={{color: 'white', left: 320, top:-32 , fontSize: 20}}/>
      </View>
    )
  }
}

  const MyTab = createTabNavigator({
    Chat: listchatscreens,
    Status: liststatusscreens,
    Calls: listcallscreens
  }, {
    tabBarOptions: {
      inactiveTintColor: '#AACBC8',
      style: {
        backgroundColor: '#00635A',
        fontWeight: 'bold'
      },
      indicatorStyle: {
        backgroundColor: 'white'
      }
    }
  })

const MyApp = createStackNavigator({ 
  splashscreens: splashscreens,
  registerscreen : Register,
  codeverification: codeverification,
  infoprofile: infoprofile,
  listchatscreens: listchatscreens,
  ChatScreen: ChatScreen,
  ContactScreen: ContactScreen, 
  home: {
    screen: MyTab,
    navigationOptions: {
      headerLeft: null,
      headerStyle: {
        backgroundColor: '#00635A',
        elevation: 0
      },
      headerTitle: <NamingHeader />
    }
  }
});

