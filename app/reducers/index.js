import { combineReducers } from 'redux';


import datausers from './Users/Users';
import channelusers from './Channels/Channels';

const appReducer = combineReducers({
	datausers: datausers,
	channelusers: channelusers
})

export default appReducer;