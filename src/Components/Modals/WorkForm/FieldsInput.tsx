import React, { ChangeEvent, useState } from "react";
import { Inputs } from "../../Inputs";

const FieldsInput = (props: any) => {
  const {
    value,
    name,
    updateValue,
    indexToUpdate,
    evaluatedData,
    borderColor,
  } = props;
  const fieldValue: any = evaluatedData?.fields?.[name]?.[indexToUpdate];
  const [code, SetCodes] = useState(value);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    SetCodes(value);
    updateValue(name, indexToUpdate, value);
  };
  return (
    <>
      <Inputs
        label={name}
        type={"text"}
        id={"PName"}
        value={code}
        handleChange={handleChange}
        name={"patientName"}
        borderColor={borderColor(fieldValue?.[value] ?? 0)}
        borderWidth="border-2"
      />
    </>
  );
};

export default FieldsInput;
