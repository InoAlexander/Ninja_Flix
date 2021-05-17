import React from 'react';
import {useState, useEffect} from 'react';
import axios from "./axios"
import "./Banner.css"
import requests from "./Requests";

function Banner() {

    const [movie, setMovie] = useState([]);

    // fetching movie api info
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNinjaFlixOriginals);
            setMovie(
                request.data.results[
                    // generates a random number from 0 - [i]
                    Math.floor(Math.random() * request.data.results.length - 1 )
                ]
            );
            return request;
        }
        fetchData();
    }, [])

    console.log(movie);

    // function to truncate text if its too long (will add ...) 
    const truncate =(string, n)=>{
        //  n = number of characters
        return string?.length > n ? string.substr(0, n - 1 ) + '...' : string;
    }



    return (
        <header className="Banner" style={{
            backgroundSize: "cover", 
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
            
        <div className="bannerContents">
            <h1 className="bannerTitle">Movie Name</h1>
            <div className="bannerButtons">
                <button className="bannerButton" >Play</button>
                <button className="bannerButton" >My Ninja List</button>
            </div>

            <h1 className="bannerDescription">
            {truncate(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam`, 150)}

            </h1>

            {/* adds a cool fade to the bottom */}
            <div className="banner--fadeBottom" />
        </div>

        </header>
    )
}

export default Banner
