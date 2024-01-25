import React from "react";
import FormRowVertical from "../ui/FormRowVertical";
import Form from "../ui/Form";

const SignUp = () => {
  return (  <div>
    <div className="flex-center flex-col sm:w-420">
      <img src="../assets/images/logo.svg" alt="logo" />
      <h2 className="h3-bold md:h2-bold pt-5 ">Create a new account</h2>
      <p className="small-medium md:base-regular text-light-3">
        To use SnapGram enter your details
      </p>
    </div>
    <Form>
    <FormRowVertical input="name" label="Name"></FormRowVertical>
      <FormRowVertical input="username" label="Username"></FormRowVertical>
      <FormRowVertical input="email" label="Email"></FormRowVertical>
      <FormRowVertical input="password" label="Password"></FormRowVertical>
      <button type="submit" className=" flex-center rounded-md px-3 py-2 shad-button_primary">Submit</button>
    </Form>
  </div>);

};

export default SignUp;
