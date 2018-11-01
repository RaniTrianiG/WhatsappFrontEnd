import firebase from 'react-native-firebase';

export function sendVerification(phone_number){
    return{
        type:'VERIFY_NUMBER',
        payload: firebase.auth().signInWithPhoneNumber(phone_number)
    };
}