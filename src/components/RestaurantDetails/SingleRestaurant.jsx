import React, { useState } from "react";
import useFetch from "../../customHooks/useFetch";
import { useParams } from "react-router-dom";
import TopSection from "./TopSection";
//we are using the api here which gives the restaurant by its ID

const SingleRestaurant = () => {
  const { id } = useParams();
  const { items, isLoading, isError } = useFetch(
    `http://localhost:3000/api/get_single_restaurant_details_by_id/${id}`
  );
//   console.log(items.Restaurant_list);

  if (isLoading) {
    return (
      <>
        <h2>Loading data</h2>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <h2>Error in Getting the Page</h2>
      </>
    );
  }

  return (
    <main>
        <TopSection items={items.Restaurant_list} key={items.Restaurant_list._id}/>
    </main>
  );
};

export default SingleRestaurant;











































/*
    // localStorage.setItem("resByID",JSON.stringify(items.Restaurant_list))
    // const restaurants = JSON.parse(localStorage.getItem("resBYID"))




     <main>
      <div className="image-2">
        <div className="img-2">
          <img
            src={`/images/${items.Restaurant_list.image}`}
            alt="Image Breakfast"
          />
        </div>
        <h1>{items.Restaurant_list.name}</h1>
      </div>
      <div className="slider-2">
        <button onClick={() => setTranslate(false)}>Overview</button>
        <button onClick={() => setTranslate(true)}>Contact</button>

        <div className={`moving ${translate? "translate-1" : ""}`}></div>
      </div>
      <hr  />
      <div className="info-2">
        <div className={`overview_contcat ${translate ? "translate" : ""}`}>
          <div className="overview-2">
             <h1>About the place</h1>

             <div className="cuisine">
                <h2>Cuisine</h2>
                {items.Restaurant_list.cuisine.map((cuisine)=>{
                    return <span>{cuisine.name} ,</span>
                })}
             </div>

             <div className="cost-2">
                <h2>Average Cost</h2>
                 <span> ₹ {items.Restaurant_list.min_price}</span>
             </div>

             <div className="rating-2">
                <h2>Rating</h2>
                <span><AiFillStar /></span>
                <span>{items.Restaurant_list.aggregate_rating} </span>
                <span>{items.Restaurant_list.rating_text} </span>
             </div>
            
          </div>
          <div className="contact-2">
            <h1>Contact Info :</h1>
            <div className="number-1">
                <h2>Phone:No</h2>
                 <span>{items.Restaurant_list.contact_number}</span>
             </div>
            <div className="city-2">
                <h2>City</h2>
                 <span>{items.Restaurant_list.city},</span>
                 <span>{items.Restaurant_list.locality}</span>
             </div>
          </div>
        </div>
      </div>
    </main>


*/
