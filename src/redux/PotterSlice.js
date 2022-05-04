import { createSlice } from "@reduxjs/toolkit";

export const PotterSlice = createSlice({
  name: "reduxPotter",
  initialState: {
    house: "ravenclaw",
  },
  reducers: {
    GRIFFINDOR: (state) => {
      state.house = "griffindor";
    },
    SLYTHERYN: (state) => {
      state.house = "slytherin";
    },
    RAVENCLAW: (state, action) => {
      state.house = "ravenclaw";
    },
    HUFFLEPUFF: (state, action) => {
      state.house = "hufflepuff";
    },
  },
});

// Action creators are generated for each case reducer function
export const { GRIFFINDOR, SLYTHERYN, RAVENCLAW, HUFFLEPUFF } =
  PotterSlice.actions;

export default PotterSlice.reducer;
