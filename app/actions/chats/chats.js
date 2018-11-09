import axios from 'axios';

export function fetchChatListByOne(data){
    return{
        type:'FETCH_CHATLIST',
        payload: axios.get(`https://whatsapparkademy.serveo.net/api/chat/ch=${data}`)
    }
}

