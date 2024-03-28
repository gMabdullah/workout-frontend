import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addWorkout } from "../../APIs/Workout/workutApI";
import { Success } from "../../Components/NotificationPopUp/popups";

export const useAddWorkouts = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorCode, setErrorCode] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);
  const handleAddWorkout = useCallback(
    async (payload: any) => {
      try {
        setError(null);
        setLoading(true);
        await addWorkout(payload);
        Success("Workout Added!");
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
    handleAddWorkout,
    loading,
    error,
    success,
    setError,
    errorCode,
    setErrorCode,
    setLoading,
  };
};
