import React, { Component } from 'react'
import { View, Text, Container, Header, Footer, Item, Input, Icon, Content, Button, List, ListItem } from 'native-base'
import { FlatList } from 'react-native'
import SocketIOClient from 'socket.io-client'
import axios from 'axios'



class ChatPersonalsScreens extends Component {
  constructor() {
    super()
    this.state = {
      username: 'Mahardicka',
      message: '',
      channel_id: '5',
      messages: []
    };
    this.socket = SocketIOClient('http://192.168.0.14:5000/',
      {
        reconnection: true,
        reconnectionDelay: 500,
        reconnectionAttempts: Infinity,
        transports: ['websocket'],
      });
    //
    this.socket.on('RECEIVE_MESSAGE', function (data) {
      addMessage(data);
    });
    const addMessage = data => {
      this.setState({ messages: [...this.state.messages, data] });
    };
    // this.sendMessage = data => {
    //   data.preventDefault();
    //   this.socket.emit('SEND_MESSAGE', {
    //     name: this.state.username,
    //     message: this.state.message,
    //     channel_id: this.state.channel_id
    //   });
    //   this.setState({ message: '' });
    //   console.log(data)
    //   console.log('////')
    // };
  };
  componentWillMount() {
    axios.get('http://192.168.0.14:5000/api/chat/ch=' + this.state.channel_id)
      .then(res => {
        const chat = res.data
        console.log(chat)
        this.setState({ messages: chat })
      })
  }
  sendMessage = data => {
    data.preventDefault();
    this.socket.emit('SEND_MESSAGE', {
      name: this.state.username,
      message: this.state.message,
      channel_id: this.state.channel_id
    });
    this.setState({ message: '' });
    console.log(data)
    console.log('////')
};
  render() {
    return (
      <Container>
        <Header />
        <Content>
          {this.state.messages.map((data, index) => {
            return (
              <List key={index}>
                <ListItem>
                  <Text>{data.name} : {data.message}</Text>
                </ListItem>
              </List>
            )
          })}
        </Content>
        <Footer>
          {/* <Item> */}
          <Input
            value={this.state.message}
            onChangeText={data => this.setState({ message: data })}
            onSubmitEditing ={this.sendMessage}
            placeholder="type message..." />
          
            <Text>Send</Text>
          
          {/* </Item> */}
        </Footer>
      </Container>
    )
  }
}

export default ChatPersonalsScreens