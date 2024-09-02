"use client"
import React, { useState } from "react";
import Image from "next/image";
import logo from "../Pictures/Logo-Login.jpg";
import axios from "axios";
import { useRouter } from 'next/navigation'
const Login = () => {
  const [TakeValue, SetTakeValue] = useState({
    email: "",
    password: "",
  });
  const [ErrorMail, SetErrorMail] = useState(false);
  const [ErrorPass, SetErrorPass] = useState(false);
  const router = useRouter()
  const ValidationLogin = async (TakeValue) => {
    try {
      const response = await axios.post("https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/", TakeValue);
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const CheckEmail = /^[a-zA-Z]{3,15}[0-9]{0,4}@(hotmail|yahoo|gmail|task).com$/g;
    const CheckPassword = /^(?=.*\d.{5,})[A-Za-z0-9]+$/;
    if (CheckEmail.test(TakeValue.email)) {
      SetErrorMail(false);
      if (CheckPassword.test(TakeValue.password)) {
        ValidationLogin(TakeValue);
        setTimeout(() => {
          router.push('/dashbord')
        }, 300);
        SetErrorPass(false);
      } else {
        SetErrorPass(true);
      }
    } else {
      SetErrorMail(true);
    }
  };
  const handleChange = (e) => {
    const Validation = { ...TakeValue };
    Validation[e.target.name] = e.target.value;
    SetTakeValue({ ...Validation });
  };
  return (
    <div>
      <div className="parent-login">
        <div className="container-login">
            {/* Here for card Login */}
          <div className="card-login border h-3/4 rounded-xl">
          {/* Here for Desgin Image */}
            <div className="img-login w-full flex justify-center items-center">
                <Image className="object-fill" src={logo} alt="Image Is Not Found"/>
            </div>
            {/* Here for Form input */}
            <form className="form-login" onSubmit={handleSubmit}>
                <div className="desgin-input">
                  {/* Here for Desgin Error if The email is not valid */}
                <div className="flex justify-center items-center">
                  <p className={`text-xs text-red-700 ${ErrorMail ? "flex" : "hidden"}`}>Email is incorrect</p>
                </div>
                <label className="text-xs cursor-pointer" htmlFor="email">Email Address</label>
                <input className={`input-login ${ErrorMail ? "Error" : ""}`} type="email" id="email" name="email" onChange={handleChange} placeholder="nouran@cyparta.com"/>
                </div>
                <div className="desgin-input">
                  {/* Here for Desgin Error if The email is not valid */}
                <div className=" flex justify-center items-center">
                  <p className={`text-xs text-red-700 ${ErrorPass ? "flex" : "hidden"} `}>Password is incorrect</p>
                </div>
                <label className="text-xs cursor-pointer " htmlFor="Password">Password</label>
                <input className={`input-login ${ErrorPass ? "Error" : ""}`} type="password" id="Password" name="password" onChange={handleChange} placeholder="************"/>
                </div>
                <button className="button-login h-4 rounded-md font-bold">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// bokra hb2a akmal modo3 el layOut