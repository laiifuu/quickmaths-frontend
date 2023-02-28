import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userLoginReducer from './user-reducer-container/user-login';
import userSignupReducer from './user-reducer-container/user-signup';

const root = combineReducers({
  userLoginReducer,
  userSignupReducer,
});

const store = configureStore({ reducer: root });

export default store;
