import { configureStore } from '@reduxjs/toolkit';
import nasaReducer from './library/librarySlice';
import apodReducer from './apod/apodSlice';
import roverReducer from './rover/roverSlice';

const store = configureStore({
  reducer: {
    nasa: nasaReducer,
    apod: apodReducer,
    rover: roverReducer,
  },
});

export default store;
