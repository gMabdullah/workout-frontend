import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogout } from "../../APIs/Auth/authApi";
import { logoutUser } from "../../store/slices";
export const useLogout = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorCode, setErrorCode] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);
  const handleLogoutUser = () => {
    dispatch(logoutUser());
    localStorage.clear();
  };
  const handleLogout = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const response = await userLogout();
      if (response.status === 200 || response.status === 201) {
        handleLogoutUser();
      }
      return true;
    } catch (error: any) {
      setSuccess(false);
      const errorMessage = error.response?.data?.message || "An error occurred";
      handleLogoutUser();
      setError(errorMessage);
      setErrorCode(error.response?.status);
      setLoading(false);
    }
  }, [dispatch]);
  return {
    handleLogout,
    loading,
    error,
    success,
    setError,
    errorCode,
    setErrorCode,
    setLoading,
  };
};
