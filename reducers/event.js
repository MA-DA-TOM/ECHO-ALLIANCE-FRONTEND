import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        updateInfoEvent: (state,action) => {
            state.value.push(action.payload);
        },
        deleteInfoEvent: (state) => {
            state.value = []
        },
        filterInfoEvent: (state, action) => {
            state.value = state.value.filter((data) => data === action.payload)
        }
    },
});

export const { updateInfoEvent, deleteInfoEvent, filterInfo } = eventSlice.actions;
export default eventSlice.reducer;