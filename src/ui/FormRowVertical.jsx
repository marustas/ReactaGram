import React from "react";

const FormRowVertical = ({ label, children}) => {
  return (
    <div className="flex flex-col gap-2 py-1.5">
      <label>{label}</label>
      {children}
    </div>
  );
};

export default FormRowVertical;
