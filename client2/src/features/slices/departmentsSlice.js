import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

// Define your slice
const departmentsSlice = createSlice({
  name: 'departments',
  initialState: {
    departments: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDepartmentsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDepartmentsSuccess(state, action) {
      state.loading = false;
      state.departments = action.payload;
    },
    fetchDepartmentsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDepartmentsStart,
  fetchDepartmentsSuccess,
  fetchDepartmentsFailure,
} = departmentsSlice.actions;

export const getDepartments = () => async (dispatch) => {
  dispatch(fetchDepartmentsStart());
  
  try {
    const response = await axios.get('http://localhost:8001/api/v1/departments');
    dispatch(fetchDepartmentsSuccess(response.data));
  } catch (error) {
    dispatch(fetchDepartmentsFailure(error.message));
  }
};

export default departmentsSlice.reducer;