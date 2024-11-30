import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchData = () => async (dispatch) => {
  dispatch(dataSlice.actions.fetchDataStart());
  try {
    const response = await axios.get('http://localhost:8001/api/v1/profiles/');
    dispatch(dataSlice.actions.fetchDataSuccess(response.data.results));
  } catch (error) {
    dispatch(dataSlice.actions.fetchDataFailure(error.message));
  }
};

export default dataSlice.reducer;