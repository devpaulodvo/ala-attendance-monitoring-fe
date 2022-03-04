import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/AuthSlice';
import personnelReducer from '../slice/PersonnelSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    personnel: personnelReducer
  },
})