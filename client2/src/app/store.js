import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../features/slices/dataSlice'

export default configureStore({
  reducer: {
    data: dataReducer
  },
})