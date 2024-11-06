import React from 'react'
import photos from './PhotoDetails'

const Photocard = ({p}) => {
  return (
    <div className='container p-4 border-2 border-red-600'>
        <div>
            <p className='text-lg font-bold text-center capitalize'>{p.title}</p>
            <img src={p.thumbnailUrl}/>
            <p>ID {p.id}</p>
            
        </div>
    </div>
  )
}
 
export default Photocard