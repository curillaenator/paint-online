import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { batch } from "react-redux";

import type { TThunk } from "../../types/types";

interface IRepoState {}

const initialState: IRepoState = {};

const mainSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {},
});
export const main = mainSlice.reducer;

const {} = mainSlice.actions;

// THUNKS
