import React, { useEffect, useState } from "react";

import axios from "axios";
import { PageLoader } from "../../Components/PageLoader.tsx";

export const WorkoutDiet = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [meal, setMeal] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  const handleTabClick = (index: number) => {
    setActiveTab(index); // Update active tab index when a tab is clicked
  };
  const getMeal = async () => {
    setLoading(true);
    const API_KEY = "06d9a00636aae72d360e3faac3801575";
    const res = axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${
          activeTab === 0 ? "Diet" : "fat gain"
        }&app_id=4eb84ce9&app_key=${API_KEY}`,
        {
          headers: {
            Accept: "application/json",
            "Accept-Language": "en",
          },
        }
      )
      .then((response) => {
        setMeal(response.data?.hits.map((item: any) => item.recipe));
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      });
    setLoading(false);
  };

  useEffect(() => {
    getMeal();
  }, [activeTab]);
  return (
    <>
      {loading && <PageLoader />}
      <div className="pb-10">
        <div className="tabs mt-5">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 gap-2">
            <li className="">
              <a
                href="#"
                onClick={() => handleTabClick(0)} // Set the active tab index to 0 on click
                className={`inline-block bg-lightprimary p-4 rounded-t-lg border-b-2 ${
                  activeTab === 0
                    ? "border-[#ED5252] hover:border-[#ED5252] hover:font-bold"
                    : "border-lightprimary hover:border-[#ED5252] hover:font-bold"
                } text-[18px] text-subtext`}
              >
                <span>Diet</span>{" "}
              </a>
            </li>
            <li className="">
              <a
                href="#"
                onClick={() => handleTabClick(1)} // Set the active tab index to 1 on click
                className={`inline-block bg-lightprimary p-4 rounded-t-lg border-b-2 ${
                  activeTab === 1
                    ? "border-[#FEB019] hover:border-[#FEB019] hover:font-bold"
                    : "border-lightprimary hover:border-[#FEB019] hover:font-bold"
                } text-[18px] text-subtext`}
              >
                <span>Weight gain</span>{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className=" p-5 mt-5 bg-lightprimary rounded-lg">
          <div className="flex justify-between">
            <span className="pb-5  font-semibold text-[20px] text-subtext">
              Meal Plan
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <>
              {meal.length === 0 ? (
                <div className="text-center">
                  <p>No meal found</p>
                </div>
              ) : (
                // eslint-disable-next-line array-callback-return
                meal.map((item: any, index: number) => {
                  return (
                    <div
                      key={index}
                      className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
                    >
                      <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                        <img
                          src={item.image}
                          alt="ui/ux review check"
                          style={{ width: "100%", objectFit: "cover" }}
                        />
                      </div>

                      <div className="px-6 py-2">
                        <div>
                          <div className="flex items-center">
                            <div
                              className={`w-5 h-5 rounded-full bg-red-500`}
                              style={{ width: "10px", height: "10px" }}
                            ></div>
                            <p className="ms-1 text-sm">FAT</p>
                          </div>
                        </div>{" "}
                        <div>
                          <div className="flex items-center">
                            <div
                              className={`w-5 h-5 rounded-full bg-green-500`}
                              style={{ width: "10px", height: "10px" }}
                            ></div>
                            <p className="ms-1 text-sm">CARB</p>
                          </div>
                        </div>{" "}
                        <div>
                          <div className="flex items-center">
                            <div
                              className={`w-5 h-5 rounded-full bg-blue-500`}
                              style={{ width: "10px", height: "10px" }}
                            ></div>
                            <p className="ms-1 text-sm">PROTEIN</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item?.healthLabels.map(
                            (item: any, index: number) => {
                              return (
                                <div
                                  key={index}
                                  className="bg-gray-100 p-1 rounded-lg"
                                >
                                  <p
                                    className="antialiased font-normal leading-relaxed text-gray-700"
                                    style={{ fontSize: "12px" }}
                                  >
                                    {item}
                                  </p>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </>
          </div>
        </div>
      </div>
    </>
  );
};
