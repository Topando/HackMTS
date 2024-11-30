import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../features/slices/dataSlice'
import modalReducer from '../features/slices/modalSlice'
export default configureStore({
  reducer: {
    data: dataReducer,
    modal: modalReducer
  },
})