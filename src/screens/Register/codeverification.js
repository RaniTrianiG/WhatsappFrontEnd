import React, { Component } from 'react';
import { Image, StyleSheet, View, AsyncStorage } from 'react-native';
import { Container, Header, Label, Item, Content, Spinner, Card, Form, Input, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Picker } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase';
import infoprofile from './infoprofile';
import { connect } from 'react-redux';

class codeverification extends Component {

    constructor(){
        super()
        this.state = {
            phone_number: '',
            number: null,
            verifyNumber: null
        }
    }

    async componentDidMount(){
        const phone_number = await AsyncStorage.getItem('phone_number')
        this.setState({
            phone_number: phone_number
        })
    }

    confirm(number){
        this.props.data.verifyNumber.confirm(number)
        .then(() => this.props.navigation.navigate('infoprofile'))
        .catch(err => alert(err))
    }

    static navigationOptions = {
        header: null
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
              <Text style={{color: '#1F6E43', top: 20, fontWeight:'bold'}}>Verification Number {this.state.phone_number}</Text>
              <FontAwesome 
              style={{color: 'grey', fontWeight: 'bold', left: 40, top: 22, fontSize: 20}} name="ellipsis-v"/>
            </Header>
            <Content>
                    <Text style={{textAlign: 'center', marginTop: 10, paddingRight: 15, paddingLeft: 15}}>
                    Waiting for automatic SMS detection that has been sent.
                    </Text>
                     <View style={{top: 280}}>
                        <Item success style={{width:150, left: 80, top: -260}}>
                            <Input keyboardType="phone-pad" onChangeText={(text) => this.setState({number: text})}/>
                        </Item>
                        <Button onPress={() => this.confirm(this.state.number)} style={{left: 250, top: -300, backgroundColor:'green'}}>
                                <Text style={{textAlign: 'center'}}>OK</Text>
                            </Button>
                        <Text style={{textAlign: 'center', color: 'grey', top: -265}}>Enter a 6 digits code</Text>
                    </View> 
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

