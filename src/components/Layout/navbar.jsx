import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { IoMoon } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";


const Navbar = () => {
  
  const navigate = useNavigate()
  const {darkmode,setDarkmode,applyDark} = useContext(UserContext)

  return (
    <>
    <nav>
      <div className="logo-1">
        <h2 onClick={()=>navigate("/")} style={{cursor:"pointer"}}>e!</h2>
      </div>
     <div className="buttons">
        <button onClick={()=>applyDark()}>{darkmode? <IoSunnyOutline className="sun" /> : <IoMoon className="moon" />}</button>
        {/* <button>admin</button> */}
        <button className="btns" onClick={()=>navigate("/login")}>Login</button>
        <button className="btns" onClick={()=>navigate("/register")}>Create an Account</button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
