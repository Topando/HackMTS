import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../features/slices/dataSlice'
import modalReducer from '../features/slices/modalSlice'
import modalGroupsReducer from '../features/slices/modalForGroups'
import dataGroupReducer from '../features/slices/departmentsSlice'
export default configureStore({
  reducer: {
    data: dataReducer,
    modal: modalReducer,
    modalGr: modalGroupsReducer,
    departments: dataGroupReducer
  },
})