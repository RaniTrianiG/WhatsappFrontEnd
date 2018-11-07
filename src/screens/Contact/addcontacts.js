import React, { Component } from 'react';
import { Container, Head, Content, Left, Body, Thumbnail, Text, Icon, Item, Input, Label } from 'native-base';
import { FlatList, View } from 'react-native';


class NamingHeader extends Component{
    render(){
      return(
        <View style={{top:20}}>
          <Text style={{color:'black', fontWeight: 'bold', left: 10, fontSize: 17, top:-10, paddingLeft: 60}}>Save Contacts</Text>
          <Icon type="Entypo" name="check" style={{color: 'black', left: 270, top:-30 , fontSize: 20}}/>
        </View>
      )
    }
  }

class Addcontacts extends Component{
    static navigationOptions = {
        headerTitleStyle: {
            color: 'black'
        },
        headerStyle: {
            backgroundColor: 'white'
        },
        headerTintColor: 'black',
        headerTitle: <NamingHeader />
    }
    render(){
        return(
          <Container>
            <Content>
                <Icon type="Entypo" name="add-user" style={{color: 'black', fontSize: 40, color:'grey', marginTop: 35, paddingLeft: 160}}/>
                <Item style={{width: 300, left: 30}}>
                    <Input style={{color:'grey'}} disabled/>
                </Item>
                <Item fixedLabel  style={{width: 300, left: 30, top: 40}}>
                    <Input  placeholder="Number"/>
                </Item>
                <Item fixedLabel  style={{width: 300, left: 29, paddingTop: 50}}>
                    <Input placeholder="Phone Number" />
                </Item>
            </Content>
          </Container>
        )
    }
}

export default Addcontacts;