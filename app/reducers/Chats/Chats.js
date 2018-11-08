const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    chats: [],
    chat: {}
}

const datachats = function(state=initialState, action){
    switch(action.type){
        case 'FETCH_CHATLIST_PENDING':
            return {...state, fetching: true}
            break;
        case 'FETCH_CHATLIST_FULFILLED':
            return {...state, fetching: false, fetched: true, chats: action.payload.data}
            break;
        case 'FETCH_CHATLIST_REJECTED':
            return {...state, error: action.payload}
            break;
        default:
         return state
    }       
}

export default datachats;