import { WritableDraft } from "immer/dist/internal";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { batch } from "react-redux";

// import type { TThunk } from "../../types/types";

interface IRepoState {
  tool: string;
  curTool: any;
  fillColor: string;
  strokeColor: string;
  lineWidth: number;
}

const initialState: IRepoState = {
  tool: "brush",
  curTool: null,
  fillColor: "#131313",
  strokeColor: "#131313",
  lineWidth: 1,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setTool: (state, action: PayloadAction<string>) => {
      state.tool = action.payload;
      state.lineWidth = 1;
      state.fillColor = "#131313";
      state.strokeColor = "#131313";
    },

    setCurTool: (state, action: PayloadAction<any>) => {
      state.curTool = action.payload;
    },

    setFillColor: (state, action: PayloadAction<string>) => {
      state.fillColor = action.payload;
      state.curTool.fillColor = action.payload;
    },

    setStrokeColor: (state, action: PayloadAction<string>) => {
      state.strokeColor = action.payload;
      state.curTool.strokelColor = action.payload;
    },

    setLineWidth: (state, action: PayloadAction<number>) => {
      state.lineWidth = action.payload;
      state.curTool.lineWidth = action.payload;
    },
  },
});
export const main = mainSlice.reducer;

export const {
  setTool,
  setCurTool,
  setFillColor,
  setStrokeColor,
  setLineWidth,
} = mainSlice.actions;

export type TSetColor = typeof setStrokeColor;
