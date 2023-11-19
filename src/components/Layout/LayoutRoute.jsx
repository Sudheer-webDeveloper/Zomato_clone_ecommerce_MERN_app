import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'


const LayoutRoute = () => {
  return (
   <>
   <Navbar />
   <Outlet />
   </>
  )
}

export default LayoutRoute
