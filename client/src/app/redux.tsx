import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../state/api'; 
import globalReducer from '../state/index'; 

export const makeStore = () => {
  return configureStore({
    reducer: {
      global: globalReducer, 
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

// Define types for the store and dispatch
export type AppStore = ReturnType<typeof makeStore>;  
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];