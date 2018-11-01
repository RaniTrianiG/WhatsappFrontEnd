import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, Label, Item, Content, Card, Form, Input, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Picker } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

class codeverification extends Component {

    static navigationOptions = {
        header: null
    }


    render() {
        console.log(this.props.usertodos.users)
        return (
            <Container>
            <Header noShadow={true}
            style={{backgroundColor: 'white'}}>
              <Text style={{color: '#1F6E43', top: 20, fontWeight:'bold'}}>Verification +62 895412955704</Text>
              <FontAwesome 
              style={{color: 'grey', fontWeight: 'bold', left: 40, top: 22, fontSize: 20}} name="ellipsis-v"/>
            </Header>
            <Content>
                    <Text style={{textAlign: 'center', marginTop: 10, paddingRight: 15, paddingLeft: 15}}>
                    Waiting for automatic SMS detection that has been sent to +62 895412955704. Incorrect number?
                    </Text>
                    <View >
                        <Item style={{width: 20, left: 70}}>
                            <Input />
                        </Item>
                        <Item style={{width: 20, left: 110, top: -51}}>
                            <Input />
                        </Item>
                        <Item style={{width: 20, left: 150, top: -102}}>
                            <Input />
                        </Item>
                        <Item style={{width: 20, left: 190, top: -153}}>
                            <Input />
                        </Item>
                        <Item style={{width: 20, left: 230, top: -204}}>
                            <Input />
                        </Item>
                        <Item style={{width: 20, left: 270, top: -255}}>
                            <Input />
                        </Item>
                        <Item success style={{width:260, left: 50, top: -279}}>
                            <Input disabled/>
                        </Item>
                        <Text style={{textAlign: 'center', color: 'grey', top: -265}}>Enter a 6 digits code</Text>
                    </View> 
                    <View>
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
                        <Button onPress={() => this.props.navigation.navigate('infoprofile')}>
                            <Text>Just for Try</Text>
                        </Button>
                    </View>
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
export default connect(mapStateToProps)(codeverification);