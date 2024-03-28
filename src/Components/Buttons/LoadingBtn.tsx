import React from "react";
import { VinchiLoader } from "../Loader";

export const LoadingBtn = () => {
  return (
    <button
      disabled
      className="flex justify-center bg-disablebtn  focus:ring-4  font-medium rounded-lg text-md  w-full px-5 py-2.5 text-center"
    >
      <VinchiLoader width={"30px"} height={"40px"} />
    </button>
  );
};
