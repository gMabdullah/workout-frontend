import React, { useEffect, useState } from "react";

import { ModalInterface, WorkoutModal } from "../../Components/Modals";
import { EditIcon } from "../../Components/Icons";
import { useSelector } from "react-redux";
import { PageLoader } from "../../Components/PageLoader.tsx";
import { useGetWorkout } from "../../hooks/Workouts/useGetUpcommingVisits";
import { loginUser, workOut } from "../../store/slices";
import moment from "moment";

export const WorkOutPage = () => {
  const [showAddNewAppointmentModal, setAddNewAppointmentModal] =
    useState(false);
  const listworkOut = useSelector(workOut);
  const currentDate = new Date(Date.now()).toISOString().slice(0, 10);
  const [data, setData] = useState<any>({});

  // Filter the array to get objects with date equal to the current date
  const filteredData =
    (listworkOut.length > 0 &&
      listworkOut.filter(
        (entry: any) => entry.date.slice(0, 10) === currentDate
      )) ||
    [];
  const handleAddNewAppointmentModalOpen = () => {
    setAddNewAppointmentModal(true);
  };
  const _loginUser = useSelector(loginUser);

  const { handlegetWorkout, loading, setLoading } = useGetWorkout();
  const handleClose = () => {
    setAddNewAppointmentModal(false);
  };
  useEffect(() => {
    getWorkOut();
  }, [_loginUser]);
  const getWorkOut = async () => {
    await handlegetWorkout(_loginUser?.details?.id);
    // await handlegetUpCommingVisits("pending");
    setLoading(false);
  };

  return (
    <>
      {loading && <PageLoader />}
      <div className="pb-10   rounded-lg">
        <div className=" p-5 mt-5 bg-lightprimary rounded-lg">
          <div className="flex justify-between">
            <span className="pb-5  font-semibold text-[20px] text-subtext">
              Today Goal
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2">
            {filteredData?.[0]?.exercises.map((item: any, key: any) => {
              return (
                <div
                  key={key}
                  className="p-5 max-w-sm rounded-lg overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                >
                  <div className="flex justify-between">
                    <div>{item?.name}</div>
                    <div className="flex">
                      <div>
                        <b>
                          {item?.reps
                            ? item?.reps
                            : item.minutes_spent
                              ? item.minutes_spent + "Minutes"
                              : item?.distance_in_km + "km"}
                        </b>
                      </div>
                      {item.is_updated === 1 && item.complete === 1 ? (
                        <div style={{ fontSize: "10px" }} className="ms-1">
                          {item.time}
                        </div>
                      ) : (
                        <div
                          className="w-[10px] cursor-pointer"
                          onClick={() => {
                            setData(item);
                            handleAddNewAppointmentModalOpen();
                          }}
                        >
                          <EditIcon />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" p-5 mt-5 bg-lightprimary rounded-lg">
          <div className="flex">
            <span className="pb-5 pt-0  font-semibold text-[20px]  text-subtext">
              Weekly Workout
            </span>
          </div>
          {/* <WorkOutTable datasource={listworkOut} /> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2">
            {listworkOut.map((item: any, index: any) => {
              return (
                <div key={index}>
                  {item?.exercises.map((e: any, key: any) => {
                    const parsedDate = moment(item.date);
                    const day = parsedDate.format("dddd");
                    return (
                      <div key={key} className="py-5">
                        <div className="p-5 max-w-sm rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative">
                          <div
                            className="text-end absolute right-0"
                            style={{ top: "-18px" }}
                          >
                            <b
                              className={`bg-${
                                e.is_updated === 1 && e.complete === 1
                                  ? "green"
                                  : e.is_updated === 1 && e.complete === 0
                                    ? "red"
                                    : "amber"
                              }-500 rounded-lg text-white px-3 py-1 text-sm`}
                            >
                              {e.is_updated === 1 && e.complete === 1
                                ? "Completed"
                                : e.is_updated === 1 && e.complete === 0
                                  ? "Incomplete"
                                  : "Pending"}
                            </b>
                          </div>
                          <div className="flex justify-between">
                            <div>{e?.name}</div>
                            <div className="flex">
                              <div>
                                <b>{day}</b>
                              </div>
                              <div
                                style={{ fontSize: "10px" }}
                                className="ms-1"
                              >
                                <div>{item?.date}</div>
                                <div
                                  style={{ fontSize: "10px" }}
                                  className="ms-1"
                                >
                                  {e.time}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ModalInterface
        isOpen={showAddNewAppointmentModal}
        onClose={() => {
          setAddNewAppointmentModal(false);
        }}
        className={" sm:w-[70%]  lg:w-[60%] bg-lightprimary mt-20 p-0 h-[70%] "}
        header={"Update Workout Info"}
      >
        <WorkoutModal handleClose={handleClose} workoutData={data} />
      </ModalInterface>
    </>
  );
};
