import React from "react";
import { VinchiLoader } from "../Loader";

export const PageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-white opacity-75">
      <VinchiLoader width={"30px"} height={"40px"} />
    </div>
  );
};
