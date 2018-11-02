import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Card, CardItem, Fab, Thumbnail, Title, Button, Icon, Left, Right, Body} from 'native-base';

export default class listchatscreens extends Component{

    render(){
        return(
            <Container>
                    <Content contentContainerStyle={{
                        flex: 1,
                        alignItems: 'center',
                        backgroundColor: 'white'
                        }}>
                        <Text>Ini Chat List</Text>
                    </Content>
                    <Fab style={{ backgroundColor: 'green' }}
                        onPress={() => this.props.navigation.navigate('ContactScreen')}>
                    <Icon type="MaterialIcons" name="message" style={{ backgroundColor: 'green' }}/>
                    </Fab>
                {/*
                <Image
                source={require('../images/todo.png')}
                />
                    <Button bordered dark style={{width:170, height: 70, top:20, left: 5}}>
                    <Text style={{color:'#BFEF89', left: 40}}>USER TRENDS</Text>
                    </Button>
                    <Button bordered dark style={{width:170, height:70, left: 185, top: -50}}>
                    <Text style={{left:40, color:'#BFEF89'}}>USER TYPES</Text>
                    </Button>
                    <Text style={{fontSize:50, color:'white', right:90, top: -40}}>465</Text>
                    <Text style={{fontSize:50, color:'white', top: -105, left: 100}}>45 %</Text>
                    <Text style={{top:-120, color:'white', right:88}}>Daily Views</Text>
                    <Text style={{top:-138, color:'white', left:90}}>User Increase</Text>
                </Content> */}
      </Container>
        )
    }
}