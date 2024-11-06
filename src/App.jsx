import { useState } from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import "./App.css";


import About from "./pages/About";
import Newspage from "./pages/Newspage";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Photos from "./pages/jsonplaceholder/Photos"
import Todos from "./pages/jsonplaceholder/Todos";
import Starships from "./pages/Swapi/Starships"
import People from "./pages/Swapi/People"
import Vehicles from "./pages/Swapi/Vehicles";

import NoPage from "./pages/NoPage";

import Layout from "./layout/Layout";
import Posts from "./pages/jsonplaceholder/Posts";
import PostDetails from "./pages/jsonplaceholder/PostDetails";
import Everything from "./pages/newsApi/Everything";
import OpenWeather1 from "./pages/openweather/OpenWeather1"
import OpenWeather2 from "./pages/openweather/OpenWeather2"
import OpenWeather3 from "./pages/openweather/OpenWeather3"
import Hobbies from "./pages/rapidAPI/Hobbies";



function App() {

  const router = createBrowserRouter( 
    [ 

      {
        path: "/", element: <Layout />,
        errorElement: <NoPage/>,
        children: [

          { 
            index: true, element: <Home />
          },
          { 
            path: "/about", element: <About />
          },
          { 
            path: "/news", element: <Newspage />
          },
          { 
            path: "/contact", element: <Contact />
          },
          { 
            path: "/posts", element: <Posts />
          }, // JSONPlaceholder API
          { 
            path: "/postsdetails/:id", element: <PostDetails />
          }, 
          { 
            path: "/photos", element: <Photos />
          }, 
          { 
            path: "/todo", element: <Todos />
          }, 
          { 
            path: "/starships", element: <Starships />
          }, 
          { 
            path: "/people", element: <People />
          },
          { 
            path: "/vehicles", element: <Vehicles />
          },

          { 
            path: "/everything", element: <Everything />
          },

          { 
            path: "openWeather1", element: <OpenWeather1 />
          },
          { 
            path: "openWeather2", element: <OpenWeather2 />
          },
          { 
            path: "openWeather3", element: <OpenWeather3 />
          },

          { 
            path: "hobbies", element: <Hobbies />
          },
          
          
          // Not found
          { 
            path: "*", element: <NoPage />
          },

        ]
      }

    
    ]
)

  return (
    <>
      <section className="container mx-auto border border-red-600 rounded-lg sm:border-green-500 md:border-blue-500 lg:border-purple-500 xl:border-yellow-500 2xl:border-indigo-700">

          <RouterProvider router={router} />

      </section>

      {/* <Home></Home>

      <Contact></Contact>
      <Newspage></Newspage>
      <About></About> */}
    </>
  );
}

export default App;
