import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, Label, Item, Content, Card, Form, Input, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Picker } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class infoprofile extends Component {

    static navigationOptions = {
        header: null
    }


    render() {
        return (
            <Container>
            <Header noShadow={true}
            style={{backgroundColor: 'white'}}>
              <Text style={{color: '#1F6E43', top: 20, fontWeight:'bold'}}>Info profile</Text>
              <FontAwesome 
              style={{color: 'grey', fontWeight: 'bold', left: 80, top: 22, fontSize: 20}} name="ellipsis-v"/>
            </Header>
            <Content>
                    <Text style={{textAlign: 'center', color: 'grey', top: 10, paddingRight: 15, paddingLeft: 15}}>
                    Please provide your name and profile photo (optional)
                    </Text>
                    <View style={{paddingLeft: 60, paddingRight: 60, top: 30}}>
                        <Thumbnail style={{width:40, height:40}}
                        source={require('../../img/info-profil.png')} />
                        <Item style={{width: 150, left: 50, top: -55}}>
                            <Input style={{width: 150, paddingLeft: 50, paddingRight: 50}}/>
                        </Item>
                        <Icon style={{left: 220, top: -80}}
                         type="MaterialCommunityIcons" name="emoticon-happy" />
                    </View> 
                    <View style={{paddingTop: 350, left: 150}}>
                        <Button style={{backgroundColor: 'green'}}>
                            <Text>Next</Text>
                        </Button>
                    </View>
            </Content>
          </Container>
        );
    }
}