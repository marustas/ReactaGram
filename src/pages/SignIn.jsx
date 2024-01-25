import React from "react";
import Form from "../ui/Form";
import FormRowVertical from "../ui/FormRowVertical";

const SignIn = () => {
  return (
    <div>
      <div className="flex-center flex-col sm:w-420">
        <img src="../assets/images/logo.svg" alt="logo" />
        <h2 className="h3-bold md:h2-bold pt-5 ">Create a new account</h2>
        <p className="small-medium md:base-regular text-light-3">
          To use SnapGram enter your details
        </p>
      </div>
      <Form>
        <FormRowVertical input="username" label="Username"></FormRowVertical>
        <FormRowVertical input="password" label="Password"></FormRowVertical>
      </Form>
    </div>
  );
};

export default SignIn;
