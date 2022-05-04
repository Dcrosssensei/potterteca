import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    hechizos: [],
    info: [],
    personajes: [],
    libros: [],
  },
  reducers: {
    SPELL: (state, action) => {
      state.hechizos = action.payload;
    },
    INFO: (state, action) => {
      state.info = action.payload;
    },
    CHARACTER: (state, action) => {
      state.personajes = action.payload;
    },
    BOOK: (state, action) => {
      state.libros = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SPELL, INFO, CHARACTER, BOOK } = dataSlice.actions;

export const selectSpell = (state) => state.dataPotter.hechizos;
export const selectInfo = (state) => state.dataPotter.info;
export const selectCharacter = (state) => state.dataPotter.personajes;
export const selectBook = (state) => state.dataPotter.libros;

export default dataSlice.reducer;
