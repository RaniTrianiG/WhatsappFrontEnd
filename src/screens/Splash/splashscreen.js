import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class splashscreen extends Component {

  static navigationOptions = {
    header: null
  }

  render() {

    return (
        <View style={{backgroundColor: '#596269', top: 10}}>
            <CardItem style={{backgroundColor: 'green'}}>
                <Image source = {require ('../../img/whatsapp-background.png')} 
                style={{height: 550, opacity: 20, right: 20, top: -30, bottom:0}} />
                <View style={{position: 'absolute', top: 60, left: 120, top: 180}}>
                    <Image style={{width:120, height:120, top: -50}}
                    source={require('../../img/whatsapp-logo.png')} />
                </View>
                <View style={{position: 'absolute', top: 60, left: 60}}>
                    <Text style={{color:'white', fontSize: 25}}>Welcome to WhatsApp</Text>
                </View>
                <View style={{position: 'absolute', top: 280, left: 20}}>
                    <Text style={{color:'#CCDFDD', fontSize: 20}}>
                        Cross-platform mobile messaging 
                    </Text>
                </View>
                <View style={{position: 'absolute', top: 318, left: 40}}>
                    <Text style={{color:'#CCDFDD', fontSize: 20}}>
                        with friends all over the world
                    </Text>
                </View>
                <View style={{position: 'absolute', top: 380, left: 30}}>
                    <Thumbnail style={{width:40, height:40}}
                    source={require('../../img/icon-android.png')} />
                </View>
                <View style={{position: 'absolute', top: 380, left: 90}}>
                    <Thumbnail style={{width:40, height:40}}
                    source={require('../../img/icon-windows.png')} />
                </View>
                <View style={{position: 'absolute', top: 380, left: 150}}>
                    <Thumbnail style={{width:40, height:40}}
                    source={require('../../img/icon-ovi.png')} />
                </View>
                <View style={{position: 'absolute', top: 380, left: 215}}>
                    <Thumbnail style={{width:40, height:40}}
                    source={require('../../img/icon-androids.png')} />
                </View>
                <View style={{position: 'absolute', top: 380, left: 280}}>
                    <Thumbnail style={{width:40, height:40}}
                    source={require('../../img/icon-bbm.png')} />
                </View>
                <View style={{position: 'absolute', top: 440, left: 90}}>
                    <Text style={{color:'#4EBAD6', fontSize: 20}}>
                        TERMS OF SERVICE
                    </Text>
                </View>
            </CardItem>
            
        <Button style={{backgroundColor:'#9D9D9D', fontSize: 20, height: 70, top: 2, left: 90}}>
            <Text style={{color:'black', textAlign: 'center'}}>Agree and continue</Text>
        </Button>
        </View>
    );
  }
}

const style = StyleSheet.create({
  splash:{
    resizeMode : 'stretch',
    height: '30%',
    width: '100%'
  }
})