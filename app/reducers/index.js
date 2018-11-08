import { combineReducers } from 'redux';


import datausers from './Users/Users';
import channelusers from './Channels/Channels';
import datacontacts from './Contacts/Contacts';
import datachats from './Chats/Chats';

const appReducer = combineReducers({
	datausers: datausers,
	channelusers: channelusers,
	datacontacts: datacontacts,
	datachats: datachats
})

export default appReducer;