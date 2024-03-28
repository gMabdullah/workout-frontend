import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUpcommingVisits } from "../../../hooks/Workouts/interface";
import { RootState } from "../../store";
import { mergeDataByDate } from "../../../utils/helpers/deleteData";

const initialState: any = {
  workOut: [],
};

export const workoutSlice = createSlice({
  name: "workout",
  initialState,
  reducers: {
    getWorkOut: (state, action: PayloadAction<any>) => {
      state.workOut = mergeDataByDate(action.payload);
    },
  },
  extraReducers: (builder) => {},
});

// Reducers
export const { getWorkOut } = workoutSlice.actions;

export const workOut = (state: any) => state?.[workoutSlice.name].workOut;
