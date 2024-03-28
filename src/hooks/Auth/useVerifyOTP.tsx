import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { verifyOTP } from "../../APIs/Auth/authApi";
import { erroPopup } from "../../Components/NotificationPopUp/popups";

export const useVerifyOTP = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorCode, setErrorCode] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);
  const handleVerifyOTP = useCallback(
    async (payload: string) => {
      try {
        setError(null);
        setLoading(true);
        const response = await verifyOTP(payload);
        if (response?.data?.data?.email) {
          localStorage.setItem("respEmail", response?.data?.data?.email);
        }
        return true;
      } catch (error: any) {
        setSuccess(false);
        const errorMessage =
          error.response?.data?.message || "An error occurred";
        setError(errorMessage);
        setErrorCode(error.response?.status);
        setLoading(false);
        erroPopup(errorMessage);
        return false;
      }
    },
    [dispatch]
  );
  return {
    handleVerifyOTP,
    loading,
    error,
    success,
    setError,
    errorCode,
    setErrorCode,
  };
};
