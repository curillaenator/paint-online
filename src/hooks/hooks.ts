import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { TState, TDispatch } from "../redux/store";

export const useAppDispatch = () => useDispatch<TDispatch>();
export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;


