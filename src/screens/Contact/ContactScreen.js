import React, { Component } from 'react';
import { Container, Head, Content, Left, Body, List, ListItem, Thumbnail, Text } from 'native-base';
import { FlatList } from 'react-native';
import Contacts from 'react-native-contacts';

class ContactScreen extends Component {
    constructor(){
        super()
        this.state = {
            contacts: null
        }
    }

    componentDidMount(){
        // parameter 'err' jangan di hapus
        Contacts.getAll((err, contacts) => {
            this.setState({contacts: contacts})
        })
    }

    render(){
        return(
            <Container>
                <Content>
                    <List>
                        <FlatList
                            data={this.state.contacts}
                            renderItem={({item}) =>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={{uri: "http://profilepicturesdp.com/wp-content/uploads/2018/06/default-profile-picture-whatsapp-9.jpg"}}/>
                                    </Left>
                                    <Body>
                                        <Text>{item.givenName + ' ' + item.familyName}</Text>
                                        <Text>Status</Text>
                                    </Body>
                                </ListItem>
                            }
                            keyExtractor={({rawContactId}, index) => index.toString()}
                        />
                    </List>
                </Content>
            </Container>
        )
    }
}

export default ContactScreen;