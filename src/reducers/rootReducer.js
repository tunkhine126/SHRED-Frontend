import { combineReducers } from 'redux';
import userReducer from './userReducer';
import allUsersReducer from './allUsersReducer';
import trailReducer from './trailReducer';

export default combineReducers({
  userReducer: userReducer,
  allUsersReducer: allUsersReducer,
  trailReducer: trailReducer
})