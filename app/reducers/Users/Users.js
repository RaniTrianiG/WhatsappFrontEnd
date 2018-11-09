const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    users: [],
    token: '',

    verifyNumber: {}
    //phone_number: {}
}

const datausers = function(state=initialState, action){
    switch(action.type) {
        case 'VERIFY_NUMBER_PENDING':
            return {...state, fetching: true}
            break;
        case 'VERIFY_NUMBER_FULFILLED':
            return {...state, fetching: false, fetched: true, verifyNumber: action.payload}
            break;
        case 'VERIFY_NUMBER_REJECTED':
            return {...state, fetching: false, error: action.payload}
            break;
        case 'CREATE_USER_PENDING' :
           return {...state, fetching: true};
           break;
       case 'CREATE_USER_FULFILLED' :
            return {...state, fetching: false, fetched: true, users : [...state.users, action.payload.data]};
            break;
       case 'CREATE_USER_REJECTED' :
           return {...state, error: action.payload};
       break;
        default: 
            return state;
    }
}

export default datausers;