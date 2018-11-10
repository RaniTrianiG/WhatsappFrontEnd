
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
        payload: axios({
            method: 'post',
            url: 'https://whatsapparkademy.serveo.net/api/user/',
            data: data
        })
    };
}
        
          export function getJWT(data){
            return{
                type: 'GET_JWT',
                payload: axios({
                    method: 'post',
                    url: 'https://whatsapparkademy.serveo.net/api/login/',
                    data: data
                })
            }
        }

