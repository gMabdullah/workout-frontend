import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface IApp {
  showHeaderFooter: boolean;
  data?: string;
  loading: boolean;
  darkMode: boolean;
}

const initialState: IApp = {
  showHeaderFooter: false,
  darkMode: false,
  data: "",
  loading: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleHeaderFooter: (state, action: PayloadAction<boolean>) => {
      state.showHeaderFooter = action.payload;
    },
    toggleDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {},
});

// Reducers
export const { toggleHeaderFooter, startLoading, endLoading, toggleDarkMode } =
  appSlice.actions;

// Selectors
export const showHeaderFooter = (state: RootState) =>
  state?.[appSlice.name].showHeaderFooter;
export const loading = (state: RootState) => state?.[appSlice.name].loading;
export const darkMode = (state: RootState) => state?.[appSlice.name].darkMode;

// API'S

// export const handleTheme =
//   (payload: boolean): ReduxThunkAction =>
//   (dispatch) => {

//   };
