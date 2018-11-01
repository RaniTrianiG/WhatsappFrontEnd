import { combineReducers } from 'redux';

import datausers from './Users/Users'

const appReducer = combineReducers({
	datausers: datausers,
})

export default appReducer;