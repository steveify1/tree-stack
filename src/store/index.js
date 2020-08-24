import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import menuReducer from './menu';

// Middlewares
const middlewares = applyMiddleware(reduxThunk, logger);

// Combine all the reducers
const rootReducer = combineReducers({
  menu: menuReducer,
});

// Create and export the redux store
export default createStore(rootReducer, composeWithDevTools(middlewares));
