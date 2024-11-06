import { useEffect, useState } from "react";
import Title from "../../components/Title";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

import Planets from "./Planets";
import Vehicle from "./Vehicle";

import useRequestData from "../../hooks/useRequestData";

const People = () => {


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
      makeRequest("https://swapi.dev/api/people/?page=" + page);
    }, [page]); // [] tomme kører useEffect kun 1 gang - ved load af component
  
    return(

        
        
       
        <div className='container'>

            
       
        <Title titleText="People From SWAPI API" />

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
            <p>Height: {t.height} Cm</p>
            <p>Mass: {t.mass} Kg</p>
            <p>Hair Colour: {t.hair_color}</p>
            <p>Skin Colour: {t.skin_color}</p>
            <p>Birth Year: {t.birth_year}</p>
            <p>Gender {t.gender}</p>
            <br />
            <p>Homeworld: <Planets url={t.homeworld}/> </p>
            <br />
            <div>Vehicle :
            
            <ul className="list-disc">
            {
                t.vehicles.map(v =>
                    <li key={v} className="ml-5"><Vehicle url={v}/></li>
                )
            }
            </ul>
                
             </div>
            </div>
        
      )
      
        }
        <div>

    </div>
        </div>
        </div>
 
 
      )
}

export default People