import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, Label, Item, Content, Card, Form, Input, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Picker } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { createUsers } from '../../../app/actions/users/users';

class registerscreen extends Component {

    constructor(){
		super();
		this.state = {
            selected : undefined,
            phone_number: ''
		}
    }
      onValueChange2(value) {
        this.setState({
          gender: value
        });
    }
    phoneVerification(){
        firebase.auth().signInWithPhoneNumber(this.state.phone_number)
        .then(result => this.dispatch(createUsers(result)))
        .then(this.props.navigation.navigate('codeverification'))
    }

    static navigationOptions = {
        header: null
    }


    render() {
        return (
            <Container>
            <Header noShadow={true}
            style={{backgroundColor: 'white'}}>
              <Text style={{color: '#1F6E43', top: 20, fontWeight:'bold'}}>Verify your phone number</Text>
              <FontAwesome 
              style={{color: 'grey', fontWeight: 'bold', left: 40, top: 22, fontSize: 20}} name="ellipsis-v"/>
            </Header>
            <Content>
                    <Text style={{textAlign: 'center', top: 10, paddingRight: 15, paddingLeft: 15}}>
                    WhatsApp will send an SMS message to verify your phone number. Enter your country code and phone number:
                    </Text>
                    <View style={{paddingLeft: 60, paddingRight: 60, top: 30}}>
                        <Item success>
							<Picker
                                mode="dropdown"
                               e style={{ width: undefined }}
                                placeholder="Choose a country"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                                <Picker.Item label="United States" value="United States" />
                                <Picker.Item label="Indonesia" value="Indonesia" />
                            </Picker>
                        </Item>
                        <Item success style={{borderBottomWidth: 0}}>
                            <Icon type="Entypo" name="plus"
                            style={{color:'grey'}} />
                            <Item success style={{width: 50}}>
                              <Input  placeholder="62" />
                            </Item>
                            <Item success style={{width: 153}}>
                               <Input  placeholder="No. Telp" />
                            </Item>
                        </Item>
                    </View> 
                    <Button onPress={() => this.phoneVerification()} style={{marginTop: 60, left: 140, backgroundColor: 'green'}}>
                        <Text style={{color: 'white'}}>NEXT</Text>
                    </Button>
                    <Text style={{color:'grey', textAlign: 'center', marginTop: 10}}>Carrier SMS charges may apply</Text>
            </Content>
          </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        usertodos : state.usertodos.usertodos
    }
}
export default connect(mapStateToProps)(registerscreen);