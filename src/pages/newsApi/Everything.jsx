import { useEffect, useState } from "react";
import Title from '../../components/Title'
import Loader from '../../components/Loader'
import Error from '../../components/Error'

import useReqestData from "../../hooks/useRequestData"


const Everything = () => {

  const {makeRequest, isLoading, data, error} = useReqestData()

  const [ searchKey, setSearchKey ] = useState("vw")

  const [ language, setLanguage ] = useState()

  const [ category, setCategory] = useState()

  const [ country, setCountry] = useState() 

  useEffect(() => {
    makeRequest("https://newsapi.org/v2/everything?q=" + searchKey + "&language=" + language + "&page=1&sortBy=popularity&apiKey=" + import.meta.env.VITE_APP_NEWSAPIKEY);
  }, [language]); // [] tomme kører useEffect kun 1 gang - ved load af component


  useEffect(() => {
    makeRequest("https://newsapi.org/v2/top-headlines?category=" + category + "&apiKey=" + import.meta.env.VITE_APP_NEWSAPIKEY);
  }, [category]);

  useEffect(() => {
    makeRequest("https://newsapi.org/v2/top-headlines?country=" + country +  "&apiKey=" + import.meta.env.VITE_APP_NEWSAPIKEY);
  }, [country]);

  
  
  const handleSearch = ( e ) => {

    e.preventDefault()

    makeRequest("https://newsapi.org/v2/everything?q=" + searchKey + "&page=1&sortBy=popularity&apiKey=" + import.meta.env.VITE_APP_NEWSAPIKEY);
    
  }


  return (
    <div>

    <Title titleText="Nyheder fra NewsAPI (Everything Endpoint)" />
      
    { isLoading && <Loader/>}
    { error && <Error/>}

    <form onSubmit={ (e) => handleSearch(e) } className="my-10">
      <div className="mb-4"> 
        <p className="block mb-2 text-sm text-gray-700">Søg Nyheder</p>
          <input onChange={ (e) => setSearchKey(e.target.value) } type="text" placeholder="Skriv Søgeord Her.." className="block px-3 py-2 border rounded shadow"/>
      </div>

      {/* Vælg Sprog */}
      <label>
        <select onChange={ (e) => setLanguage(e.target.value) }>
          <option value="de">de</option>
          <option value="da">da-DK</option>
          <option value="en">en</option>
          <option value="fr">fr</option>
        </select>
      </label>

      <label>
        <select className="ml-8" onChange={ (e) => setCountry(e.target.value) }>
          <option value="de">Germany</option>
          <option value="da">Denmark</option>
          <option value="gb">Great Britain</option>
          <option value="fr">France</option>
        </select>
      </label>


      {/* Vælg kategori */}
      <label >
        <select className="ml-8" onChange={ (e) => setCategory(e.target.value) }>
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="science">Science</option>
          <option value="health">Health</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </label>
    
    </form>
    { data && 
      <>
      
      <h2>Der er {data.totalResults} nyheder der matcher</h2>
      <div className="grid grid-cols1 md:grid-cols-3">
      {
        data.articles
        // .filter (a => a.title !== "[Removed]")
        .map((a, i) => 
        <div className="m-5 border" >
          <img src={a.urlToImage} alt={ "Foto: " + a.title } />
          <div className="p-5" key={"news" + i}>
              <p>{ new Date( a.publlishedAt ).toLocaleString("da-DK", {year: "numeric", month: "long", day: "2-digit", hour: "numeric", minute: "2-digit"}) }</p>
            <h3 className="text-3xl">{a.title}</h3>
            <p>{a.content}</p>
          </div>

        </div>
        )        
      }
      </div>
      </>
  }


    </div>
  )
}

export default Everything