import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "../components/Regform.module.css";

function Regform() {
  const navigate = useNavigate();
  const [formValues, setformValues] = useState({
    name: "",
    user: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    name: null,
    user: null,
    email: null,
    mobile: null,
    checkbox: null,
  });

  const handleInput = (e) => {
    setformValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handlesignup = () => {
    let isError = false;
    if (formValues.name.trim().length === 0) {
      setErrors((prev) => ({ ...prev, name: "Field is Required" }));
      isError = true;
    } else {
      setErrors((prev) => ({ ...prev, name: null }));
    }
    if (formValues.user.trim().length === 0) {
      setErrors((prev) => ({ ...prev, user: "Field is Required" }));
      isError = true;
    } else {
      setErrors((prev) => ({ ...prev, user: null }));
    }
    if (formValues.email.trim().length === 0) {
      setErrors((prev) => ({ ...prev, email: "Field is Required" }));
      isError = true;
    } else {
      setErrors((prev) => ({ ...prev, email: null }));
    }
    if (formValues.mobile.trim().length === 0) {
      setErrors((prev) => ({ ...prev, mobile: "Field is Required" }));
      isError = true;
    } else {
      setErrors((prev) => ({ ...prev, mobile: null }));
    }
    if (formValues.checkbox === false) {
      setErrors((prev) => ({
        ...prev,
        checkbox: "Please accept the terms and condition",
      }));
      isError = true;
    } else {
      setErrors((prev) => ({ ...prev, checkbox: null }));
    }
    if (!isError) {
      navigate("/select");
    }
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
          {errors.name ? <p style={{ color: "red" }}>{errors.name}</p> : <></>}
          <input
            type="text"
            placeholder="UserName"
            value={formValues.user}
            onChange={handleInput}
            name="user"
          />
          {errors.user ? <p style={{ color: "red" }}>{errors.user}</p> : <></>}
          <input
            type="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleInput}
            name="email"
          />
          {errors.email ? (
            <p style={{ color: "red" }}>{errors.email}</p>
          ) : (
            <></>
          )}
          <input
            type="text"
            placeholder="Mobile"
            value={formValues.mobile}
            onChange={handleInput}
            name="mobile"
          />
          {errors.mobile ? (
            <p style={{ color: "red" }}>{errors.mobile}</p>
          ) : (
            <></>
          )}
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
          {errors.checkbox ? (
            <p style={{ color: "red" }}>{errors.checkbox}</p>
          ) : (
            <></>
          )}
          <button onClick={handlesignup}>SIGN UP</button>
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
