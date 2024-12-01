// src/features/slices/departmentsSlice.js
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

// Create the slice for departments
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
    createDepartmentStart(state) {
      state.loading = true;
      state.error = null;
    },
    createDepartmentSuccess(state, action) {
      state.loading = false;
      state.departments.push(action.payload);
    },
    createDepartmentFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action to fetch departments (GET request)
export const getDepartments = () => async (dispatch) => {
  dispatch(departmentsSlice.actions.fetchDepartmentsStart());
  
  try {
    let allDepartments = [];
    let nextUrl = 'http://localhost:8001/api/v1/project/department/';  // Initial URL
    
    // Loop until no more pages
    while (nextUrl) {
      const response = await axios.get(nextUrl);
      allDepartments = [...allDepartments, ...response.data.results];  // Add new results
      nextUrl = response.data.next;  // Get next page URL (null if no more pages)
    }
    
    dispatch(departmentsSlice.actions.fetchDepartmentsSuccess(allDepartments));
  } catch (error) {
    dispatch(departmentsSlice.actions.fetchDepartmentsFailure(error.message));
  }
};


export const createDepartment = (departmentData) => async (dispatch) => {
  dispatch(departmentsSlice.actions.createDepartmentStart());
  
  try {
    const response = await axios.post('http://localhost:8001/api/v1/project/department/', departmentData);
    dispatch(departmentsSlice.actions.createDepartmentSuccess(response.data)); 
  } catch (error) {
    dispatch(departmentsSlice.actions.createDepartmentFailure(error.message));
  }
};

export default departmentsSlice.reducer;
