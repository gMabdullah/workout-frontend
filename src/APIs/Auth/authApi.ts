import { authService } from "./authServices";
import { IuserLogin } from "./interfaces";
import { apiHeaders } from "../../utils/constants/headers";
import axiosInterceptorInstance from "../../utils/constants/axiosInterceptor";
import axios from "axios";

export const userLogin = async (payload: IuserLogin) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}${authService.login}`,
    payload
  );
  if (!response?.data) {
    throw new Error(response?.data.message || "Login request failed");
  }
  return response;
};
export const userSignup = async (payload: IuserLogin) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}${authService.signUp}`,
    payload
  );
  if (!response?.data) {
    throw new Error(response?.data.message || "Login request failed");
  }
  return response;
};

export const forgotPassword = async (payload: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}${authService.forgotpassword}`,
    { email: payload }
  );
  if (!response?.data) {
    throw new Error(response?.data.message || "request failed");
  }
  return response;
};

export const verifyOTP = async (payload: string) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}${authService.verifyToken}`,
    { token: payload }
  );
  if (!response?.data) {
    throw new Error(response?.data.message || "request failed");
  }
  return response;
};

export const resetPassword = async (payload: string) => {
  const token = localStorage.getItem("resettoken");
  const email = localStorage.getItem("respEmail");

  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}${authService.resetPass}`,
    { token: token ?? null, password: payload, email: email ?? null }
  );
  if (!response?.data) {
    throw new Error(response?.data.message || "request failed");
  }
  return response;
};

export const userLogout = async () => {
  const response = await axiosInterceptorInstance.get(
    `${process.env.REACT_APP_BACKEND_URL}${authService.logout}`,
    // {},
    { headers: apiHeaders }
  );
  if (!response?.data) {
    throw new Error(response?.data.message || "request failed");
  }
  return response;
};
