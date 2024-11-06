import React from 'react'
import { Link } from "react-router-dom";

const Todocard = ({t}) => {
  return (
    <div className='container p-4 border-2 border-red-600'>
        <div>
        <p className="text-2xl group-hover:text-white text-tahiti-dark">{t.title}</p>

        <p className="p-4 my-3 border border-tahiti-dark group-hover:border-white">Post ID: {t.id}</p>

        <Link to={"/todosdetails/" + p.id } className="inline-block px-4 py-2 mt-5 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Læs Mere</Link>
        
        <p>{t.id}</p>
        </div>
    </div>
  )
}
 
export default Todocard