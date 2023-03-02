import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/session-redux';
import createTutorReducer from './user/additem-redux';

const root = combineReducers({
  createTutor: createTutorReducer,
});

const store = configureStore({ reducer: root });

export default store;
