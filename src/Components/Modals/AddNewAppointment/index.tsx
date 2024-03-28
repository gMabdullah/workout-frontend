import React, { useState } from "react";
import { WorkoutDetails } from "../../WorkoutDetails";

export const WorkoutModal = (props: any) => {
  return (
    <>
      <div className=" flex flex-col gap-10 bg-lightprimary px-5">
        <WorkoutDetails
          workoutData={props.workoutData}
          handleClose={props.handleClose}
        />
      </div>
    </>
  );
};
