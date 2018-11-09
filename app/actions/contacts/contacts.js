import axios from 'axios';

export function createContacts(data){
    return{
        type:'CREATE_CONTACT',
        payload: 

        axios({
            method: 'post',
            url: 'http://192.168.0.14:5000/api/user/',
            data: data
          }),
    }
}
export function fetchContact(data){
    return{
        type:'FETCH_CONTACT',
        payload: axios.get(`http://192.168.0.14:5000/api/user/`)
    }
}