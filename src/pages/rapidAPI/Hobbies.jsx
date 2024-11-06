import { useEffect } from 'react'
import Title from '../../components/Title'
import Error from '../../components/Error'
import Loader from '../../components/Loader'

import useRequestData from '../../hooks/useRequestData'

const Hobbies = () => {
  
  const { makeRequest, isLoading, data, error } = useRequestData()
  
    

  useEffect(() => {

    makeRequest("https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies", "GET", {
        
            'x-rapidapi-key': 'e48b15c275msh838996ffc0cd351p154c51jsn53acca5a821d',
            'x-rapidapi-host': 'hobbies-by-api-ninjas.p.rapidapi.com'
          
    }, )
  }, [])
  
  const getNewHobby = () => {
    
    makeRequest("https://hobbies-by-api-ninjas.p.rapidapi.com/v1/hobbies", "GET", {
        
        'x-rapidapi-key': 'e48b15c275msh838996ffc0cd351p154c51jsn53acca5a821d',
        'x-rapidapi-host': 'hobbies-by-api-ninjas.p.rapidapi.com'
      
    }, )
  }

  
    return (
    <section>

    <Title titleText={"Få dig dog en hobby"}/>

    {isLoading && <loader/>}

    {error && <error/>}

    {
        data && 
        
        <div className='p-6 text-center border shadow-lg border-emerald-500'>
            <h2 className='mb-6 text-2xæ font-bold'>Hobby: {data.hobby} </h2>
            <h2 className='p-6 capitalize'>Kategori: {data.category} </h2>
            <h2 className='p-6'>
            <a href={data.link} target='blank'>
                Læs mere om {data.hobby}
            </a>
            </h2>
            
            <button className='inline-block px-4 py-2 pt-6 font-bold text-white border rounded bg-emerald-700' onClick={ () => getNewHobby() } >Nej Tak - Giv mig en anden hobby</button>
        </div>
    }

    </section>
  )
}

export default Hobbies