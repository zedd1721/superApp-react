import React from "react";
import { useState } from "react";
import styled from "../components/Regform.module.css";

function Regform() {
  const [formValues, setformValues] = useState({
    name: "",
    user: "",
    email: "",
    mobile: "",
    checkbox: false,
  });
  const handleInput = (e) =>{
    setformValues({...formValues, [e.target.name]: e.target.value});
  };
  return (
    <div className={styled.right}>
      <div className={styled.center}>
        <div className={styled.logohead}>
          <img src="./Superlogo.png" alt="" />
          <p>Create your new account</p>
        </div>

        <div className={styled.forms}>
          <input
            type="text"
            placeholder="Name"
            value={formValues.name}
            onChange={handleInput}
            name="name"
          />
          <input
            type="text"
            placeholder="UserName"
            value={formValues.user}
            onChange={handleInput}
            name="user"
          />
          <input
            type="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleInput}
            name="email"
          />
          <input
            type="text"
            placeholder="Mobile"
            value={formValues.mobile}
            onChange={handleInput}
            name="mobile"
          />
          <div className={styled.terms}>
            <input
              type="checkbox"
              id="term"
              value={formValues.checkbox}
              onChange={handleInput}
              name="checkbox"
            />
            <label htmlFor="term">
              Share my registration data with Superapp
            </label>
          </div>
          <button>SIGN UP</button>
          <p>
            By clicking on Sign up. you agree to Superapp{" "}
            <span>Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Regform;
