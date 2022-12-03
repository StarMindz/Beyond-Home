import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchAPOD = createAsyncThunk('apod/fetchAPOD', () => axios.get('https://api.nasa.gov/planetary/apod?api_key=ZATlX0ze5X6Ft0QH6f8MHZKzRYQ4FimrToCE22G7')
  .then((response) => response.data));

const APODSlice = createSlice({
  name: 'apod',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAPOD.fulfilled, (state, action) => action.payload);
  },
});

export default APODSlice.reducer;
