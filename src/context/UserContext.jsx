import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({})

export const UserContextProvider = ({children})=>{
  const [user,setUser] = useState(null)

  const [darkmode,setDarkmode] = useState(localStorage.getItem("Z-darkmode"))

  function applyDark (){
    setDarkmode((darkmode)=>{
      localStorage.setItem("Z-darkmode",darkmode)
      return !darkmode
    })
  }

    useEffect(()=>{
        axios.get('/profile').then((data)=>{
            console.log("From user context",data)
            setUser(data.data)
        })
    },[])

    return (
      <UserContext.Provider value={{user,setUser,darkmode,setDarkmode,applyDark}}>
         {children}
      </UserContext.Provider>  
    )
}