import { combineReducers } from 'redux';
import userReducer from './userReducer';
// import navigationReducer from './navigationReducer'

export default combineReducers({
  userReducer: userReducer
  // navigationReducer: navigationReducer
})