import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { batch } from "react-redux";

// import type { TThunk } from "../../types/types";

interface IRepoState {
  tool: string;
  color: string;
  lineWidth: string;
}

const initialState: IRepoState = {
  tool: "brush",
  color: "#131313",
  lineWidth: "1",
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setTool: (state, action: PayloadAction<string>) => {
      state.tool = action.payload;
    },

    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },

    setLineWidth: (state, action: PayloadAction<string>) => {
      state.lineWidth = action.payload;
    },
  },
});
export const main = mainSlice.reducer;

export const { setTool, setLineWidth, setColor } = mainSlice.actions;
