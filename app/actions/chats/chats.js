import axios from 'axios';

export function fetchChatListByOne(data){
    return{
        type:'FETCH_CHATLIST',
        payload: axios.get(`http://192.168.0.14:5000/api/chat/ch=${data}`)
    }
}