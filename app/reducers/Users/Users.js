const initialState = {
    fetching: false,
    fetched: false,
    error: null,

    verifyNumber: {}
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
        default: 
            return state;
    }
}

export default datausers;