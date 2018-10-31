import { combineReducers } from 'redux';

import usertodos from './Users/Users';

const appReducer = combineReducers({
    usertodos : usertodos
});

export default appReducer;