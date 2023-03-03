import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tutorsReducer from './tutors/tutors';
import userReducer from './user/session-redux';
import reservationsReducer from './reservations/reservations';

const rootReducer = combineReducers({
  tutors: tutorsReducer,
  users: userReducer,
  reservations: reservationsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
