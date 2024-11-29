import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Example async thunk using axios
export const fetchData = createAsyncThunk('api/fetchData', async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await axios.get(`${baseUrl}/api/example/`);
  return response.data;
});


const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || '';
      });
  },
});

export default apiSlice.reducer;