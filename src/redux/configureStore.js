import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tutorsReducer from './tutors/tutors';

const rootReducer = combineReducers({
  tutors: tutorsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
