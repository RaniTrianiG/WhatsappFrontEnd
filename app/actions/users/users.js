
import firebase from 'react-native-firebase';
import axios from 'axios';

export function sendVerification(phone_number){
    return{
        type:'VERIFY_NUMBER',
        payload: firebase.auth().signInWithPhoneNumber(phone_number)
    };
}

export function createUsers(data){
    return{
        type:'CREATE_USER',
        payload: 

        axios({
            method: 'post',
            url: 'http://192.168.0.14:5000/api/user',
            data: data
          })
    };
}

