import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appRoute } from "../utils";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { erroPopup } from "../Components/NotificationPopUp/popups";
import { loginUser, setuser } from "../store/slices";

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const _loginUser = JSON.parse(localStorage.getItem("authToken") ?? "{}");
  useEffect(() => {
    if (_loginUser?.token) {
      dispatch(setuser(_loginUser));
    }
  });
  useEffect(() => {
    if (!_loginUser.token) {
      navigate(appRoute.login);
    }
  }, [_loginUser.token, navigate]);
  useEffect(() => {
    if (_loginUser.token) {
      const decodedToken = jwtDecode(_loginUser.token);
      const expirationTime = decodedToken.exp && decodedToken.exp * 1000; // Convert expiration time to milliseconds
      const currentTime = Date.now();
      if (expirationTime && currentTime > expirationTime) {
        erroPopup("Session expire");
        navigate(appRoute.login);
      }
    }
  }, []);
  // Return the children if the user is authenticated
  return <div>{_loginUser.token ? children : null}</div>;
};
