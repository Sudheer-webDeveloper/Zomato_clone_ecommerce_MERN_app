import React from 'react'
import {AiFillStar} from 'react-icons/ai'


const BottomSection = ({items,translate}) => {
  return (
    <>
    <div className="info-2" >
        <div className={`overview_contcat ${translate ? "translate" : ""}`}>
          <div className="overview-2">
             <h1>About the place</h1>
             <div className="cuisine">
                <h2>Cuisine</h2>
                {items.cuisine.map((cuisine,index)=>{
                    return <span key={index}>{cuisine.name} ,</span>
                })}
             </div>

             <div className="cost-2">
                <h2>Average Cost</h2>
                 <span> ₹ {items.min_price}</span>
             </div>

             <div className="rating-2">
                <h2>Rating</h2>
                <span><AiFillStar /></span>
                <span>{items.aggregate_rating} </span>
                <span>{items.rating_text} </span>
             </div>
            
          </div>
          <div className="contact-2">
            <h1>Contact Info :</h1>
            <div className="number-1">
                <h2>Phone:No</h2>
                 <span>{items.contact_number}</span>
             </div>
            <div className="city-2">
                <h2>City</h2>
                 <span>{items.city},</span>
                 <span>{items.locality}</span>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BottomSection
