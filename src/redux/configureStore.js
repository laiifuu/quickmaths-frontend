import { combineReducers, configureStore } from '@reduxjs/toolkit';
import addReducer from './user/addTutor-redux';

const root = combineReducers({
  add: addReducer,
});

const store = configureStore({ reducer: root });

export default store;
