// ini untuk get function dari folder actions

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    users: [],
    user: {}
}

const datausers = function(state = initialState, action){
    switch(action.type){
       case 'CREATE_FETCH_USER_PENDING' :
       return {...state, fetching: true};
       break;
       case 'CREATE_FETCH_USER_FULFILLED' :
       return {...state, fetching: false, fetched: true, users : [...state.users, action.payload.data]};
       break;
       case 'CREATE_FETCH_USER_REJECTED' :
           return {...state, error: action.payload};
       break;

       case 'UPDATE_FETCH_USER_PENDING' : // untuk loading/pending data
           return {...state, fetching: true};
       break;
       case 'UPDATE_FETCH_USER_FULFILLED' : // jika data sukses, akan melakukan action ini
       const updated = state.users.map(user => {
        if (user.id == action.payload.data.id) {
          return action.payload.data;
        }
        return user;
      })
     return {...state, fetching : false, fetched: true, user : action.payload.data, users : updated };
           break;
       case 'UPDATE_FETCH_USER_REJECTED' : // jika data gagal / error maka data akan melakukan action ini
           return {...state, fetching: false, error: action.payload};
       break;

       case 'DELETE_FETCH_USER_PENDING' :
           return {...state, fetching: true};
       break;
       case 'DELETE_FETCH_USER_FULFILLED' :
       return {...state, fetching: false, fetched: true, users: state.users.filter(users => users.id !== action.payload.data.id)};
       break;
       case 'DELETE_FETCH_TODO_REJECTED' :
           return {...state, error: action.payload};
       break;

       default :
    }
    return state;
}
export default datausers;