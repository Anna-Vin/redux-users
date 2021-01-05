import { createStore, combineReducers } from 'redux';
import usersReducer from '../reducers/user.reducer.js';

const initialState = {
  users: usersReducer,
};

const rootReducer = combineReducers(initialState)

const store = createStore(rootReducer);

export default store;
