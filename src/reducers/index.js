import { combineReducers } from 'redux';
import { postReducer } from './newState';

export default combineReducers({
	posts: postReducer
});
