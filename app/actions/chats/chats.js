import axios from 'axios';

export function fetchChatListByOne(data){
    return{
        type:'FETCH_CHATLIST',
        payload: axios.get(`http://35.231.253.135:5000/api/chat/ch=${data}`)
    }
}

