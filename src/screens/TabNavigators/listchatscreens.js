import React, { Component } from 'react';
import {View, Text, AsyncStorage, StyleSheet, Image, FlatList, Alert} from 'react-native';
import {Icon, Button, Container, ListItem, Header, Content, Left, Title, Right, Card, CardItem, Fab, Thumbnail, Body, Item, Input, List} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import { fetchChatList } from '../../../app/actions/channels/channels';
import { fetchChatListByOne } from '../../../app/actions/chats/chats';

class listchatscreens extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            val:''
          }
        }
    
        componentDidMount() { 
            this.props.dispatch(fetchChatList());
        }
    
       async handleNavigate(item) {
           await AsyncStorage.removeItem('channel_id')
           await AsyncStorage.setItem('channel_id', `${item}`)
           await this.props.dispatch(fetchChatListByOne(item));
           await this.props.navigation.push('ChatScreen');
        }

        _keyExtractor = ({id}, index) => id.toString();
    
        renderItem = ({item, index}) => (
        <List>
            <ListItem thumbnail onPress={() => this.handleNavigate(item.id)}>
                <Left>
                    <Thumbnail source={require('../../img/rani.jpg')} />
                </Left>
                <Body style={{paddingRight:20}}>
                    <Text style={{fontWeight:'bold'}}>{item.name}</Text>
                    <Text note>{item.message}</Text>
                </Body>
            </ListItem>
        </List>
     );
    
      render() {
        return (
          <Container>
            <Content>
                  <FlatList
                        data={this.props.channelusers.channels}
                        keyExtractor={this._keyExtractor}
                        renderItem={this.renderItem}
                    />
            </Content>
            <Fab style={{ backgroundColor: '#00635A' }}
                        onPress={() => this.props.navigation.navigate('ContactScreen')}>
                    <Icon type="MaterialIcons" name="message" style={{ backgroundColor: '#00635A' }}/>
            </Fab>
          </Container>
        )
      }
    }
    const mapStateToProps = (state) => ({
            channelusers : state.channelusers

    })
    export default connect(mapStateToProps)(listchatscreens);
    