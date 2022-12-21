import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        updateInfoUser: (state,action) => {
            state.value.push(action.payload);
        },
        deleteInfoUser: (state) => {
            state.value = []
        },
        filterInfo: (state, action) => {
            state.value = state.value.filter((data) => data === action.payload)
        }
    },
});

export const { updateInfoEvent, deleteInfoEvent, filterInfo } = eventSlice.actions;
export default eventSlice.reducer;