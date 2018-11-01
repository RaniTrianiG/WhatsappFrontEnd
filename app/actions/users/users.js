import firebase from 'react-native-firebase';
import axios from 'axios';

export function sendVerification(phone_number){
    return{
        type:'CREATE_USERS',
        payload: phone_number
    };
}