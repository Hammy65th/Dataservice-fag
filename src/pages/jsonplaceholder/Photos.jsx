import { useEffect, useState } from "react";
import Title from '../../components/Title'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
 
import Photocard from './PhotoCard' 
import useRequestData from '../../hooks/useRequestData'
 
const Photos = () => {
 
 
 // Logik - Functions - Kald Api - Hooks mv.
 const { makeRequest, isLoading, data, error } = useRequestData();

 //State til søgeord

 const [searchWord, setSearchWord] = useState("nisi")

 //State til pagination
 const [itemsPerPage, setItemsPerPage] = useState(10) // Bliver ved med at svare 10
 const [currentStartIndex, setCurrentStartIndex] = useState(0) // 0 - 10 - 20 - 30 - 40 (Hver klik på next)

 

 useEffect(() => {
   makeRequest("https://jsonplaceholder.typicode.com/photos");
 }, []); // [] tomme kører useEffect kun 1 gang - ved load af component
 
     
      return(
       
        <div className='container'>
       
        <Title titleText="Photos fra JSON Placeholder API" />
        <div>
       <input type="text" onChange={ ( e ) => setSearchWord( e.target.value ) } 
       placeholder="Søge Felt" className="w-auto px-3 py-2 my-6 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
     </div>

     {isLoading && <Loader />}

     {error && <Error/>}

     {  
     data &&
       <div>
     
       <p>Posts pr. Side</p>
       <select onChange={ ( e ) => {setItemsPerPage(parseInt ( e.target.value ) ) } }>
         <option value={5}>5</option>
         <option value={10}>10</option>
         <option value={20}>20</option>     
         <option value={50}>50</option>     
         <option value={100}>100</option>     
         <option value={200}>200</option>     
         <option value={500}>500</option> 
       </select>
       </div>
     }

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
       {
         data && data
       
       // .filter(p => p.id >= 10 && p.id <= 15)
       // .filter(p => p.body.includes("culpa") && p.id >= 10 && p.body.includes("enim")) //Flere requirements på et filter indsnævrer
       // .filter(p => p.body.includes( searchWord ))
       
       // .slice(0,10)
       // .slice(10,20)
       // .slice(20,30)
       // .slice(30,40)
       .slice( currentStartIndex, itemsPerPage + currentStartIndex) // 0 , 10+0 ...fx 50, 10 + 50
      
       .map( (p) => 
     

            <Photocard p={p} key={p.id}/> 
       
         )
       }
     </div>

     <div>
   {
     data &&
     <>
       <button onClick={ () => setCurrentStartIndex( currentStartIndex - itemsPerPage )}
       disabled={ currentStartIndex <= 0}
       className="inline-block px-4 py-2 mt-5 mr-10 font-bold text-white bg-emerald-500 hover:bg-emerald-700">&#8612; Forrige 10 Posts </button>
       




       {
         [...Array( Math.ceil (data.length / itemsPerPage ) ) ].map( ( x, i ) => 
         <button
           onClick={ (  ) => setCurrentStartIndex( i * itemsPerPage ) }
           key ={ "btn" + i }
           // className={"inline-block px-4 py-2 mt-5 font-bold text-white bg-emerald-500 hover:bg-emerald-700 mr-4 "  + ( i*itemsPerPage === currentStartIndex ? " border-2 border-emerald-900" : null )}>
           className={ `inline-block px-4 py-2 mx-2 mt-5 font-bold text-white rounded ${ i * itemsPerPage === currentStartIndex ? "bg-blue-600" : "bg-emerald-500" }  hover:bg-emerald-700` }>
           { i + 1 }</button>)
       }


       <button onClick={ () => setCurrentStartIndex( currentStartIndex + itemsPerPage )}
       disabled={ currentStartIndex >= (data.length - itemsPerPage) } // 90 - 100 -10
       className="inline-block px-4 py-2 mt-5 ml-4 font-bold text-white bg-emerald-500 hover:bg-emerald-700">Næste 10 Posts &#8614; </button>
     </>
     
     
   }
   </div>

   </div>
   

      )
}
 
export default Photos