import "./Rows.css"
import React, {useState, useEffect} from 'react';
import axios from "./axios"

function Rows({ title, fetchURL, isLargeRow = false }) {
    const [movies, setMovies] = useState([]); 

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchURL])

    console.log(movies);

    return (
        <div className="row">
        {/* pass in props */}
            <h2>{title}</h2>
            {/* populating rows */}
        </div>
    )
}

export default Rows
