import React from 'react'
import "./News.css"
import Cat from "../assets/cattard.gif"


const Newspage = () => {
  return (
    <div className='container'>



      <h1>Der er nyheder</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam neque porro consequatur, sequi optio tenetur eligendi deleniti voluptatem illum?</p>
        
        <img src={Cat} alt="" />
    </div>
  )
}

export default Newspage