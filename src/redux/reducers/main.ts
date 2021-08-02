import { WritableDraft } from "immer/dist/internal";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { batch } from "react-redux";

import type { TThunk } from "../../types/types";

interface IRepoState {
  canvas: HTMLCanvasElement | null;
  tool: string;
  curTool: any;
  fillColor: string;
  strokeColor: string;
  lineWidth: number;
  undoList: string[];
  redoList: string[];
}

const initialState: IRepoState = {
  canvas: null,
  tool: "brush",
  curTool: null,
  fillColor: "#131313",
  strokeColor: "#131313",
  lineWidth: 1,
  undoList: [],
  redoList: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setCanvas: (state, action: PayloadAction<any>) => {
      state.canvas = action.payload;
    },

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

    setUndoList: (state, action: PayloadAction<string[]>) => {
      state.undoList = action.payload;
    },

    setRedoList: (state, action: PayloadAction<string[]>) => {
      state.redoList = action.payload;
    },
  },
});
export const main = mainSlice.reducer;

export const {
  setCanvas,
  setTool,
  setCurTool,
  setFillColor,
  setStrokeColor,
  setLineWidth,
  setUndoList,
  setRedoList,
} = mainSlice.actions;

export type TSetColor = typeof setStrokeColor;

// THUNKS

export const undo = (): TThunk => (dispatch, getState) => {
  const canvas = getState().main.canvas;
  const undoList = [...getState().main.undoList];
  const redoList = [...getState().main.redoList];

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  if (undoList.length && ctx) {
    const dataURL = undoList[undoList.length - 1];

    const img = new Image();
    img.src = dataURL;

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    batch(() => {
      dispatch(setRedoList([dataURL, ...redoList]));
      dispatch(setUndoList(undoList.slice(0, undoList.length - 1)));
    });
  } else {
    ctx?.clearRect(0, 0, canvas.width, canvas.height);
  }
};

export const redo = (): TThunk => (dispatch, getState) => {
  const canvas = getState().main.canvas;
  const undoList = [...getState().main.undoList];
  const redoList = [...getState().main.redoList];

  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  if (redoList.length && ctx) {
    const dataURL = redoList[0];

    const img = new Image();
    img.src = dataURL;

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    batch(() => {
      dispatch(setUndoList([...undoList, dataURL]));
      dispatch(setRedoList(redoList.slice(1)));
    });
  }
};
