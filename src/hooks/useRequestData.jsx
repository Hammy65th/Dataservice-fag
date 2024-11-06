// fetch()
// axios
import axios from 'axios'
import { useState } from 'react';
import { Await } from 'react-router-dom';

const useRequestData = () => {

    // Loader - venter på svar
    // Success = data
    // Error = 404 not found (No data)

    // usestate - opbevaring af data
    const [isLoading, setIsLoading] = useState(false); // True eller false

    // data
    const [data, setData] = useState(null); // data enten {} eller []

    // error
    const [error, setError] = useState(false); // 
    
    // function: ring op api'et - modtager en url (fx til swapi)
    const makeRequest = async (url, method="GET", headers = null, params = null) => {

        let response;

        
        setIsLoading(true) // der loades - ventes på data/svar

        // await new Promise( resolve => setTimeout( resolve, 3000 ) ) // 3 sekunder forsinkelse

        try {
            if (method === "GET") {
                response = await axios.get( url, {headers: headers, params: params} )

            } else {
                throw new Error("Forkert Metode - indtil videre er kun GET accepteret");
            }
            
            setData(response.data)
            setError(false)

        } catch (error) {

            setError(true)
            setData(null)
            console.log( error)

        } finally {

            setIsLoading(false)
        }

    }

    return {makeRequest, isLoading, data, error}


}

export default useRequestData;