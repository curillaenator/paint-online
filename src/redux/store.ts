import { configureStore } from "@reduxjs/toolkit";

import { main } from "./reducers/main";

export const store = configureStore({
  reducer: { main },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       // Ignore these action types
  //       ignoredActions: ["main/setCanvas"],
  //       // Ignore these field paths in all actions
  //       ignoredActionPaths: ["payload.canvas"],
  //       // Ignore these paths in the state
  //       ignoredPaths: ["main.canvas"],
  //     },
  //   }),
});

export type TState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;

(window as any).store = store;
