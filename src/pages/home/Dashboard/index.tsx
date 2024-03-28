import React, { useEffect, useState } from "react";
import { Upcoming } from "../../../Components/Dashboard components/Upcoming";
import { PrimaryBtn } from "../../../Components/Buttons";
import { appRoute } from "../../../utils";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiHeaders } from "../../../utils/constants/headers";
import { useSelector } from "react-redux";
import { loginUser, workOut } from "../../../store/slices";
export const Dashboard = () => {
  const _loginUser = useSelector(loginUser);
  const listworkOut = useSelector(workOut);
  console.log("Dashboard -> listworkOut", listworkOut);

  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/get-rating?user_id=${_loginUser?.details?.id}`,
        {
          headers: apiHeaders,
        }
      );
      setRating(res?.data?.rating);
    } catch (error) {
      console.log("fetchData -> error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-[82vh] flex items-center">
      <div className="grid grid-cols-1 xl:grid-cols-2 shadow-2xl rounded-2xl p-5 pb-5 bg-lightprimary w-[100%]">
        <div className="col-span-1 h-full mt-5">
          <Upcoming />
        </div>
        <div className="col-span-1 h-full mt-5">
          <div className=" me-0 md:me-10 bg-primary rounded-xl  p-2 md:p-5 shadow-xl hover:shadow-2xl">
            <div className="flex justify-between">
              <span className="rounded-t-xl pb-5 w-[200px]  text-subtext font-bold text-2xl  flex justify-start items-center">
                Rewards
              </span>
              <PrimaryBtn
                title={"Explore"}
                btnIcon={""}
                onClick={() => navigate(appRoute.workout)}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
              {listworkOut.map((item: any, index: any) => {
                return (
                  <div key={index}>
                    {item?.exercises.map((e: any, key: any) => {
                      return (
                        <div key={key} className="py-5">
                          <div className="p-5 max-w-sm rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative">
                            <div
                              className="text-end absolute right-0"
                              style={{ top: "-18px" }}
                            >
                              <b
                                className={`bg-${
                                  e.points === 10
                                    ? "green"
                                    : e.points < 10 && e.points >= 5
                                      ? "amber"
                                      : "red"
                                }-500 rounded-lg text-white px-3 py-1 text-sm`}
                              >
                                {e.points === 10
                                  ? "Excellent"
                                  : e.points < 10 && e.points >= 5
                                    ? "Good"
                                    : "Poor"}
                              </b>
                            </div>
                            <div className="flex justify-between">
                              <div>{e?.name}</div>
                              <div className="flex">
                                <div>
                                  <b>{e.points}</b>
                                  <span
                                    style={{ fontSize: "10px" }}
                                    className="ms-1"
                                  >
                                    Points
                                  </span>
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
      </div>
    </div>
  );
};
