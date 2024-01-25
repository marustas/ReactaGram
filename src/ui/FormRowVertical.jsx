import React from "react";
import Input from "./Input";

const FormRowVertical = ({ label, input }) => {
  return (
    <div className="flex flex-col gap-2.5 py-2">
      <label>{label}</label>
      <Input input={input} />
    </div>
  );
};

export default FormRowVertical;
