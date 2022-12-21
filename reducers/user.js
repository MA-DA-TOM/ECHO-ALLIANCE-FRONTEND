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
      updateEmail: (state, action) => {
        state.value.email = action.payload;
      },
      addBenevole: (state, action) => {
        state.value.benevole.push(action.payload);  
      },
      login: (state, action) => {
        state.value.token = action.payload.token;
        state.value.nom = action.payload.nom;
        state.value.prénom = action.payload.prenom;
      },
      logout: (state) => {
        state.value.token = null;
        state.value.nom = null;
        state.value.prénom = null;
      },
      updateEchellon: (state, action) => {
        state.value.echellon = action.payload;
      },
      updateHeureCumulé: (state, action) => {
        state.value.heureCumulé = action.payload;
      },
      addEvent: (state, action) => {
        state.value.events.push(action.payload);  
      },
      importEvent: (state, action) => {
        state.value.events = action.payload;
    },
      removeEvent: (state, action) => {
        state.value.events = state.value.events.filter(e => e.name !== action.payload);
      },
      // j'ai remplacé les .places par .events à verifier avec damien s'il avait fait exprès de mettre des .places malgrés param jamais enregistré
    },
  });
  
  export const { updateNom, updatePrénom, updateEmail, login, logout, updateEchellon, updateHeureCumulé, addEvent, importEvent, removeEvent } = userSlice.actions;
  export default userSlice.reducer;
  