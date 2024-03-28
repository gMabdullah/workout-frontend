import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appRoute } from "../../../utils";
import { PrimaryBtn } from "../../Buttons/Primary";
import { UpcomingCalander } from "./UpcomingCalander";
import { Plus } from "../../Icons";
import { ModalInterface, WorkOutModal } from "../../Modals";
import { useSelector } from "react-redux";
import { loginUser } from "../../../store/slices";
import { useGetWorkout } from "../../../hooks/Workouts/useGetUpcommingVisits";
import { PageLoader } from "../../PageLoader.tsx";

export const Upcoming = () => {
  const navigate = useNavigate();
  const _loginUser = useSelector(loginUser);
  const { handlegetWorkout, loading, setLoading } = useGetWorkout();

  const [visible, setModalVisible] = useState(false);
  const getWorkOuts = async () => {
    await handlegetWorkout(_loginUser?.details?.id);
    // await handlegetUpCommingVisits("pending");
    setLoading(false);
  };
  useEffect(() => {
    getWorkOuts();
  }, [_loginUser]);

  return (
    <>
      {loading && <PageLoader />}

      <div className=" me-0 md:me-10 bg-primary rounded-xl  p-2 md:p-5 shadow-xl hover:shadow-2xl">
        <div className="flex justify-between">
          <span className="rounded-t-xl pb-5 w-[200px]  text-subtext font-bold text-2xl  flex justify-start items-center">
            WorkOut
          </span>
          <PrimaryBtn
            title={"Explore"}
            btnIcon={""}
            onClick={() => navigate(appRoute.workout)}
          />
        </div>

        <div className=" ">
          <UpcomingCalander title={"Hello"} />
          <div>
            <span className="flex justify-center mt-5 gap-5 items-center">
              <PrimaryBtn
                title={"Add Workout"}
                btnIcon={<Plus />}
                onClick={() => {
                  setModalVisible(true);
                }}
              />
            </span>
          </div>
        </div>
        <ModalInterface
          isOpen={visible}
          onClose={() => {
            setModalVisible(false);
          }}
          className={" sm:w-[90%] md:w-[70%] mt-28 "}
          header="Add Your Workout Plan"
        >
          <WorkOutModal
            onClose={() => {
              setModalVisible(false);
            }}
          />
        </ModalInterface>
      </div>
    </>
  );
};
