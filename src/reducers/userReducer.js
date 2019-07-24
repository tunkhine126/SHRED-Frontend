import { LOGOUT_ACTION } from '../actions/types'

const initialState = {
  currentUser: {},
  loggedIn: !!localStorage.token,
  user: {id: 0, username: ' '}
}
// console.log(initialState)

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_USER':
      return {...state, currentUser: action.user, loggedIn: true}
    case LOGOUT_ACTION : 
    localStorage.removeItem('token', 'user_id')
    console.log(initialState)
      return initialState
    default: 
      return state;
  }
}


