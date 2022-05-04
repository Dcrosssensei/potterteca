import { configureStore } from "@reduxjs/toolkit";
//stores
import PotterSlice from "./PotterSlice";
import dataSlice from "./dataSlice";

export default configureStore({
  reducer: {
    reduxPotter: PotterSlice,
    dataPotter: dataSlice,
  },
});
