import React, { Component } from 'react';
import { Container, Header, Content, Left, Right, Body, Thumbnail, Text, Icon, Item, Input, Label, Button } from 'native-base';
import { FlatList, View, Alert } from 'react-native';
import {connect} from 'react-redux';
import { createContacts } from '../../../app/actions/contacts/contacts';

class Addcontacts extends Component{

    constructor(){
        super()
        this.state = {
            name: '',
            phone_number: ''
        }
    }

    createDataUser(phone, name, pictureURL){
        this.props.dispatch(createContacts({
            phone_number:phone,
            name: name,
            profile_picture_url: pictureURL
        }))
        .then(() => Alert.alert('Notification','Succeed to save!',
        [
            {text: 'OK', onPress: () => this.props.navigation.navigate('ContactScreen')}
        ],
        { cancelable: true }
    ))
    }

    static navigationOptions = {
        header: null
    }

    render(){
        return(
          <Container>
              <Header style={{backgroundColor:'white'}}>
            <Left>
                <Button onPress={this.props.navigation.navigate('ContactScreen')} transparent style={{backgroundColor: 'white'}}>
                    <Icon type="FontAwesome" name="close" style={{color:'black', fontSize: 20}} />
                </Button>
            </Left>
            <Body>
                <Text style={{color:'black', fontWeight: 'bold', left:60}}>Save Contacts</Text>
            </Body>
            <Right>
                <Button transparent style={{backgroundColor:'white'}}
                onPress={() => this.createDataUser(this.state.name, this.state.phone_number)}>
                <Icon type="Entypo" name="check" style={{color: 'black', fontSize: 20}}/>
                </Button>
            </Right>
          </Header>
            <Content>                
                    <Icon type="Entypo" name="add-user" style={{color: 'black', fontSize: 40, color:'grey', marginTop: 35, paddingLeft: 160}}/>

                <Item style={{width: 300, left: 30}}>
                    <Input style={{color:'grey'}} disabled/>
                </Item>
                <Item fixedLabel style={{width: 300, left: 30, paddingTop: 50}}>
                    <Input keyboardType="phone-pad" placeholder="Phone Number"
                        onChangeText={(phone_number) => this.setState({phone_number: phone_number})}/>
                </Item>
                <Item fixedLabel style={{width: 300, left: 29, paddingTop: 50}}>
                    <Input placeholder="Name"  
                        onChangeText={(name) => this.setState({name: name})}/>
                </Item>
            </Content>
          </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        datacontacts : state.datacontacts
    }
}

export default connect(mapStateToProps)(Addcontacts);