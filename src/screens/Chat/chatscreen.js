import React, { Component } from 'react'
import { View, Text, Container, Header, Footer, Item, Input, Icon, Content, Button, List, ListItem, Left } from 'native-base'
import { AsyncStorage, Alert, TouchableOpacity } from 'react-native'
import SocketIOClient from 'socket.io-client'
import ImagePicker from 'react-native-image-picker';
import axios from 'axios'
import { connect } from 'react-redux';
import { fetchChatListByOne } from '../../../app/actions/chats/chats';
import firebase from 'react-native-firebase'

class NamingHeader extends Component{

  async componentDidMount (){
      const id = await AsyncStorage.getItem('channel_id');
      axios.get (`https://whatsapparkademy.serveo.net/api/channel/${id}`)
      .then(result => this.setState({channel: result.data}))
  } 

  constructor(props) {
    super(props)
    this.state = {
      channel : ''
    }
  }

  render(){
    return(
      <View style={{top:20}}>
        <Text style={{color:'white', fontWeight: 'bold', left: 10, fontSize: 17}}>{this.state.channel.name}</Text>
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
      messages: [],
      pictureURL : 'https://www.unimib.it/sites/default/files/default_images/transgender_1.png'
    };
    this.socket = SocketIOClient('https://whatsapparkademy.serveo.net/',
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
        url: `https://whatsapparkademy.serveo.net/api/user/num=${phone}`
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

    selectPict(){
      options = {
          title: 'Select Avatar',
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
      };
      ImagePicker.showImagePicker(options, (response) => {
          this.setState({pictureURL: 'file://' + response.path})
          this.uploadImage()
      })
    }

    async uploadImage(){
      // console.log(this.state.pictureURL)
      // const imageRef = await firebase.storage().ref('ImageChatScreen').child('ghjghj')
      // console.log(imageRef)
      // await imageRef.put(this.state.pictureURL)
      const imageRef = firebase.storage().ref('profilePictures').child(this.props.data.verifyNumber._auth._user._user.phoneNumber)
        await imageRef.put(this.state.pictureURL)
        await imageRef.getDownloadURL().then(url => this.setState({pictureURL: url}))
    }

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
        url: `https://whatsapparkademy.serveo.net/api/chat/del=${id}`
    }).then(() => {
        axios({
            url: `https://whatsapparkademy.serveo.net/api/chat/ch=${this.state.channel_id}`,
            method: 'GET',
        }).then((result) => {
            this.setState({messages: result.data})
        })
    })
    }

  render() {
    return (
      <Container>
        <Content>
        {this.state.messages.map((data, index)=>{
            return(
              <List key={index}>
                <ListItem onPress={() => this.deleteAlert(data.id)}>
                  <Text>{data.name} : {data.message}</Text>
                </ListItem>
              </List>
            )
          })}
        </Content>
        <Footer style={{backgroundColor: 'white'}}>
        <Item rounded style={{width:280}}>
          <TouchableOpacity onPress={() => this.selectPict()}>
            <Icon style={{flexDirection: 'row', color:'grey'}} type="MaterialCommunityIcons" name="emoticon-happy" size={20} color="#000"/>
          </TouchableOpacity>
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


