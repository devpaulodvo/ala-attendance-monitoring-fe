import { createSlice } from '@reduxjs/toolkit';

export const schoolYearSlice = createSlice({
    name: 'schoolyear',
    initialState: {
      schoolyearList: []
    },
    reducers: {
      setSchoolYearList: (state, actions) => {
          state.schoolyearList = [...actions.payload];
      }
    },
  })
  
  export const selectSchoolYearList = state => state.schoolyear.schoolyearList;
  export const { setSchoolYearList } = schoolYearSlice.actions
  
  export default schoolYearSlice.reducer