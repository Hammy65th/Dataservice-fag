import React from 'react'
import Cat2 from "../assets/cat.gif"

const Contact = () => {
  return (
    <div className='container'>



        <h2>Tilmeld dig vores nyhedsbrev </h2>

        <form>
            <label>
                Din mailadresse:ㅤ
                
                <input type="email" placeholder='Skriv din mail her' />
            </label>
        </form>

        <img src={Cat2} alt="" />

    </div>

  )
}

export default Contact