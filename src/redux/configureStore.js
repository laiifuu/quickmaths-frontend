import { combineReducers, configureStore } from '@reduxjs/toolkit';
import addReducer from './user/addTutor-redux';
import deleteReducer from './user/deletetutor-redux';

const root = combineReducers({
  add: addReducer,
  delete: deleteReducer,
});

const store = configureStore({ reducer: root });

export default store;
