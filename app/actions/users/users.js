// ini untuk deklarasi function/actions

export function createUsers(data){
    return{
        type:'CREATE_FETCH_TODO',
        payload: data
    };
}

export function updateUsers(id, value){
    return{
        type: 'UPDATE_FETCH_TODO',
        payload: data
    }
}

export function deleteUsers(data){
    return{
        type: 'DELETE_FETCH_TODO',
        payload: data

    }
}


