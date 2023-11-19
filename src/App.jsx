import React from "react";
import "./App.css";
import "./responsive.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutRoute from "./components/Layout/LayoutRoute";
import HomePage from "./components/Routes/HomePage";
import SingleRestaurant from "./components/RestaurantDetails/SingleRestaurant";
//
import Login from "./Forms/Login";
import Registration from "./Forms/Registration";
import axios from "axios";
import { Toaster } from "react-hot-toast"; // It give the accsess to send the notification to the fontend whether user is regiseter or login
import Success from "./components/Checkouts/success";
import Cancel from "./components/Checkouts/cancel";
axios.defaults.baseURL = "http://localhost:3000/api/";
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Content-Type"] = "application/json";

//
import { useContext } from "react";
import { UserContext } from "./context/UserContext";


const App = () => {


  const {darkmode,setDarkmode,applyDark} = useContext(UserContext)
  console.log(darkmode)

  return (
    <>
    <div className={`${darkmode ?  "dark-mode" : "light-mode"}`}>
      <BrowserRouter>
          <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
          <Routes>
            <Route element={<LayoutRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
              <Route path="/:id" element={<SingleRestaurant />} />
            </Route>


               {/* checkout routes  */}

            <Route path="/checkout_success" element={<Success />} />
            <Route path="/checkout_cancel" element={<Cancel />} />

          </Routes>
      </BrowserRouter>
      </div>
    </>
  );
};

export default App;
