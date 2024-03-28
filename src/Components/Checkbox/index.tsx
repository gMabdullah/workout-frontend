import React from "react";
interface Props {
  id: string;
  value?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = (props: Props) => {
  return (
    <label className="containercheckbox">
      <input
        id={props?.id}
        type="checkbox"
        value={props?.value}
        checked={props?.checked}
        onChange={props?.onChange}
        name="checkbox"
        className="custom-control-input"
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
