import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const entrepriseSlice = createSlice({
    name: 'entreprise',
    initialState,
    reducers: {
        updateInfoEntreprise: (state,action) => {
            state.value.push(action.payload);
        },
        deleteInfoEntreprise: (state) => {
            state.value = []
        },
    },
});

export const { updateInfoEntreprise, deleteInfoEntreprise } = entrepriseSlice.actions;
export default entrepriseSlice.reducer;