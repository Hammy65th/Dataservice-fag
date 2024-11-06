import { useEffect, useState } from "react";
import Title from "../../components/Title";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

import useRequestData from "../../hooks/useRequestData";

const Vehicles = () => {


    // Logik - Functions - Kald Api - Hooks mv.
    const { makeRequest, isLoading, data, error } = useRequestData();
  
    //State til søgeord
  
    //const [searchWord, setSearchWord] = useState("nisi")
  
    //State til pagination
    const [page, setPage] = useState(1)
    
    const [itemsPerPage, setItemsPerPage] = useState(10) // Bliver ved med at svare 10
    const [currentStartIndex, setCurrentStartIndex] = useState(0) // 0 - 10 - 20 - 30 - 40 (Hver klik på next)
  
    
    // Hent Data fra API når component er klar
    useEffect(() => {
      makeRequest("https://swapi.dev/api/vehicles/?page=" + page);
    }, [page]); // [] tomme kører useEffect kun 1 gang - ved load af component
  
    return(

        
        
       
        <div className='container'>

            
       
        <Title titleText="Vehicles From SWAPI API" />

        {
        data &&
        <>
            <button onClick={ () => setPage( page-1 )}
            disabled={ !data.previous } // 90 - 100 -10
            className="inline-block px-4 py-2 mt-5 mb-5 ml-4 font-bold text-yellow-300 transition-all bg-black duration-600 hover:scale-105"> Previous Page </button>

            <span className="p-2 mx-4">Current Page: { page }</span>

            <button onClick={ () => setPage( page+1 )}
            disabled={ !data.next } // 90 - 100 -10
            className="inline-block px-4 py-2 mt-5 mb-5 ml-4 font-bold text-yellow-300 transition-all bg-black duration-600 hover:scale-105"> Next Page </button>

        </>
      
      
        }
    
        {isLoading && <Loader/>}
 
        {error && <Error/>}

        
        
        <div className='grid grid-cols-4 gap-4 '>



        {data && 
        
        data.results.map((t) =>
        
            <div className='container p-4 text-yellow-300 capitalize transition-all bg-black border-2 border-black rounded duration-800 hover:scale-105' key={t.name}>
            <p className="text-lg font-bold text-center">{t.name}</p>
            <p>Manufacturer: {t.manufacturer}</p>
            <p>Model: {t.model}</p>
            <p>Crew: {t.crew}</p>
            <p>Passengers: {t.passengers}</p>
            <p>Provisions: {t.consumables}</p>
            <p>Hyperdrive Rating: {t.hyperdrive_rating}</p>
            <br />
            <p>Size :
                <li>Length : {t.length} Meters</li> 
                <li>Cargo Capacity: {t.cargo_capacity} Kg</li> 
            </p>

            <p className="mt-4">Class: {t.starship_class}</p>
            <br />
            <p>Date Added {new Date (t.created).toLocaleDateString()}</p>
            </div>
        
      )
      
        }
        <div>

    </div>
        </div>
        </div>
 
 
      )
}

export default Vehicles