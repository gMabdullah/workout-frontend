import React from "react";
import { CrossIcon } from "../../Icons";
import { time } from "console";
interface IModalInterface {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  header?: string;
}
export const ModalInterface = ({
  isOpen,
  children,
  className,
  onClose,
  header,
}: IModalInterface) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      className="bg-black fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50"
      style={{ zIndex: 1000 }}
    >
      <div
        className={`relative bg-lightprimary p-5 pt-0 rounded-lg shadow-md w-[90%] max-h-[80vh] overflow-y-scroll lg:overflow-y-auto ${className}`}
      >
        <div className="sticky top-0 py-5 bg-lightprimary z-10 text-center text-subtext  font-bold text-[24px]">
          {header}{" "}
          <div
            className="absolute  right-5 top-5 h-[32px] w-[32px] rounded-full bg-admintitle flex justify-center items-center cursor-pointer"
            onClick={onClose}
          >
            <CrossIcon />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
