import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import Pastes from './Pastes'

const Navbar = () => {
  return (
    <div className=' flex flex-row gap-4 mt-5 '>
      

    <NavLink to="/home" >
        Home
    </NavLink>
    <NavLink to="/pastes" > 

        Pastes
    </NavLink>


    </div>
  )
}

export default Navbar
