import React, { useState } from 'react'
import { useEffect } from 'react'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import useRequestData from '../../hooks/useRequestData'
import Title from '../../components/Title'
import WeatherCard from './WeatherCard'


const OpenWeather1 = () => {

    const {makeRequest, isLoading, data, error} = useRequestData()

    const [zip, setZip] = useState( "5631" )
 
    useEffect(() => {

        let pattern = /[0-9]{4}/

        if( pattern.test(zip) ) {

        makeRequest("https://api.openweathermap.org/data/2.5/weather?zip=" + zip +  ",dk&lang=da&units=metric&appid=" + import.meta.env.VITE_APP_OPENWEATHERAPIKEY)
    }

    }, [zip] )

    return (
        <section>

            <Title titleText={"Vejret for dit postnummer"}/>

            { isLoading && <Loader/> }

            {error && <Error/>}

            <input type="text" onChange={ (e) => setZip(e.target.value) } 
            
                placeholder='Indtast et validt postnummer' className='block px-3 py-2 border rounded shadow'></input>

            {data && 
            <WeatherCard data={data}/>
            
            // <div className='p-5 border shadow-md'>
            //     <h2 className='text-2xl font-bold'>{ data.name }</h2>

            //     <img src={"https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"} />
                
            //     <p> Vejret: { data.weather[0].description }</p>
                
            //     <p> Temperaturen : { Math.round  (data.main.temp) }&deg; c</p> // Round runder af så 11.5 bliver 12, og 11.2 bliver 11.

            //     <p> Vindhastighed : { data.wind.speed } m/s</p>

            //     <p> Luftfugtigjed : { data.main.humidity }%</p>

            //     <p> Sol står op kl. { new Date( data.sys.sunrise * 1000 ).toLocaleTimeString() }</p>
                
            //     <p> Sol går ned kl. { new Date(data.sys.sunset * 1000 ).toLocaleTimeString()}</p>
                 
            // </div>
            }

        </section>
    
  )
}

export default OpenWeather1