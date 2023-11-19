import React from 'react'
import { GoVerified , GoCheckCircleFill} from "react-icons/go";
import { useNavigate } from 'react-router-dom';


const Success = () => {
    const navigate = useNavigate()
  return (
    <div className="cancel-6">
    <div className="success">
      <h2>
        <GoVerified />
      </h2>
      <h1>Success</h1>
      <p>Your payment Was successful A receipt for this purchase has been sent to your email</p>

      <button onClick={()=>navigate("/")}>To Home</button>
    </div>
  </div>
  )
}

export default Success
