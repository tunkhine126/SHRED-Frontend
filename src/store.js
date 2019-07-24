import { createStore } from 'redux';
// import { applyMiddleware } from 'redux'
// import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// const middleware = applyMiddleware(thunk)

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
