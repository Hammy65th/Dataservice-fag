import React from 'react'
import Logo from "../assets/Plane.png"
import "./Nopage.css"

const NoPage = () => {
  return (
    <div>


        <h1 className='ovs'>Siden Findes Ikke.</h1>
        <img src={Logo} alt="" />
        {/* <Logo></Logo> */}
    </div>
  )
}

export default NoPage