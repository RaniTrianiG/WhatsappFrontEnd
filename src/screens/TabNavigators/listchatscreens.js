import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, FlatList, Alert} from 'react-native';
import {Icon, Button, Container, ListItem, Header, Content, Left, Title, Right, Card, CardItem, Fab, Thumbnail, Body, Item, Input, List} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import { fetchChatList } from '../../../app/actions/channels/channels';

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
    
        handleNavigate = (item) => {
            this.props.navigation.push('ChatScreen',item );
        }

        _keyExtractor = ({id}, index) => id.toString();
    
        renderItem = ({item, index}) => (
        <List>
            <ListItem thumbnail onPress={() => this.handleNavigate(item)}>
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
    