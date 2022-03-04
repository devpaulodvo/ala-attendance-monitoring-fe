import { createSlice } from '@reduxjs/toolkit';

export const personnelSlice = createSlice({
    name: 'personnel',
    initialState: {
      personnelList: []
    },
    reducers: {
      setPersonnelList: (state, actions) => {
          state.personnelList = [...actions.payload];
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const selectPersonnelList = state => state.personnel.personnelList;
  export const { setPersonnelList } = personnelSlice.actions
  
  export default personnelSlice.reducer