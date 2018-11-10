const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    contacts: [],
    contact: {}
}

const datacontacts = function(state=initialState, action){
    switch(action.type){
        case 'CREATE_CONTACT_PENDING':
            return {...state, fetching: true}
            break;
        case 'CREATE_CONTACT_FULFILLED':
            return {...state, fetching: false, fetched: true, contacts: [...state.contacts, action.payload.data]}
            break;
        case 'CREATE_CONTACT_REJECTED':
            return {...state, error: action.payload}
            break;
        case 'FETCH_CONTACT_PENDING':
            return {...state, fetching: true}
            break;
        case 'FETCH_CONTACT_FULFILLED':
            return {...state, fetching: false, fetched: true, contacts: action.payload.data}
            break;
        case 'FETCH_CONTACT_REJECTED':
            return {...state, error: action.payload}
            break;
        default:
         return state
    }       
}

export default datacontacts;