import { createSlice } from "@reduxjs/toolkit";
import { mascot } from "../assets/gallery";

export const PotterSlice = createSlice({
  name: "reduxPotter",
  initialState: {
    house: "Gryffindor",
    mascot: mascot.griffindor,
  },
  reducers: {
    GRYFFINDOR: (state) => {
      state.house = "Gryffindor";
      state.mascot = mascot.griffindor;
    },
    SLYTHERYN: (state) => {
      state.house = "Slytherin";
      state.mascot = mascot.slytherin;
    },
    RAVENCLAW: (state) => {
      state.house = "Ravenclaw";
      state.mascot = mascot.ravenclaw;
    },
    HUFFLEPUFF: (state) => {
      state.house = "Hufflepuff";
      state.mascot = mascot.hufflepuff;
    },
  },
});

// Action creators are generated for each case reducer function
export const { GRYFFINDOR, SLYTHERYN, RAVENCLAW, HUFFLEPUFF } =
  PotterSlice.actions;

export const selectHouse = (state) => state.reduxPotter.house;
export const selectMascot = (state) => state.reduxPotter.mascot;

export default PotterSlice.reducer;
