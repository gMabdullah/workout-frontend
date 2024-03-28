import React, { ChangeEvent } from "react";

interface Props {
  label: string;
  type: string;
  id: string;
  value?: string;
  name?: string;
  disabled?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  borderColor?: string;
  borderWidth?: string;
  placeholder?: string;
}
const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
export const Inputs = (props: Props) => {
  const minAttribute = props.type === "date" ? getTodayDate() : undefined;
  return (
    <div className="relative z-0 w-full mb-5 group">
      <label
        htmlFor="FName"
        className="block mb-2 text-[16px] font-bold text-subtext dark:text-white"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        className={`bg-${props.disabled ? "disablebtn" : "transparent"} ${
          props.disabled && "cursor-not-allowed"
        } ${
          props?.disabled && "text-disabletext"
        } border border-border ${props?.borderWidth} ${
          props?.borderColor && props?.borderColor
        }  text-sm rounded-lg focus:ring-lightprimary focus:border-lightprimary block w-full p-2.5 peer-focus:ring-lightprimary focus-visible:outline-border`}
        placeholder={props?.placeholder}
        required
        disabled={props.disabled ?? false}
        name={props.name}
        onChange={props?.handleChange}
        min={minAttribute}
      />
    </div>
  );
};
