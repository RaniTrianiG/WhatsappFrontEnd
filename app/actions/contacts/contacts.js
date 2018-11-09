import axios from 'axios';

export function createContacts(data){
    return{
        type:'CREATE_CONTACT',
        payload: 

        axios({
            method: 'post',
            url: 'https://whatsapparkademy.serveo.net/api/user/',
            data: data
          }),
    }
}
export function fetchContact(data){
    return{
        type:'FETCH_CONTACT',
        payload: axios.get(`https://whatsapparkademy.serveo.net/api/user/`)
    }
}