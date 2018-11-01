const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    registerNumber: ''
}

const datausers = function(state=initialState, action){
    switch(action.type) {
        case 'CREATE_USERS_PENDING':
            return {...state, fetching: true}
            break;
        case 'CREATE_USERS_FULFILLED':
            return {...state, fetching: false, fetched: true, registerNumber: action.payload}
            break;
        case 'CREATE_USERS_REJECTED':
            return {...state, fetching: false, error: action.payload}
            break;
        default: 
            return state;
    }
}

export default datausers