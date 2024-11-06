import { useEffect, useState } from "react";
import Title from "../../components/Title";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

import useRequestData from "../../hooks/useRequestData";
const Vehicle = ({url}) => {
  
    

    const { makeRequest, isLoading, data, error } = useRequestData();
  
    
    useEffect(() => {
      makeRequest(url);
    }, []); // [] tomme kører useEffect kun 1 gang - ved load af component
  
    return (


    <>
        {
            data && 
            <span>
                {data.model}
            </span>


        }
    </>
    

    

  )
}

export default Vehicle