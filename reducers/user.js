import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateInfoUser: (state,action) => {
            state.value.push(action.payload);
        },
        deleteInfoUser: (state) => {
            state.value = []
        },
    },
});

export const { updateInfoUser, deleteInfoUser } = userSlice.actions;
export default userSlice.reducer;