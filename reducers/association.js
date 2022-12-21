import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const associationSlice = createSlice({
    name: 'asso',
    initialState,
    reducers: {
        updateInfoAsso: (state,action) => {
            state.value.push(action.payload);
        },
        deleteInfoAsso: (state) => {
            state.value = []
        },
    },
});

export const { updateInfoAsso, deleteInfoAsso } = associationSlice.actions;
export default associationSlice.reducer;