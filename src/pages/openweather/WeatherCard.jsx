import React from 'react'


const WeatherCard = ({ data }) => {
  
  
    
    return (
    <div className='p-5 my-5 border shadow-md'>
                <h2 className='text-2xl font-bold'>{ data.name }</h2>

                <img className="w-24" src={"https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"} />
                
                <p> Vejret: { data.weather[0].description }</p>
                
                 <p> Temperaturen : { Math.round  (data.main.temp) }&deg; c</p> {/*// Round runder af så 11.5 bliver 12, og 11.2 bliver 11. */}

                <p> Vindhastighed : { data.wind.speed } m/s</p>

                <p> Luftfugtigjed : { data.main.humidity }%</p>

                <p> Sol står op kl. { new Date( data.sys.sunrise * 1000 ).toLocaleTimeString() }</p>
                
                <p> Sol går ned kl. { new Date(data.sys.sunset * 1000 ).toLocaleTimeString()}</p>
                 
            </div>
  )
}

export default WeatherCard