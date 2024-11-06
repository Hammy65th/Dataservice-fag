import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import Error from '../../components/Error'

import useRequestData from '../../hooks/useRequestData'
import Title from '../../components/Title'


const PostDetails = () => {
 
  const { id } = useParams()

  const { makeRequest,isLoading,data,error } = useRequestData()
  

  useEffect( ()=> {

    makeRequest("https://jsonplaceholder.typicode.com/posts/" + id)

  }, [] )





  // Vis alt Indhold om den post ift ID

    // Modtage ID for udvalgt post
    // Reqest API efter /posts/ID
 
    return (
    <section>

    <Title titleText={"Post Detaljer"}/>

    { isLoading && <Loader/> }

    { error && <Error/> }

    {data && 
    
    <div>
      <h2 className='font-bold text-2xl'>{data.title}</h2>
      
      <h4 className='text-sm'>ID: {data.id}</h4>

      <p>{data.body}</p>
      
    </div>

    }

    <div className='text-center my-3'>ID der er klikket på : { id }</div>
    
    
    
    </section>
  )
}

export default PostDetails