import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchNASA = createAsyncThunk('nasa/fetchNASA', () => axios.get('https://images-api.nasa.gov/search?year_start=2015')
  .then((response) => response.data)
  .then((data) => data.collection.items)
  .then((datas) => {
    const dataInfo = datas.map((data) => ({
      id: data.data[0].nasa_id,
      title: data.data[0].title,
      description: data.data[0].description_508,
      fullDescribe: data.data[0].description,
      image: data.links[0].href,
      date: data.data[0].date_created,
      creator: data.data[0].secondary_creator,
    }));
    return dataInfo;
  }));

export const fetchSearch = createAsyncThunk('nasa/fetch', (searchTerm) => axios.get(`https://images-api.nasa.gov/search?q=${searchTerm}`)
  .then((response) => response.data)
  .then((data) => data.collection.items)
  .then((datas) => {
    const dataInfo = datas.map((data) => ({
      id: data.data[0].nasa_id,
      title: data.data[0].title,
      description: data.data[0].description_508,
      fullDescribe: data.data[0].description,
      image: data.links[0].href,
      date: data.data[0].date_created,
      creator: data.data[0].secondary_creator,
    }));
    return dataInfo;
  }));

const nasaSlice = createSlice({
  name: 'nasa',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchNASA.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchSearch.fulfilled, (state, action) => action.payload);
  },
});

export default nasaSlice.reducer;
