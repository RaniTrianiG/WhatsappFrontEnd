import axios from 'axios';

export function fetchChatListByOne(data){
    return{
        type:'FETCH_CHATLIST',
        payload: axios.get(`http://192.168.0.14:5000/api/chat/ch=${data}`)
    }
}

export function deleteChat(data){
    return{
        type: 'DELETE_CHAT',
        payload: axios({
            method: 'DELETE',
            url: `http://192.168.0.14:5000/api/chat/del=${data}`
        }).then(() => {
            axios({
                type:'FETCH_CHATLIST',
                payload: axios.get(`http://192.168.0.14:5000/api/chat/ch=${data}`)
            })
        })
    }
}