import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { getWorkout } from "../../APIs/Workout/workutApI";
import { getWorkOut } from "../../store/slices/workout";
export const useGetWorkout = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorCode, setErrorCode] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);
  const handlegetWorkout = useCallback(
    async (id: any) => {
      try {
        setError(null);
        setLoading(true);

        const response = await getWorkout(id);
        if (response.status === 200) {
          dispatch(getWorkOut(response?.data?.results));
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
    handlegetWorkout,
    loading,
    error,
    success,
    setError,
    errorCode,
    setErrorCode,
    setLoading,
  };
};
