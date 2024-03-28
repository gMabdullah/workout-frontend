import React from "react";
import { OutlineBtn } from "../../Buttons";
import { LoadingBtn } from "../../Buttons/LoadingBtn";

interface IConfirmModal {
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  subtitle: string;
  loading: boolean;
}

export const ConfirmationModal: React.FC<IConfirmModal> = ({
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  title,
  subtitle,
  loading
}) => {
  return (
    <div className="p-5">
      <div className="text-center text-[20px] font-bold text-subtext mt-5">
        {title}
      </div>
      <div className="text-[16] text-[#9F9F9F] text-center p-5">
        {subtitle}
      </div>

      {loading ? (
        <LoadingBtn />
      ) : (
        <div className="flex flex-wrap gap-5 justify-center">
          <OutlineBtn btnIcon={""} btntitle={cancelText} onClick={onCancel} />
          <div
            className="font-bold bg-[#FF5555] text-white text-[12px] rounded-lg py-3  w-[190px] text-center cursor-pointer"
            onClick={onConfirm}
          >
            {confirmText}
          </div>
        </div>
      )}
    </div>
  );
};
