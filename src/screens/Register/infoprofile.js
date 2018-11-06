import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity, ImageStore } from 'react-native';
import { Container, Header, Label, Item, Content, Card, Form, Input, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Picker } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createUsers } from '../../../app/actions/users/users';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios'


import { connect } from 'react-redux';

class infoprofile extends Component {

    constructor(){
        super()
        this.state = {
            name: null,
            pictureURL: 'https://www.unimib.it/sites/default/files/default_images/transgender_1.png',
            pictureBase64: ''
        }
    }

    static navigationOptions = {
        header: null
    }

    createDataUser(phone, name, pictureURL){
        // this.props.dispatch(createUsers({
        //     phone_number:phone,
        //     name: name,
        //     profile_picture_url: pictureURL
        // }))
        // .then(() => this.props.navigation.navigate('home'))
        alert(phone + ' , ' + name + ' , ' + pictureURL)
    }
    selectPict(){
        options = {
            title: 'Select Avatar',
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            this.setState({pictureURL: 'file://' + response.path})
            this.encodePicture()
        })
    }

    encodePicture(){
        ImageStore.getBase64ForTag(this.state.pictureURL, success => {this.setState({pictureBase64: success}); this.uploadImage()}, failure => alert(failure))
        // const formData = new FormData()
        // formData.append('type', 'file')
        // formData.append('image', this.state.pictureURL)
        // console.log(formData)
        // fetch('https://api.imgur.com/3/image', {
        //     method: 'POST',
        //     headers: { 
        //         Accept: 'application/json',
        //         Authorization: 'Client-ID 189d19488806d70'
        //     },
        //     body: formData
        // }).then(response => alert(response))
        // .catch(err => alert(err))
    }

    uploadImage(){
        const formData = new FormData()
        formData.append('image', this.state.pictureBase64)
        axios({
            url: 'https://api.imgur.com/3/image',
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Authorization': 'Client-ID 189d19488806d70'
            },
            data: formData
        }).then(response => response.map(i => console.log(i)))
        .catch(err => alert('Error: ' + err))
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
                        <Thumbnail style={{width:40, height:40}}
                        source={{uri: this.state.pictureURL}} />
                        </TouchableOpacity>
                        <Item style={{width: 150, left: 50, top: -55}}>
                            <Input onChangeText={(text) => this.setState({ name: text })} style={{width: 150, paddingLeft: 50, paddingRight: 50}}/>
                        </Item>
                        <Icon style={{left: 220, top: -80}}
                         type="MaterialCommunityIcons" name="emoticon-happy" />
                    </View> 
                    <View style={{paddingTop: 350, left: 150}}>
                        <Button onPress={() => this.createDataUser(this.props.data.verifyNumber._auth._user._user.phoneNumber, this.state.name, this.state.pictureURL)} style={{backgroundColor: 'green'}}>
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