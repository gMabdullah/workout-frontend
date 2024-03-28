import React from "react";
interface Props {
  title: string;
  btnIcon: React.ReactNode;
  onClick: () => void;
}
export const PrimaryBtn = (props: Props) => (
  // bluebtn
  <div
    onClick={props?.onClick}
    className="cursor-pointer text-base font-semibold font-['Plus Jakarta Sans'] text-white bg-btn  rounded-md  w-full sm:w-auto px-10 h-10  text-center flex justify-center items-center gap-2"
  >
    {props?.btnIcon}
    {props?.title}
  </div>
);
