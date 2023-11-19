import React from "react";
import { GoXCircleFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';


const Cancel = () => {
    const navigate = useNavigate()

  return (
    <div className="cancel-6">
      <div className="error">
        <h2>
          <GoXCircleFill />
        </h2>
        <h1>Oh no!</h1>
        <p>An error occurred during your payment .Please try again</p>

        <button onClick={()=>navigate("..")}>Go Back</button>
      </div>
    </div>
  );
};

export default Cancel;
