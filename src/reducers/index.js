import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import search from './search'

const combinedReducers = combineReducers({
  search
});
const middlewareEnhancer = applyMiddleware(thunk);
const store = createStore(combinedReducers, {}, composeWithDevTools(middlewareEnhancer));

export default store;
