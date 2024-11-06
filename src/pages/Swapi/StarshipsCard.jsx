import React from "react";


const StarShipsCard = ({results}) => {
  return (
   
   <section className='container p-4 border-2 border-red-600'>
    <p>{results.name}</p>
    <p>{results.manufacturer}</p>
    <p>{results.model}</p>
    <p>{results.crew}</p>
    <p>{results.passengers}</p>
    <p>{results.hyperdrive_rating}</p>
    <p className="mt-4">{results.starship_class}</p>
    </section>
    
  );
};

export default StarShipsCard;
