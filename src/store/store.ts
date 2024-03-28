import {
  type Action,
  type ThunkAction,
  configureStore,
} from "@reduxjs/toolkit";
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from "react-redux";
import { appSlice } from "./slices/App";
import { authSlice, workoutSlice } from "./slices";
export const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [workoutSlice.name]: workoutSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
