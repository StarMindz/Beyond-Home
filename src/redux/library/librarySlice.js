import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchNASA = createAsyncThunk('nasa/fetchNASA', () => axios.get('https://api.nasa.gov/planetary/apod?api_key=ZATlX0ze5X6Ft0QH6f8MHZKz`RYQ4FimrToCE22G7&count=15')
  .then((response) => response.data)
  .then((datas) => {
    const dataInfo = datas.map((data) => ({
      id: data.date,
      title: data.title,
      description: data.explanation.split(' ').slice(0, 24).join(' '),
      fullDescribe: data.explanation,
      image: data.url,
      hdImage: data.hdurl,
      date: data.date,
      creator: data.copyright,
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
      description: data.data[0].description_508.split(' ').slice(0, 24).join(' '),
      fullDescribe: data.data[0].description,
      image: data.links[0].href,
      hdImage: data.links[0].href,
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
    builder.addCase(fetchNASA.pending, () => 'loading');
    builder.addCase(fetchSearch.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchSearch.pending, () => 'loading');
  },
});

export default nasaSlice.reducer;
