/* eslint-disable react/prop-types */
import React, { useState, Children, useEffect } from "react";
import { Calendar, momentLocalizer, ToolbarProps } from "react-big-calendar";
import moment from "moment";
import PropTypes from "prop-types"; // Import PropTypes
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useSelector } from "react-redux";
import { workOut } from "../../../store/slices";
import { ModalInterface } from "../../Modals";
import { OutlineBtn } from "../../Buttons";
const localizer = momentLocalizer(moment);
type CalendarView = "month" | "week" | "day";
export const UpcomingCalander = () => {
  const listworkOut = useSelector(workOut);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<any>({});
  const listEvent = () => {
    return listworkOut.flatMap((data: any) => {
      return data?.exercises.map((exercise: any) => {
        const date = new Date(data.date);
        const timeComponents = exercise.time.split(":");
        date.setHours(parseInt(timeComponents[0], 10));
        date.setMinutes(parseInt(timeComponents[1], 10));
        date.setSeconds(parseInt(timeComponents[2], 10));

        return {
          title: exercise.name,
          start: date,
          parentDate: data.date,
          end: date, // Assuming the exercise duration is not specified, so start and end are the same
        };
      });
    });
  };
  const customToolbar = (toolbar: ToolbarProps) => {
    const { label, onView } = toolbar;
    const handleViewClick = (view: CalendarView) => {
      onView && onView("month");
    };
    useEffect(() => {
      onView("month");
    }, []);

    return (
      <div className="flex justify-between">
        {/* Display the current view label */}
        <div style={{ marginBottom: "10px" }}>
          <strong>{label}</strong>
        </div>
        {/* Conditionally render month, week, and day buttons */}
      </div>
    );
  };
  const ColoredDateCellWrapper = ({
    children,
    value,
  }: {
    children: React.ReactNode;
    value: Date;
  }) => {
    return React.cloneElement(Children.only(children as any), {
      style: {
        ...(children as any).style,
        borderColor: "#272E50",
      },
    });
  };
  return (
    <div className="App w-100">
      <Calendar
        localizer={localizer}
        events={listEvent()}
        startAccessor="start"
        endAccessor="end"
        components={{
          toolbar: customToolbar,
          event: (props: any) => {
            const { title } = props;
            const titles = title?.split("~");
            return (
              <div
                className="text-xs"
                style={{ height: "100%" }}
                onClick={() => {
                  setModalData(
                    listworkOut.filter(
                      (item: any) => item.date === props?.event.parentDate
                    )[0]
                  );
                  setShowModal(true);
                }}
              >
                <div>
                  <span className="font-bold ">{title}</span>
                </div>
              </div>
            );
          },
          dateCellWrapper: ColoredDateCellWrapper,
          timeGutterWrapper: (props) => (
            <div className="text-subtext" {...props} />
          ),
        }}
        defaultDate={new Date()}
        defaultView="day"
        views={["month", "week", "day"]}
        style={{ height: "480px" }}
        className="text-subtext custom-calendar bg-transparent"
      />
      {showModal && (
        <ModalInterface
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          className={
            " sm:w-[70%]  lg:w-[60%] bg-lightprimary mt-20 p-0 h-[70%] "
          }
          header={"Workout Info"}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
            {modalData?.exercises?.map((item: any, key: any) => {
              return (
                <div
                  key={key}
                  className="p-5 max-w-sm rounded-lg overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                >
                  <div className="flex justify-between">
                    <div>{item?.name}</div>
                    <div>
                      <b>
                        {item?.reps
                          ? item?.reps
                          : item.minutes_spent
                            ? item.minutes_spent + "Minutes"
                            : item?.distance_in_km + "km"}
                      </b>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-5 mt-5 flex-wrap">
            <OutlineBtn
              btntitle={"Cancel"}
              btnIcon={<></>}
              onClick={() => setShowModal(false)}
            />
          </div>
        </ModalInterface>
      )}
    </div>
  );
};
// Add PropTypes validation for UpcomingCalander component
UpcomingCalander.propTypes = {
  title: PropTypes.string.isRequired,
};
