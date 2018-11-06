import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, Label, Item, Spinner, Content, Card, Form, Input, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Picker } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';

class codeverification extends Component {
    constructor(){
        super()
        this.state = {
            number: ''
        }
    }

    static navigationOptions = {
        header: null,
    }

    confirm(number){
        this.props.data.verifyNumber.confirm(number)
        .then(() => this.props.navigation.navigate('infoprofile'))
        .catch(err => alert(err))
    }

    render() {
        if(this.props.data.fetching === true){
            return(
                <Spinner />
            )
        }

        return (
            <Container>
            <Header noShadow={true}
            style={{backgroundColor: 'white'}}>
              <Text style={{color: '#1F6E43', top: 20, fontWeight:'bold'}}>Verification {this.props.data.verifyNumber._auth._user._user.phoneNumber}</Text>
              <FontAwesome 
              style={{color: 'grey', fontWeight: 'bold', left: 40, top: 22, fontSize: 20}} name="ellipsis-v"/>
            </Header>
            <Content>
                    <Text style={{textAlign: 'center', marginTop: 10, paddingRight: 15, paddingLeft: 15}}>
                    Waiting for automatic SMS detection that has been sent to {this.props.data.verifyNumber._auth._user._user.phoneNumber}. Incorrect number?
                    </Text>
                    <View >
                    <Input maxLength={6} keyboardType="phone-pad" onChangeText={(text) => this.setState({number: text})}/>
                    <Text style={{textAlign: 'center', color: 'grey', top: -265}}>Enter a 6 digits code</Text>
                    </View> 
                    <Button disabled={this.state.number.length !== 6? true : false} onPress={() => this.confirm(this.state.number)}>
                        <Text style={{textAlign: 'center'}}>OK</Text>
                    </Button>
                    <View style={{top: 300}}>
                        <Icon type="Entypo" name="typing"
                                style={{color:'grey', left: 30, top: -250}} />
                        <Text 
                        style={{color:'grey', textAlign: 'center', top: -276, right: 60}}>
                        Resend SMS
                        </Text>
                        <Item style={{width:320, left: 20, top: -310}}>
                            <Input disabled/>
                        </Item>
                        <Icon type="Entypo" name="phone"
                                style={{color:'grey', left: 30, top: -300}} />
                        <Text 
                        style={{color:'grey', textAlign: 'center', top: -325, right: 80}}>
                        Call me
                        </Text>
                    </View>
            </Content>
          </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.datausers
})

export default connect(mapStateToProps)(codeverification)