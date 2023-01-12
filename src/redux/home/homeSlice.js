import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchHome = createAsyncThunk('home/fetch', (year) => axios.get(`https://images-api.nasa.gov/search?year_start=${year}&page=1`)
  .then((response) => response.data)
  .then((data) => data.collection.items.slice(0, 30))
  .then((datas) => {
    const dataInfo = datas.map((data) => ({
      id: data.data[0].nasa_id,
      title: data.data[0].title,
      description: data.data[0].description.split(' ').slice(0, 24).join(' '),
      fullDescribe: data.data[0].description,
      image: data.links[0].href,
      hdImage: data.links[0].href,
      date: data.data[0].date_created,
      creator: data.data[0].photographer,
    }));
    return dataInfo;
  }));

const homeSlice = createSlice({
  name: 'home',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchHome.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchHome.pending, () => 'loading');
    builder.addCase(fetchHome.rejected, () => 'Bad error');
  },
});

export default homeSlice.reducer;
