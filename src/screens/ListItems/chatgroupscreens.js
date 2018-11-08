import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
// import Button from "./Button"
import {Button} from 'native-base';
import io from "socket.io-client";
// import $ from 'jquery'

class Chat extends Component {

  state = {
    username: 'Mahardicka',
    text: '',
    channel_id: '5',
    messages: []
  }

  componentDidMount() {
    this.socket = io('http://192.168.0.14:5000', { transports: ['websocket'] });
    this.socket.on('chat message', (msg) => this.changeState(msg))
  }

  handleChange = (value) => {
    this.socket.emit('chat message',{
      name: this.state.username,
      text: this.state.text,
      channel_id: this.state.channel_id
    }, value);
    this.setState({ text: "" })
  }

  changeState = (msg) => {
    this.setState({ messages: [...this.state.messages, msg] })
  }

  renderMessages = () => {
    return this.state.messages.map((message, index) => {
      return (
        <Text key={index}>
          {message}
        </Text>
      )
    })
  }

  render() {
    return (
      <View>
        <View>
          <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} value={this.state.text} onChangeText={(text) => this.setState({ text: text })} placeholder="Type message here!" />
        </View>
        <View style={styles.buttonStyle}>
          <Button onPress={() => this.handleChange(this.state.text)}>
            <Text>Send</Text>
          </Button>
        </View>
        <ScrollView>
          {this.renderMessages()}
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  buttonStyle: {
    marginTop: 20,
    height: 30
  }
}

export
  default
  Chat