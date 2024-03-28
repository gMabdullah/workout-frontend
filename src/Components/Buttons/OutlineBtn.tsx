import React from "react";
interface Props {
  btntitle: string;
  btnIcon: React.ReactNode;
  onClick: () => void;
}

export const OutlineBtn = (props: Props) => {
  return (
    <div
      onClick={props?.onClick}
      className="text-base font-semibold font-['Plus Jakarta Sans'] text-outlinebtntext  border-2 border-btn rounded-md  w-full sm:w-auto px-10 h-10  text-center flex items-center justify-center gap-2 cursor-pointer"
    >
      {props?.btnIcon}
      {props?.btntitle}
    </div>
  );
};
