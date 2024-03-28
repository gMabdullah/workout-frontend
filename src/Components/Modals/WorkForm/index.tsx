import React, { ChangeEvent, useState } from "react";
import { Inputs } from "../../Inputs";
import { OutlineBtn, PrimaryBtn } from "../../Buttons";

import { LoadingBtn } from "../../Buttons/LoadingBtn";
import { useAddWorkouts } from "../../../hooks/Workouts/useAddAppointments";
import { useSelector } from "react-redux";
import { loginUser } from "../../../store/slices";

interface ICmsFormModal {
  id?: number;
  onClose?: () => void;
}
export const WorkOutModal = (props: ICmsFormModal) => {
  const { onClose } = props;
  const _loginUser = useSelector(loginUser);

  const [formData, setFormData] = useState<any>({});
  const { handleAddWorkout, setLoading, loading } = useAddWorkouts();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSelect = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleClose = async () => {
    onClose && onClose();
  };

  const onSubmitClick = async () => {
    const payload = {
      ...formData,
      week: Number(formData?.week),
      user_id: _loginUser?.details?.id,
      [formData?.exerciseName === "Walk/Running"
        ? "distanceKm"
        : formData?.exerciseName === "Yoga"
          ? "timeMinutes"
          : "reps"]: Number(formData?.unit),
    };
    setLoading(true);
    delete payload?.unit;
    await handleAddWorkout(payload);
    handleClose();
    setLoading(false);
  };
  return (
    <>
      <div className="leading-loose">
        <div className="bg-primary p-5 rounded-lg mt-5">
          <form className="  ">
            <div className="grid md:grid-cols-2 md:gap-6 ">
              <div>
                <label
                  htmlFor="FNamse"
                  className="block mb-2 text-[16px] font-bold text-subtext dark:text-white"
                >
                  Excercie Name
                </label>
                <select
                  id="countries"
                  name={"exerciseName"}
                  onChange={onSelect}
                  defaultValue={"Pushup"}
                  value={formData?.exerciseName}
                  className="bg-transparent border border-border text-subtext text-sm rounded-lg focus:ring-border focus:border-border block w-full p-2.5 focus-visible:outline-border peer-focus:ring-lightprimary"
                >
                  {["Pushup", "Chinup", "Walk/Running", "Yoga"].map(
                    (item, key) => {
                      return (
                        <option
                          className="bg-lightprimary "
                          key={key}
                          value={item}
                        >
                          {item}
                        </option>
                      );
                    }
                  )}
                </select>
              </div>
              <Inputs
                label={
                  formData?.exerciseName === "Walk/Running"
                    ? "KM"
                    : formData?.exerciseName === "Yoga"
                      ? "Minutes"
                      : "Number"
                }
                type={"text"}
                id={"unit"}
                value={formData.unit}
                handleChange={handleChange}
                name={"unit"}
                borderWidth="border-2"
              />
            </div>
            <div className="grid md:grid-cols-2 md:gap-6 ">
              <Inputs
                label={"Date"}
                type={"date"}
                id={"city"}
                value={formData.date}
                handleChange={handleChange}
                name="date"
                borderWidth="border-2"
              />
              <Inputs
                label={"Time"}
                type={"time"}
                id={"ZipCode"}
                value={formData.time}
                handleChange={handleChange}
                name="time"
                borderWidth="border-2"
              />
            </div>

            <div className="grid md:grid-cols-2 md:gap-6 ">
              <div>
                <label
                  htmlFor="FName"
                  className="block mb-2 text-[16px] font-bold text-subtext dark:text-white"
                >
                  Select Week
                </label>
                <select
                  id="countries"
                  name={"week"}
                  onChange={onSelect}
                  value={formData?.week}
                  className="bg-transparent border border-border text-subtext text-sm rounded-lg focus:ring-border focus:border-border block w-full p-2.5 focus-visible:outline-border peer-focus:ring-lightprimary"
                >
                  <option className="bg-lightprimary " value={1}>
                    First Week
                  </option>
                  <option className="bg-lightprimary " value={2}>
                    Second Week
                  </option>
                  <option className="bg-lightprimary " value={3}>
                    Third Week
                  </option>
                  <option className="bg-lightprimary " value={4}>
                    Fourth Week
                  </option>
                </select>
              </div>
            </div>
          </form>
          <div className=" flex justify-center gap-5 flex-wrap mt-5">
            {loading ? (
              <LoadingBtn />
            ) : (
              <>
                <OutlineBtn
                  btntitle={"Cancel"}
                  btnIcon={""}
                  onClick={handleClose}
                />
                <PrimaryBtn
                  title={"Save"}
                  btnIcon={""}
                  onClick={onSubmitClick}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
