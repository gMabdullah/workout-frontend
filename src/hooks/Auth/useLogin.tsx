import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin, userSignup } from "../../APIs/Auth/authApi";
import { setuser } from "../../store/slices";
import { IuserLogin } from "../../APIs/Auth/interfaces";
import { Success } from "../../Components/NotificationPopUp/popups";

export const useAuthLogin = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorCode, setErrorCode] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);
  const handleLogin = useCallback(
    async (payload: IuserLogin) => {
      try {
        setError(null);
        setLoading(true);
        const response = await userLogin(payload);
        if (response.status === 200 || response.status === 201) {
          dispatch(setuser(response.data));
          localStorage.setItem("authToken", JSON.stringify(response.data));
          setSuccess(true);
          setLoading(false);
        }
      } catch (error: any) {
        setSuccess(false);
        const errorMessage =
          error.response?.data?.message || "An error occurred";
        setError(errorMessage);
        setErrorCode(error.response?.status);
        setLoading(false);
      }
    },
    [dispatch]
  );
  const handleSignUP = useCallback(
    async (payload: IuserLogin) => {
      try {
        setError(null);
        setLoading(true);
        const response = await userSignup(payload);
        Success("Account Created Successfully");
      } catch (error: any) {
        setSuccess(false);
        const errorMessage =
          error.response?.data?.message || "An error occurred";
        setError(errorMessage);
        setErrorCode(error.response?.status);
        setLoading(false);
      }
    },
    [dispatch]
  );
  return {
    handleLogin,
    loading,
    error,
    handleSignUP,
    success,
    setError,
    errorCode,
    setErrorCode,
  };
};
