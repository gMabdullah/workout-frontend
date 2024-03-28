import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../APIs/Auth/authApi";

export const useForgotPassowrd = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorCode, setErrorCode] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);

  const handleForgotPassword = useCallback(
    async (payload: string) => {
      try {
        setError(null);
        setLoading(true);
        const response = await forgotPassword(payload);

        if (response.status === 200 || response.status === 201) {
          //   dispatch(setuser(response.data));
          //   setSuccess(true);
          //   setLoading(false);
        }
        return true;
      } catch (error: any) {
        setSuccess(false);
        const errorMessage =
          error.response?.data?.message || "An error occurred";
        setError(errorMessage);
        setErrorCode(error.response?.status);
        setLoading(false);
        return false;
      }
    },
    [dispatch]
  );
  return {
    handleForgotPassword,
    loading,
    error,
    success,
    setError,
    errorCode,
    setErrorCode,
    setLoading,
  };
};
