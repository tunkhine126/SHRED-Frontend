import { combineReducers } from 'redux';
import userReducer from './userReducer';
import allUsersReducer from './allUsersReducer';


export default combineReducers({
  userReducer: userReducer,
  allUsersReducer: allUsersReducer
})