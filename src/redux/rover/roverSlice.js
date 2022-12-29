import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchRover = createAsyncThunk('rover/fetchRover', (data) => axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${data[0]}&camera=${data[1]}&page=1&api_key=ZATlX0ze5X6Ft0QH6f8MHZKzRYQ4FimrToCE22G7`)
  .then((response) => response.data)
  .then((data) => data.photos)
  .then((datas) => {
    const dataInfo = datas.map((data) => ({
      id: data.id,
      sol: data.sol,
      earth: data.earth_date,
      image: data.img_src,
      rover: data.rover.name,
      camera: data.camera.full_name,
      landing_date: data.rover.landing_date,
      launch_date: data.rover.launch_date,
      status: data.rover.status,
    }));
    return dataInfo;
  }));

const RoverSlice = createSlice({
  name: 'rover',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRover.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchRover.pending, () => 'loading');
  },
});

export default RoverSlice.reducer;
