import React, {useState, useEffect} from 'react';
import axios from "./axios";
import "./Rows.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Rows({ title, fetchURL, isLargeRow = false }) {
    const [movies, setMovies] = useState([]); 
    const [trailer, setTrailer] = useState(""); 
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

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        }
    }

    // handler for playing the trailers
    const clickHandler = (movie) => {
        if(trailer){
            setTrailer('');
        } else {
            movieTrailer(movie?.name || "")
            .then((url) =>{
                const urlParameters = new URLSearchParams (new URL(url).search) 
                setTrailer(urlParameters.get('v'));
            }).catch(error => console.log("error in clickHandler function", error))
        }
    }

    return(
        <div className="row">
            <h2>{title}</h2>
            <h4 className="rowTitle">{movies?.title || movies?.name || movies?.original_name}</h4>
            <div className="posters"> 
            {movies.map(
                (movie) => 
                ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                <img 
                className={`poster ${isLargeRow && "posterLarge"}`} 
                key={movie.id }
                // click handler
                onClick={() => clickHandler(movie)}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} 
                alt={movie.name}
                />    
                ) 
            )}
            </div>
            {trailer && <YouTube videoId={trailer} opts={opts} />}
        </div>
    );
}

export default Rows;
