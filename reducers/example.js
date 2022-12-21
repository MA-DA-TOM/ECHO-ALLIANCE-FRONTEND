import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const exempleSlice = createSlice({
    name: 'exemple',
    initialState,
    reducers: {
        updateInfo: (state,action) => {
            state.value.push(action.payload);
        },
        deleteInfo: (state) => {
            state.value = []
        },
        filterInfo: (state, action) => {
            state.value = state.value.filter((data) => data === action.payload)
        }
    },
});

export const { updateInfo, deleteInfo, filterInfo } = exempleSlice.actions;
export default exempleSlice.reducer;