import React from 'react'

import { useState,useEffect } from 'react';

const useFetch = (url) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
  
    useEffect(()=>{
        const fetchingData = async()=>{

            try {
                const response = await fetch(url)
                const data = await response.json()
                setIsLoading(false);
               return setItems(data)
                
            } catch (error) {
                console.log("error", error)
                setIsLoading(false)
                setIsError(true)
            }
              
        }
        fetchingData()
    },[])

   return  {items,isLoading,isError}

}

export const usefetching = async(url) =>{

    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
        // console.log(data)
       } catch (error) {
         console.log("The error is here",error);
       }

}





export default useFetch



/*
const data = await usefetching(location_url);
    setLocations(data.Location_result)
    console.log(Locations)

*/