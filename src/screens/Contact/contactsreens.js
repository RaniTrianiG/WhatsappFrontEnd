import React, { Component } from 'react';
import { Container, Head, Content, Left, Body, List, ListItem, Thumbnail, Text, Icon } from 'native-base';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
// import Contacts from 'react-native-contacts';
import { fetchContact } from '../../../app/actions/contacts/contacts';

class NamingHeader extends Component{
    render(){
      return(
        <View style={{top:20}}>
          <Text style={{color:'white', fontWeight: 'bold', left: 10, fontSize: 17, top: 3}}>Choose Contacts</Text>
          <Text style={{color:'white', left: 10, fontSize: 10, top: 8}}>28 Contacts</Text>
          <Icon name="ios-search" style={{color: 'white', left: 230, top:-25, fontSize: 25}} />
          <Icon type="Entypo" name="dots-three-vertical" style={{color: 'white', left: 270, top:-50 , fontSize: 20}}/>
        </View>
      )
    }
  }

class ContactScreen extends Component {
    constructor(){
        super()
        this.state = {
            contacts: ''
        }
    }

    static navigationOptions = {
        headerTitleStyle: {
            color: 'white'
        },
        headerStyle: {
            backgroundColor: '#00635A'
        },
        headerTintColor: '#fff',
        headerTitle: <NamingHeader />
    }

    handleNavigate = (item) => {
        this.props.navigation.push('ChatScreen')
    }

    _keyExtractor = ({id}, index) => id.toString();

    componentDidMount(){
        // // parameter 'err' jangan di hapus
        // Contacts.getAll((err, contacts) => {
        //     this.setState({contacts: contacts})
        // })
        this.props.dispatch(fetchContact());
    }

    render(){
        return(
            <Container>
                <Content>
                    <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../../img/grup-logo-chat.png')} style={{ height: 40, width: 40 }}/>
                        </Left>
                        <Body>
                            <Text>New Group</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar onPress={() => this.props.navigation.navigate('Addcontacts')}>
                        <Left>
                            <Thumbnail source={require('../../img/new-contact.png')} style={{ height: 40, width: 40 }}/>
                        </Left>
                        <Body>
                            <Text>New Contact</Text>
                        </Body>
                    </ListItem>
                        <FlatList
                            data={this.props.datacontacts.contacts}
                            keyExtractor={this._keyExtractor}
                            renderItem={({item}) =>
                                <ListItem avatar onPress={() => this.handleNavigate(item)}>
                                    <Left>
                                        <Thumbnail source={{uri: "http://profilepicturesdp.com/wp-content/uploads/2018/06/default-profile-picture-whatsapp-9.jpg"}} style={{ height: 50, width: 50 }}/>
                                    </Left>
                                    <Body>
                                        {/* <Text>{item.givenName + ' ' + item.familyName }</Text> */}

                                        <Text>{item.name}</Text>
                                        <Text>{item.phone_number}</Text>
                                    </Body>
                                </ListItem>
                            }
                            keyExtractor={({rawContactId}, index) => index.toString()}
                        />
                        <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../../img/share-icon.png')} style={{ height: 30, width: 30 }}/>
                        </Left>
                        <Body>
                            <Text>Invite Friend</Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../../img/question-icon.png')} style={{ height: 30, width: 30 }}/>
                        </Left>
                        <Body>
                            <Text>Help Contact</Text>
                        </Body>
                    </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    datacontacts : state.datacontacts

})
export default connect(mapStateToProps)(ContactScreen);