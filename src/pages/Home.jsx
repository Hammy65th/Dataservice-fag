import { useEffect } from 'react'
import Title from '../components/Title'


import useRequestData from '../hooks/useRequestData'
import Loader from '../components/Loader'
import Error from '../components/Error'

const Home = () => {
  
    // Logik - Functions - Kald Api - Hooks mv.
    const { makeRequest,isLoading,data,error } = useRequestData()
  
    useEffect( ()=> {

      makeRequest("https://jsonplaceholder.typicode.com/posts")

    }, [] ) // [] tomme kører useEffect kun 1 gang - ved load af component
    
    return (
    <div className='container'>

   
        
        <h1>Velkommen til Forsiden</h1>
        <Title titleText="Hvafaen" />

        { isLoading && <Loader/> }

        { error && <Error/> }

        {
          data && data.map( p => 
          
          <div key={p.id}> 
          {/* <p>{ p.title }</p>
          <p>{p.body}</p> */}
          </div>
        )
        }


    </div>


  )



}

export default Home