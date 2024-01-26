import React from "react";

const Form = ({ children, onSubmit}) => {
  return <form onSubmit={onSubmit} className="rounded-sm px-9 pt-3 flex flex-col">{children}</form>;
};

export default Form;
