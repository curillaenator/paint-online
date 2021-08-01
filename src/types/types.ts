import type { SyntheticEvent, ReactNode } from "react";
import type { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import type { TState } from "../redux/store";

// COMMON

export interface IButton {
  title: string;
  icon?: ReactNode;
  param?: number;
  active?: boolean;
  disabled?: boolean;
  handler: () => void;
}

export interface IToolsItem {
  id: string | number;
  title: string;
  icon: ReactNode;
  handler: () => void;
}

// REDUX & STATE

export type TReducer<S, A = AnyAction> = (state: S, action: A) => S; // localc state reducer

export type TAction<P> = (payload: P) => { type: string; payload: P }; // action creator

export type TThunk = ThunkAction<void, TState, unknown, AnyAction>; // thunk

// EVENTS

export type TEventHandler<E extends SyntheticEvent<any>> = (event: E) => void;
