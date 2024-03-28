import React from "react";
interface Props {
  btntitle: string;
  btnIcon: React.ReactNode;
  onClick: (e: React.SyntheticEvent) => Promise<void>;
}
export const GernalBtn = (props: Props) => {
  return (
    <button
      type="submit"
      onClick={props?.onClick}
      className=" text-base font-semibold font-['Plus Jakarta Sans'] text-subtext bg-admintitle  rounded-md  w-full sm:w-auto px-10 h-10 flex justify-center items-center gap-2  text-center"
    >
      {props?.btnIcon}
      {props?.btntitle}
    </button>
  );
};
