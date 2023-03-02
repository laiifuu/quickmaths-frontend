import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tutorsReducer from './tutors/tutors';
import userReducer from './user/session-redux';

const rootReducer = combineReducers({
  tutors: tutorsReducer,
  users: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
