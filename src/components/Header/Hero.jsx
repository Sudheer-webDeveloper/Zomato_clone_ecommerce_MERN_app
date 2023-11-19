import React from 'react'
import { useState } from "react";
import { usefetching } from "../../customHooks/useFetch";
import {useNavigate } from 'react-router-dom';

const location_url = "http://localhost:3000/api/get_location_list";
const Hero = () => {
  
    const navigate = useNavigate()
    const [placeholder, setPlaceholder] = useState("Get a Loacation");
    const [Locations, setLocations] = useState([]);
    const [restaurants, setRestaurants] = useState([]) // These are the restaurants there by loc_id

  const get_location_list = async () => {
    try {
      setPlaceholder("Getting Location");
      const data = await usefetching(location_url);
      setLocations(data.Location_result)
      setPlaceholder("Here is the Location List");
    } catch (error) {
      setPlaceholder("Failed to Get Locations");
      console.log("The error is here", error);
    }
  };

  const gettingRestaruantsByLocID = async(id,name,city) =>{
     try{
      const data = await usefetching(`http://localhost:3000/api/get_restaurant_list_location_id/${id}`)
      setPlaceholder(`${name}, ${city}`)
      setRestaurants(data.Restaurant_list)
      setLocations([])
     }
     catch(error){
        console.log("Error From getting restaurant by loc_id")
     }
  }
  
  return (
   <>
<div className="row d-flex flex-column">
          <div className="main">
            <div>
              <div className="logo">
                <span>e!</span>
              </div>
            </div>
            <div>
              <h1 className="h1 col-12 col-sm-12 col-md-12 col-lg-12">
                Find the Best Restaurants ,cafes and bars
              </h1>
            </div>

            <div className="search">
              <div className="locations_input_1">
                <input
                  className=""
                  type="search"
                  placeholder={placeholder}
                  readOnly
                  onFocus={get_location_list}
                />
                <ul>
                  {Locations.map((location) => {
                    return (
                      <div key={location._id}>
                        <li onClick={()=>gettingRestaruantsByLocID(location.location_id,location.name,location.country_name)}>
                          {location.name} {location.country_name}
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>

              <div className="input-1">
                <label htmlFor="search-1">
                  <i
                    className="fa-solid fa-magnifying-glass"
                    style={{ color: "#000000" }}
                  ></i>
                </label>

                <input
                  type="search"
                  id="search-1"
                  placeholder=" Restaurants For Selected Loaction"
                  readOnly
                />
                <ul>
                  {restaurants.map((restaurant)=>{
                    const {_id,name,city,image} = restaurant
                    return (
                      <div key={_id} onClick={()=>navigate(`/${_id}`)}>
                        <li> <img src={`/images/${image}`} alt="" />{name}, {city}</li>
                      </div>
                    )
                  })}
                </ul>

              </div>
            </div>
          </div>
        </div>
   </>
  )
}

export default Hero




/*
// comments 
  I stored data like here beacuse , if we dont't use localstorage here, it was giving data to Locations variable on second click 
  
  JSON.parse(localStorage.getItem("Locations"))
localStorage.setItem("Locations", JSON.stringify(data.Location_result));


*/