import React from "react";
import { useState } from "react";

//
import axios from 'axios'
import {toast }from "react-hot-toast"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChanging = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const loginSubmit = async(e) => {
    e.preventDefault();
     const {email,password} = data;

     try {
      const {data} = await axios.post("/login",{email, password})
      console.log("login Data", data)

      if(data.error){
         toast.error(data.error)
      }
      else{
        setData({})
        navigate("/")
      }
     } catch (error) {
      console.log("error form fronted login",error)
     }

  };

  return (
    <>
      <div className="login-form registration-form-4">
        <form onSubmit={loginSubmit} className="form-4">
          <input
            type="eamil"
            name="email"
            value={data.email}
            onChange={onChanging}
            placeholder="email"
            required
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChanging}
            placeholder="Password"
          />
          <div className="button-4">
          <button type="submit">Login</button>
          </div>


          <h6>Dont have an Account <span onClick={()=>navigate("/register")}>SignUp</span> </h6>

        </form>
      </div>
    </>
  );
};

export default Login;
