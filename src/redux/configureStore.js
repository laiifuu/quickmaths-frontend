import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tutorsReducer from './tutors/tutors';
import userReducer from './user/session-redux';
import deleteReducer from './user/deletetutor-redux';

const rootReducer = combineReducers({
  tutors: tutorsReducer,
  users: userReducer,
  delete: deleteReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
