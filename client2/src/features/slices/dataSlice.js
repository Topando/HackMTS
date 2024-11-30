import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    searchResults: [],
    loading: false,
    error: null,
    selectedUser: null,
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
    fetchSingleUserSuccess(state, action) {
      state.loading = false;
      state.selectedUser = action.payload;
    },
    searchDataStart(state) {
      state.loading = true;
      state.searchResults = []; // очищаем результаты поиска перед новым запросом
      state.error = null;
    },
    searchDataSuccess(state, action) {
      state.loading = false;
      state.searchResults = action.payload; // записываем результаты поиска
    },
    searchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload; // сохраняем ошибку
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

export const fetchDataOne = (userId) => async (dispatch) => {
  dispatch(dataSlice.actions.fetchDataStart());
  try {
    const response = await axios.get(`http://localhost:8001/api/v1/profiles/${userId}/`);
    dispatch(dataSlice.actions.fetchSingleUserSuccess(response.data));
  } catch (error) {
    dispatch(dataSlice.actions.fetchDataFailure(error.message));
  }
};

export const searchData = (search) => async (dispatch) => {
  dispatch(dataSlice.actions.searchDataStart()); // начало запроса поиска
  try {
    const response = await axios.get(`http://localhost:8001/api/v1/profiles/employee-by-sings/?sings=${search}`);
    dispatch(dataSlice.actions.searchDataSuccess(response.data)); // успешный ответ
  } catch (error) {
    dispatch(dataSlice.actions.searchDataFailure(error.message)); // ошибка
  }
};

export default dataSlice.reducer;
