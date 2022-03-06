import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/AuthSlice';
import personnelReducer from '../slice/PersonnelSlice';
import clubReducer from '../slice/ClubSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    personnel: personnelReducer,
    club: clubReducer,
  },
})