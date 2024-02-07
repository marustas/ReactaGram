import React, { useState } from "react";
import { useSignIn } from "../hooks/useSignIn";
import Form from "../ui/Form";
import FormRowVertical from "../ui/FormRowVertical";
import Loader from "../ui/Loader";

const SignIn = () => {
  const {isSigningIn, signIn} = useSignIn();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  function handleSubmit (e){
    e.preventDefault();
    if (!email || !password) return;

    signIn(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
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
      <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email">
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="shad-input rounded-md px-3 py-2" placeholder="email" id="email" type="text" disabled = {isSigningIn} />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <input value={password} onChange={(e) => setPassword(e.target.value)} className="shad-input rounded-md px-3 py-2" placeholder="password" id="password" type="password" disabled = {isSigningIn} />
      </FormRowVertical>
        <button className=" flex-center rounded-md px-3 py-3 mt-2 shad-button_primary">{
      isSigningIn ? <div className="flex-center gap-2">
        <Loader/>
        Loading...
        </div>  : "Sign In"}</button>
      </Form>
    </div>
  );
};

export default SignIn;
