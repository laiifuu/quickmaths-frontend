import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tutorsReducer from './tutors/tutors';
import userReducer from './user/session-redux';
import addReducer from './user/addTutor-redux';
import deleteReducer from './user/deletetutor-redux';
import reservationsReducer from './reservations/reservations';

const rootReducer = combineReducers({
  tutors: tutorsReducer,
  users: userReducer,
  add: addReducer,
  delete: deleteReducer,
  reservations: reservationsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
