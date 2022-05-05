import { configureStore } from "@reduxjs/toolkit";
//stores
import PotterSlice from "./PotterSlice";
import dataSlice from "./dataSlice";
import UtilSlice from "./UtilSlice";

export default configureStore({
  reducer: {
    reduxPotter: PotterSlice,
    dataPotter: dataSlice,
    utilPotter: UtilSlice,
  },
});
