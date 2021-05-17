import React, {useState, useEffect} from 'react';
import axios from "./axios";
import "./Rows.css";
import requests from "./Requests";

function Rows({ title, fetchURL, isLargeRow = false }) {
    const [movies, setMovies] = useState([]); 

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            console.log(request.data.results + "from fetchData inside of Rows.js");
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    console.log(movies);

    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="posters"> 
            {movies.map(
                (movie) => 
                ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                <img 
                className={`poster ${isLargeRow && "posterLarge"}`} 
                key={movie.id }
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} 
                alt={movie.name}
                />    
                ) 
            )}
            </div>
        </div>
    );
}

export default Rows;
