import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { batch } from "react-redux";

import type { TThunk } from "../../types/types";

interface IRepoState {
  lineWidth: string;
  // lineWidthWarn: boolean;
}

const initialState: IRepoState = {
  lineWidth: "1",
  // lineWidthWarn: false,
};

const mainSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    setLineWidth: (state, action: PayloadAction<string>) => {
      state.lineWidth = action.payload;
    },
    // setLineWidthWarn: (state, action: PayloadAction<boolean>) => {
    //   state.lineWidthWarn = action.payload;
    // },
  },
});
export const main = mainSlice.reducer;

export const { setLineWidth } = mainSlice.actions;

// THUNKS
// type THandleLineWidth = (value: string) => TThunk;
// export const handleLineWidth: THandleLineWidth = (value) => (dispatch) => {
//   if (+value < 1 || +value > 5) return dispatch(setLineWidthWarn(true));

//   batch(() => {
//     dispatch(setLineWidth(value));
//     dispatch(setLineWidthWarn(false));
//   });
// };
