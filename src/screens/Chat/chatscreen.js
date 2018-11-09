import React, { Component } from 'react'
import { View, Text, Container, Header, Footer, Item, Input, Icon, Content, Button, List, ListItem, Left } from 'native-base'
import { AsyncStorage, Alert } from 'react-native'
import SocketIOClient from 'socket.io-client'
import axios from 'axios'
import { connect } from 'react-redux';
import { deleteChat  } from '../../../app/actions/chats/chats';

class NamingHeader extends Component{
  render(){
    return(
      <View style={{top:20}}>
        <Text style={{color:'white', fontWeight: 'bold', left: 10, fontSize: 17}}>{this.props.channels}</Text>
        <Icon type="Entypo" name="add-user" style={{color:'white', top:-20 , fontSize: 20, left: 200}} />
        <Icon type="Entypo" name="dots-three-vertical" style={{color: 'white', top:-38 , fontSize: 20, left: 270}}/>
      </View>
    )
  }
}

class ChatScreen extends Component {

  constructor() {
    super()
    this.state = {
      username: '',
      message: '',
      user_id: '',
      channel_id: '',
      messages: []
    };
    this.socket = SocketIOClient('http://35.231.253.135:5000/',
    {reconnection: true,
    reconnectionDelay: 500,
	  reconnectionAttempts: Infinity, 
	  transports: ['websocket'],});
    //
    this.socket.on('RECEIVE_MESSAGE', function (data) {
      addMessage(data);
    });
    const addMessage = data => {
      this.setState({ messages: [...this.state.messages, data] });
    };
  };
  async componentWillMount() {
      const phone = await AsyncStorage.getItem('phoneNumber')
      const channel = await AsyncStorage.getItem('channel_id')
      this.setState({
        channel_id: channel
      })
      await axios({
        method: 'GET',
        url: `http://35.231.253.135:5000/api/user/num=${phone}`
      }).then(data => {
        this.setState({
          username: data.data.name,
          user_id: data.data.id
        })
      })
      this.setState({
        messages: this.props.datachats.chats
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

  sendMessage = data => {
    this.socket.emit('SEND_MESSAGE', {
      name: this.state.username,
      message: this.state.message,
      channel_id: this.state.channel_id,
      user_id: this.state.user_id
    });
    this.setState({ message: '' });
};

  deleteAlert(id){
    Alert.alert(
      'Delete Chat!',
      'Delete Msg',
      [
        {text: 'Ok', onPress: () => this.delete(id)}
      ]
    ),
    { cancelable: true }
  }

  delete(id){
    axios({
      method: 'DELETE',
      url: `http://192.168.0.14:5000/api/chat/del=${id}`
  }).then(() => {
      axios({
          type:'FETCH_CHATLIST',
          payload: axios.get(`http://192.168.0.14:5000/api/chat/ch=${thi.state.channel_id}`)
      }).then((result) => {
          this.setState({message: result})
      })
  })
  }

  render() {
    return (
      <Container>
        <Content>
        {this.state.messages.map((data, index)=>{
            return(
              <List onPress={() => this.deleteAlert(data.id)} key={index}>
                <ListItem>
                  <Text>{data.name} : {data.message}</Text>
                </ListItem>
              </List>
            )
          })}
        </Content>
        <Footer style={{backgroundColor: 'white'}}>
        <Item rounded style={{width:280}}>
        
            <Icon style={{flexDirection: 'row', color:'grey'}} type="MaterialCommunityIcons" name="emoticon-happy" size={20} color="#000"/>
          <Input 
            value={this.state.message}
            onChangeText={data => this.setState({ message: data })}
            placeholder="type message..." 
            />
          </Item>
          <Button rounded
            style={{backgroundColor: '#00635A', top:2}}>
                <Icon onPress={() => this.sendMessage(this.state.message)} type="Entypo" name="paper-plane" style={{color:'white'}}/>
          </Button>
        </Footer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  datachats : state.datachats

})
export default connect(mapStateToProps)(ChatScreen);


