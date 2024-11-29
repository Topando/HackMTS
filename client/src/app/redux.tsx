import { configureStore } from '@reduxjs/toolkit'
import globalReducer from '../state/index'
import apiReducer from '../state/api'
export const makeStore = () => {
  return configureStore({
    reducer: {
      global: globalReducer,
      api: apiReducer,
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
