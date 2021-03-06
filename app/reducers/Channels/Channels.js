const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    channels: [],
    channel: {}
}

const channelusers = function(state=initialState, action){
    switch(action.type){
        case 'GET_CHATLIST_PENDING':
            return {...state, fetching: true}
            break;
        case 'GET_CHATLIST_FULFILLED':
            return {...state, fetching: false, fetched: true, channels: action.payload.data}
            break;
        case 'GET_CHATLIST_REJECTED':
            return {...state, error: action.payload}
            break;
        default:
         return state
    }       
}

export default channelusers;