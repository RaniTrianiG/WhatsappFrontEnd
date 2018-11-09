import axios from 'axios';

export function fetchChatList(){
    return{
        type:'GET_CHATLIST',
        payload: axios.get('https://whatsapparkademy.serveo.net/api/chatlist')
    }
}