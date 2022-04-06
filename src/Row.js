import React, { useEffect, useState } from 'react'
import axios from './axios'

function Row({title, fetchUrl}){
    const[movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
 async function fetchData(){
    const request = await axios.get(fetchUrl);
    console.log(request.data.results);
    return request;
 }
 fetchData();
    }, [fetchUrl]);
    
   console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

    <div className="row__posters">
        {/* {row__poster} */}
    </div>

            {/* {container -> posters} */}

        </div>
    )
}

export default Row
