import { apiHeaders } from "../../utils/constants/headers";
import axiosInterceptorInstance from "../../utils/constants/axiosInterceptor";
import axios from "axios";
import { workoutService } from "./workoutService";

export const addWorkout = async (payload: any) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}${workoutService.add}`,
      payload,
      { headers: apiHeaders }
    );
    if (!response.data) {
      throw new Error(response.data?.message || "request failed");
    }
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Add user request failed");
  }
};

export const getWorkout = async (id: any) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}${workoutService.getWorkOut}?id=${id}`,
      { headers: apiHeaders }
    );
    if (!response.data) {
      throw new Error(response.data?.message || "request failed");
    }
    return response;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Add user request failed");
  }
};
