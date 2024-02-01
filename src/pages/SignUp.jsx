import React from "react";
import FormRowVertical from "../ui/FormRowVertical";
import Form from "../ui/Form";
import Loader from "../ui/Loader";
import { Link } from "react-router-dom";
import { useSignUp } from "../hooks/useSignUp";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {handleSubmit, reset, register } = useForm();

  const {isSigningUp, signUp} = useSignUp();

  function onSubmit({ email, password, username }) {
    signUp({ email, password, username }, { onSettled: () => reset() });
  }

  return (
  <div>
    <div className="flex-center flex-col sm:w-420">
      <img src="../assets/images/logo.svg" alt="logo" />
      <h2 className="h3-bold md:h2-bold pt-5 ">Create a new account</h2>
      <p className="small-medium md:base-regular text-light-3">
        To use SnapGram enter your details
      </p>
    </div>
    <Form onSubmit = {handleSubmit(onSubmit)}>
      <FormRowVertical label="Name">
        <input className="shad-input rounded-md px-3 py-2" placeholder="Name" id="name"  type="text" disabled = {isSigningUp} {...register("name")}/>
      </FormRowVertical>
      <FormRowVertical label="Username">
        <input className="shad-input rounded-md px-3 py-2" placeholder="username" id="username" type="text" disabled = {isSigningUp} {...register("username")} />
      </FormRowVertical>
      <FormRowVertical label="Email">
        <input className="shad-input rounded-md px-3 py-2" placeholder="email" id="email" type="email" disabled = {isSigningUp} {...register("email")} />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <input className="shad-input rounded-md px-3 py-2" placeholder="password" id="password" type="password" disabled = {isSigningUp} {...register("password")}/>
      </FormRowVertical>
      <button className="flex-center rounded-md px-3 py-2 shad-button_primary">{
      isSigningUp ? 
        <div className="flex-center gap-2">
          <Loader/>
          Loading...
        </div>  : "Sign Up"}</button>
        <p className="text-small-regular text-light-2 text-center mt-2">
          Already have an account?
          <Link to="/sign-in" className="ml-1 text-primary-500 text-small-semibold text-primary">Log in</Link>
        </p>
    </Form>
  </div>);

};

export default SignUp;
