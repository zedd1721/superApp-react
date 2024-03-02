import React from "react";
import styled from "./Signup.module.css";
import Regform from "../components/Regform";

function Signup() {
  return (
    <div className={styled.main}>
      <div className={styled.left}>
        <h1 className={styled.heading}>Discover new things on Superapp</h1>
      </div>
      <Regform />
    </div>
  );
}

export default Signup;
