import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: { nom: null, prénom: null, echellon: null, heureCumulé : 0,token : null, events: [] },
  };
  
  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      updateNom: (state, action) => {
        state.value.nom = action.payload;
      },
      updatePrénom: (state, action) => {
        state.value.prénom = action.payload;
      },
      updateEchellon: (state, action) => {
        state.value.echellon = action.payload;
      },
      updateHeureCumulé: (state, action) => {
        state.value.heureCumulé = action.payload;
      },
      addEvent: (state, action) => {
        state.value.places.push(action.payload);  
      },
      removeEvent: (state, action) => {
        state.value.places = state.value.places.filter(e => e.name !== action.payload);
      },
    },
  });
  
  export const { updateNom, updatePrénom, updateEchellon, updateHeureCumulé, addEvent, removeEvent } = userSlice.actions;
  export default userSlice.reducer;
  