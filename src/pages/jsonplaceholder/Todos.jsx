import {useEffect, useState} from 'react'
import Title from '../../components/Title'
import Todoscard from './TodosCard'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
 
 
import useRequestData from '../../hooks/useRequestData'
 
const Todos = () => {
 
    const {makeRequest, isLoading, data, error} = useRequestData()

    // state til at Shuffle mellem vis Udførte/true og ikke-udførte/false 
    const [showCompleted, setShowCompleted] = useState(null) // True = viser alle completed, False = viser alle uncompleted
 

    
    useEffect(() => {
 
        makeRequest("https://jsonplaceholder.typicode.com/todos")
      }, [])
 
     
      return(
       
        <div className='container'>
       
        <Title titleText="Todo fra JSON Placeholder API" />
 
        {isLoading && <Loader/>}
 
        {error && <Error/>}

        {/* Vis ikke udførte knap */}
        <button onClick={ () => setShowCompleted ( false ) } className="inline-block px-4 py-2 mt-5 ml-4 font-bold text-white bg-red-500 hover:bg-red-700">
          Vis Manglende Udførte
        </button>

         {/* Vis udførte knap */}
        <button onClick={ () => setShowCompleted ( true ) } className="inline-block px-4 py-2 mt-5 mb-5 ml-4 font-bold text-white bg-emerald-500 hover:bg-emerald-700">
          Vis Udførte
        </button>

         {/* Vis alle knap */}
        <button onClick={ () => setShowCompleted ( null ) } className="inline-block px-4 py-2 mt-5 mb-5 ml-4 font-bold text-white bg-blue-500 hover:bg-blue-700">
          Vis Alle
        </button>
        
        <div className='grid grid-cols-4 gap-4 '>



        {data && 
        
        data
        
        // enten skal completed svare til state (true el. false) Eller være null
        .filter( t => t.completed === showCompleted || showCompleted === null)

        .map(t =>
        
        
        <div className={`p-4 border border-tahiti-dark ${t.completed === true ? "bg-emerald-500" : "bg-rose-500"}`}>
        
        <h2>{t.title} {t.completed === true ? "" : "L"}</h2>
        <p>ID: {t.id}</p>
        <a>Udført: {t.completed.toString()}</a>
        </div>)
        }
        </div>
        </div>
 
 
      )
}
 
export default Todos