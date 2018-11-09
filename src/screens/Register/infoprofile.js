import React, { Component } from 'react';
import { Image, StyleSheet, View, AsyncStorage, TouchableOpacity } from 'react-native';
import { Container, Header, Label, Item, Content, Card, Form, Input, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Picker } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createUsers, getJWT } from '../../../app/actions/users/users';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { axios } from 'axios';
import firebase from 'react-native-firebase'

class infoprofile extends Component {
    constructor(){
        super()
        this.state = {
            pictureURL: 'https://www.unimib.it/sites/default/files/default_images/transgender_1.png',
            name: null
        }
    }

    static navigationOptions = {
        header: null
    }

    selectPict(){
        options = {
            title: 'Select Avatar',
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
        };
         ImagePicker.showImagePicker(options, async (response) => {
            await this.setState({pictureURL: 'file://' + response.path})
            await this.uploadImage()
        })
    }

    async uploadImage(){
        const imageRef = await firebase.storage()
        console.log(imageRef)
        await imageRef.put(this.state.pictureURL)
        await imageRef.getDownloadURL().then(url => this.setState({pictureURL: url}))
    }

    createDataUser(phone, name, pictureURL){
        this.props.dispatch(createUsers({
            phone_number:phone,
            name: name,
            profile_picture_url: pictureURL
        })).then(async () => {
            await this.props.dispatch(getJWT({
                phone_number: phone
            })).then(async () => {
                await AsyncStorage.setItem('TOKEN', this.props.data.token)
            }).then(() => this.props.navigation.navigate('home'))
        })
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
                    <TouchableOpacity onPress={() => this.selectPict()} >
                        <Thumbnail style={{width:40, height:40}} source={{uri: this.state.pictureURL}} />
                        </TouchableOpacity>
                        <Item style={{width: 150, left: 50, top: -55}}>
                        <Input onChangeText={(text) => this.setState({ name: text })} style={{width: 150, paddingLeft: 50, paddingRight: 50}}/>
                        </Item>
                        <Icon style={{left: 220, top: -80}}
                         type="MaterialCommunityIcons" name="emoticon-happy" />
                    </View> 
                    <View style={{paddingTop: 350, left: 150}}>
                        <Button onPress={() => this.createDataUser(this.props.data.verifyNumber._auth._user._user.phoneNumber, this.state.name, this.state.pictureURL)} success={this.state.name? true : false} disabled={this.state.name? false : true}>
                            <Text>Next</Text>
                        </Button>
                    </View>
            </Content>
          </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.datausers
})

export default connect(mapStateToProps)(infoprofile)