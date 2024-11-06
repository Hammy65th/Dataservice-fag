import React, { useState, useEffect } from 'react'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import useRequestData from '../../hooks/useRequestData'
import Title from '../../components/Title'
import WeatherCard from './WeatherCard'




const OpenWeather3 = () => {

    const {makeRequest, isLoading, data, error} = useRequestData()

    // DAWA Request
    const {makeRequest:makeRequestDawa, isLoading:isLoadingDawa, data:dataDawa, error:errorDawa} = useRequestData()

    const [zip, setZip] = useState( "5631" )
 
    useEffect(() => {

        

    let pattern = /[0-9]{4}/

    if( pattern.test(zip) ) {

        // Hvis inputs value (Zip) overholder pattern (4 tal) så vrequest vejret for valgte postnumre/zip
        makeRequest("https://api.openweathermap.org/data/2.5/weather?zip=" + zip.slice(0 , 4) +  ",dk&lang=da&units=metric&appid=" + import.meta.env.VITE_APP_OPENWEATHERAPIKEY)
    } else {
        // Hvis inputs value (zip) Ikke overholder... så hent postnummer forslag fra DAWA
        makeRequestDawa("https://api.dataforsyningen.dk/postnumre/autocomplete?q=" + zip)
        
    }


    }, [zip] )

    return (
        <section>

            <Title titleText={"Vejret for dit postnummer"}/>

            { isLoading && <Loader/> }

            {error && <Error/>}

            <h2>Du har Valgt: {zip}</h2>

            <input type="text" list='postnrlist' onChange={ ( e ) => setZip( e.target.value ) } 
            
                placeholder='Indtast et validt postnummer' className='block px-3 py-2 border rounded shadow'></input>

            <datalist id="postnrlist">
               
               {
                dataDawa && dataDawa.map ( p => 

                    <option value={ p.postnummer.nr } key={ p.postnummer.nr }>
                        { p.tekst }
                    </option>
                )    
               }
            </datalist>


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

export default OpenWeather3