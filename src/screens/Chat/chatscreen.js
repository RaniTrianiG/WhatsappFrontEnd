import React, { Component } from 'react'
import { View, Text, Container, Header, Footer, Item, Input, Icon, Content, Button, List, ListItem, Left } from 'native-base'
import { FlatList } from 'react-native'
import SocketIOClient from 'socket.io-client'
import axios from 'axios'


class NamingHeader extends Component{
  render(){
    return(
      <View style={{top:20}}>
        <Text style={{color:'white', fontWeight: 'bold', left: 10, fontSize: 17, top: -10}}>NameChannel</Text>
        <Icon type="Entypo" name="dots-three-vertical" style={{color: 'white', top:-32 , fontSize: 20, left: 270}}/>
      </View>
    )
  }
}

export default class ChatScreen extends Component {

  constructor() {
    super()
    this.state = {
      username: 'Rani',
      message: '',
      channel_id: '5',
      messages: []
    };
    this.socket = SocketIOClient('http://192.168.0.14:5000/',
    {'reconnection': true,
    'reconnectionDelay': 500,
	  'reconnectionAttempts': Infinity, 
	  'transports': ['websocket'],});
    //
    this.socket.on('RECEIVE_MESSAGE', function (data) {
      addMessage(data);
    });
    const addMessage = data => {
      this.setState({ messages: [...this.state.messages, data] });
    };
    this.sendMessage = data => {
      data.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
        name: this.state.username,
        message: this.state.message,
        channel_id: this.state.channel_id
      });
      this.setState({ message: '' });
      console.log(data)
      console.log('////')
      // console.log(this.state.messages)
      // alert(JSON.stringify(this.state.messages))
    };
  };
  componentWillMount() {
    axios.get('http://192.168.0.14:5000/api/chat/ch=' + this.state.channel_id)
      .then(res => {
        const chat = res.data
        console.log(chat)
        this.setState({ messages: chat })
      })
  }

  static navigationOptions = {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#00635A',
      elevation: 0
    },
    headerTitle: <NamingHeader />
  }

  render() {
    return (
      <Container>
        <Content>
        {this.state.messages.map((data, index)=>{
            return(
              <List key={index}>
                <ListItem>
                  <Text>{data.name} : {data.message}</Text>
                </ListItem>
              </List>
            )
          })}
        </Content>
        <View style={{backgroundColor: 'white'}}>
        <Item rounded style={{width:280}}>
            <Icon style={{flexDirection: 'row', color:'grey'}} type="MaterialCommunityIcons" name="emoticon-happy" size={20} color="#000"/>
          <Input 
            value={this.state.message}
            onChangeText={data => this.setState({ message: data })}
            placeholder="type message..." 
            />
          <Button rounded
            style={{backgroundColor: '#00635A', top:2, left:70}}
            onPress={this.sendMessage}>
                <Icon type="Entypo" name="paper-plane" style={{color:'white'}}/>
          </Button>
        </Item>
        </View>
      </Container>
    )
  }
}


