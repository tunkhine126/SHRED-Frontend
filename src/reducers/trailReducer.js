const initialState = {
  trails: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ALL_TRAILS':
      return {...state, trails: action.data}
    default: 
      return state;
  }
}