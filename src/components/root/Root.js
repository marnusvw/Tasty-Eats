import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import HomePage from '../../pages/home/HomePage'

const Root = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default Root