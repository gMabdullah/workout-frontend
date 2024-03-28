import React, { ChangeEvent, useState } from "react";
import { Inputs } from "../Inputs";
import { OutlineBtn, PrimaryBtn } from "../Buttons";
import { apiHeaders } from "../../utils/constants/headers";
import axios from "axios";
import { workoutService } from "../../APIs/Workout/workoutService";
import { useSelector } from "react-redux";
import { loginUser } from "../../store/slices";
import { LoadingBtn } from "../Buttons/LoadingBtn";
import { Success } from "../NotificationPopUp/popups";

export const WorkoutDetails = (props: any) => {
  const { isShowFooter, workoutData } = props;
  const [data, setData] = useState(workoutData);
  const [loading, setLoading] = useState(false);
  const _loginUser = useSelector(loginUser);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const count: any =
      data?.name === "Walk/Running"
        ? data.distanceKm
        : data?.name === "Yoga"
          ? data.timeMinutes
          : data.reps;

    setData({
      ...data,
      completed: Number(count) === Number(value) ? 1 : 0,
      points:
        Number(count) === Number(value)
          ? 10
          : Number(value) >= Number(count) / 2
            ? 5
            : 0,
    });
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const payload = {
        ...data,
        user_id: _loginUser?.details?.id,
        is_updated: 1,
      };
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}${workoutService.udpate}`,
        { ...payload },
        { headers: apiHeaders }
      );
      Success("updated");
      window.location.reload();
      props.handleClose();
    } catch (error) {
      console.log("handleSave -> error", error);
    }
  };
  return (
    <>
      <div className=" p-5 text-subtext  bg-primary rounded-lg">
        <h3 className="mb-5 mt-2">
          <span className="font-semibold text-[18px] p-3 ps-0 ">
            Workout Details
          </span>
        </h3>

        <form className="mt-10">
          <div className="grid md:grid-cols-1 md:gap-6 ">
            <Inputs
              label={data?.name}
              type={"text"}
              id={"FName"}
              name={data?.name}
              value={data?.value}
              handleChange={handleInputChange}
              placeholder="Enter Data you have done"
            />
          </div>

          <div className="flex justify-center gap-5 mt-5 flex-wrap">
            {loading ? (
              <LoadingBtn />
            ) : (
              <>
                <OutlineBtn
                  btntitle={"Cancel"}
                  btnIcon={<></>}
                  onClick={props.handleClose}
                />
                <PrimaryBtn title="Save" btnIcon="" onClick={handleSave} />
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
