import { configureStore } from '@reduxjs/toolkit'
import apiSlice from './slices/apiSlice'


export default configureStore({
  reducer: {apiSlice},
})