import React, { useState } from "react";

//
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onchange = (e) => {
    const { value, name } = e.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const registrationSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    console.log("our fronted", data);
    try {
      const { data } = await axios.post("/register", {
        name: name,
        email: email,
        password: password,
      });
      //const { data } = await axios.post('/register', { name: name, email: email, password: password });: Sends a POST request to /register endpoint using Axios, passing an object with name, email, and password as the payload. It awaits the response and destructures the data property from the response object.
      console.log("see here", data);
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Registation Successful");
        navigate("/login");
      }
    } catch (error) {
      console.log(error, "error from frontend");
    }
  };

  return (
    <div className="registration-form-4">
      <form onSubmit={registrationSubmit} className="form-4">
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={onchange}
          placeholder="name"
        />

        <input
          type="eamil"
          name="email"
          value={data.email}
          onChange={onchange}
          placeholder="email"
          required
        />

        <input
          type="password"
          name="password"
          value={data.password}
          onChange={onchange}
          placeholder="password"
        />
        <div className="button-4">
          <button type="submit" >Register</button>
  

        </div>

        <h6>Already have an Account <span onClick={()=>navigate("/login")}>Log In</span> </h6>

      </form>
    </div>
  );
};

export default Registration;
