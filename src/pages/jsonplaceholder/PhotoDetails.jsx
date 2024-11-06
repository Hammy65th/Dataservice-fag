import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import Error from '../../components/Error'

import useRequestData from '../../hooks/useRequestData'
import Title from '../../components/Title'


const PhotoDetails = () => {
 
  const { id } = useParams()

  const { makeRequest,isLoading,data,error } = useRequestData()
  

  useEffect( ()=> {

    makeRequest("https://jsonplaceholder.typicode.com/photos" + id)

  }, [] )





  // Vis alt Indhold om den post ift ID

    // Modtage ID for udvalgt post
    // Reqest API efter /posts/ID
 
    return (
    <section>

    <Title titleText={"Photo Details"}/>

    { isLoading && <Loader/> }

    { error && <Error/> }

    {data && 
    
    <div>
      <h2 className='text-2xl font-bold'>{data.title}</h2>
      
      <img className='text-sm'>ID: {data.id}</img>

      <p>{data.body}</p>
      
    </div>

    }

    <div className='my-3 text-center'>ID der er klikket på : { id }</div>
    
    
    
    </section>
  )
}

export default PhotoDetails