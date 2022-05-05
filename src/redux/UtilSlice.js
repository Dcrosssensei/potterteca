import { createSlice } from "@reduxjs/toolkit";

export const UtilSlice = createSlice({
  name: "utilPotter",
  initialState: {
    modal: 0,
    data: {
      personaje: "",
      id: 0,
      casaDeHogwarts: 0,
      hijos: [0],
      imagen: "",
    },
  },
  reducers: {
    MODALOPEN: (state) => {
      state.modal = 1;
    },
    MODALCLOSE: (state) => {
      state.modal = 0;
    },
    DATA: (state, actions) => {
      state.data = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { MODALOPEN, DATA, MODALCLOSE } = UtilSlice.actions;

export const selectModal = (state) => state.utilPotter.modal;
export const selectData = (state) => state.utilPotter.data;

export default UtilSlice.reducer;
