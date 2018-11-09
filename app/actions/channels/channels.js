import axios from 'axios';

export function fetchChatList(){
    return{
        type:'GET_CHATLIST',
        payload: axios.get('http://35.231.253.135:5000/api/chatlist')
    }
}