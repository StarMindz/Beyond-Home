import { configureStore } from '@reduxjs/toolkit';
import nasaReducer from './library/librarySlice';
import apodReducer from './apod/apodSlice';

const store = configureStore({
  reducer: {
    nasa: nasaReducer,
    apod: apodReducer,
  },
});

export default store;
