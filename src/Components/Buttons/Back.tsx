import React from "react";

import { LeftArrowIcon } from "../Icons";

interface Props {
  onClick: () => void;
}
export const BackBtn = (props: Props) => (
  <button
    onClick={props.onClick}
    type="button"
    className="font-bold h-10 w-full sm:w-auto justify-center flex items-center gap-2 text-subtext bg-transparent  rounded-md text-sm  focus:outline-none focus:ring-subtext "
  >
    <LeftArrowIcon />
    Back
  </button>
);
