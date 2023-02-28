import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/session-redux';

const root = combineReducers({
  userReducer,
});

const store = configureStore({ reducer: root });

export default store;
