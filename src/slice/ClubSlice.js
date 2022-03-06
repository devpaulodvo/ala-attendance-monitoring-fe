import { createSlice } from '@reduxjs/toolkit';

export const clubSlice = createSlice({
    name: 'club',
    initialState: {
        clublist: {}
    },
    reducers: {
        setClubs: (state, actions) => {
            state.clublist = actions.payload;
        }
    }
})

export const selectClubs = state => state.club.clublist;
export const { setClubs } = clubSlice.actions;

export default clubSlice.reducer;