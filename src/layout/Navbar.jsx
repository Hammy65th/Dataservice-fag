import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'

import { LiaHamburgerSolid } from "react-icons/lia";


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    


    return (
   
    <nav className='relative text-white nav1 bg-emerald-500'>
       
       <div className='container'>
        
        <div className="flex items-center justify-between py-4">

        <div className="p-6">Dataservice A/S</div>
        
        <button onClick={ ()=> setShowMenu( !showMenu )} className='mr-2 bg-emerald-500 md:hidden'>
            <LiaHamburgerSolid size="2rem" />
        </button>
        
        {/* <menu className='absolute top-0 left-0 flex-col h-screen p-10 bg-emerald-900'> */}
        <menu className={ `absolute top-0 flex-col md:flex-row md:bg-transparent md:h-auto md:flex md:left-0 md:static h-screen  md:p-0 p-10 ${ showMenu === true ? "left-0" : "-left-full" } transition-all duration-1000 bg-emerald-900` }>
            <li className='mx-4 my-5'>
                <NavLink to="/">Forside</NavLink>
            </li>
            <li className='mx-4 my-5'>
                <NavLink to="/about">About</NavLink>
            </li>
            <li className='mx-4 my-5'>
                <NavLink to="/news">News</NavLink>
            </li>
            <li className='mx-4 my-5'>
                <NavLink to="/contact">Contact</NavLink>
            </li>

            {/* SWAPI: Dropdown - Husk Class relative og group */}
            <li className='relative mx-5 my-5 group'>
            STAR WARS MAKKER!
          <menu className='w-auto md:hidden md:group-hover:block md:group-hover:absolute md:bg-tahiti-dark whitespace-nowrap'>
            <li className='mx-4 my-5'>
                <NavLink to="/starships">Starships</NavLink>
            </li>
            <li className='mx-4 my-5'>
                <NavLink to="/people">People</NavLink>
            </li>
            <li className='mx-4 my-5'>
                <NavLink to="/vehicles">Vehicles</NavLink>
            </li>
            
            </menu>
            </li>
            
            {/* JSON Placeholder: Dropdown - Husk Class relative og group */}
            <li className='relative mx-5 my-5 group'>
            Json Placeholder
          <menu className='w-auto md:hidden md:group-hover:block md:group-hover:absolute md:bg-tahiti-dark whitespace-nowrap'>
            <li className='mx-4 my-5'>
                <NavLink to="/posts">Posts</NavLink>
            </li>
            <li className='mx-4 my-5'>
                <NavLink to="/photos">Photos</NavLink>
            </li>
            <li className='mx-4 my-5'>
                <NavLink to="/todo">Todo</NavLink>
            </li>
            </menu>
            </li>
            {/* News API: Dropdown - Husk Class relative og group */}
            <li className='relative mx-5 my-5 group'>
            News API
          <menu className='w-auto md:hidden md:group-hover:block md:group-hover:absolute md:bg-tahiti-dark whitespace-nowrap'>
            <li className='mx-4 my-5'>
                <NavLink to="/everything">Everything</NavLink>
            </li>
            
            </menu>
            </li>
            
            <li className='relative mx-5 my-5 group'>
            Weather API
          <menu className='w-auto md:hidden md:group-hover:block md:group-hover:absolute md:bg-tahiti-dark whitespace-nowrap'>
            <li className='mx-4 my-5'>
                <NavLink to="/OpenWeather1">Weather</NavLink>
            </li>
            <li className='mx-4 my-5'>
                <NavLink to="/OpenWeather2">Weather 2</NavLink>
            </li>
            <li className='mx-4 my-5'>
                <NavLink to="/OpenWeather3">Weather 3</NavLink>
            </li>
            
            </menu>
            </li>

            <li className='relative mx-5 my-5 group'>
            Rapid API
          <menu className='w-auto md:hidden md:group-hover:block md:group-hover:absolute md:bg-tahiti-dark whitespace-nowrap'>
            <li className='mx-4 my-5'>
                <NavLink to="/hobbies">Hobbies</NavLink >
            </li>
            
            </menu>
            </li>

           
        </menu>
        </div>
        
        </div>
    
    </nav>

  )
}

export default Navbar