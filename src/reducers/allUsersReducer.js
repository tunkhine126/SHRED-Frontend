const initialState = {
  allUsers: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ALL_USERS':
      return {...state, allUsers: action.allUsers}
    default: 
      return state;
  }
}