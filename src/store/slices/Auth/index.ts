import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponseUser } from "../../../APIs/Auth/interfaces";
import { RootState } from "../../store";

export interface Auth {
  loginUser?: any;
}

const initialState: Auth = {
  loginUser: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setuser: (state, action: PayloadAction<IResponseUser>) => {
      state.loginUser = action.payload;
    },
    logoutUser: (state) => {
      state.loginUser = initialState;
    },
  },
  extraReducers: (builder) => {},
});

// Reducers
export const { setuser, logoutUser } = authSlice.actions;
export const loginUser = (state: RootState) => state.auth.loginUser;
