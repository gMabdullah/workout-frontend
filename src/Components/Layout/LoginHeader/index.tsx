import React from "react";
import { ToggleModeButton } from "../../Buttons";

export const LoginHeader = () => {
  return (
    <div className="bg-secondary h-[103px] flex justify-between items-center px-10">
      <div className="">
        <img
          className="w-[60px]  rounded-full h-[60px] bg-white"
          src="/images/medicallogo.png"
          alt="logo"
        />
      </div>
      <div className="">
        <ToggleModeButton />
      </div>
    </div>
  );
};
