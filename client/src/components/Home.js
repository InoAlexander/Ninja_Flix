import React from 'react';
import "./Home.css";
import Navbar from "./Navbar";
import Banner from "./Banner"
import requests from "./Requests"
import Rows from "./Rows";


function HomePage(){

return(
    <div className="homePage">
    <Navbar />
    <Banner /> 
    
    <Rows title="NinjaFlix Originals" fetchURL={requests.fetchNinjaFlixOriginals} isLargeRow/>

    <Rows title="Trending" fetchURL={requests.fetchTrending} />
    <Rows title="Top Rated" fetchURL={requests.fetchToprated} />
    <Rows title="Action" fetchURL={requests.fetchActionMovies} />
    <Rows title="Horror" fetchURL={requests.fetchHorrorMovies} />
    <Rows title="Comedy" fetchURL={requests.fetchComedyMovies} />
    <Rows title="Romance" fetchURL={requests.fetchRomanceMovies} />
    <Rows title="Mystery" fetchURL={requests.fetchMysteryMovies} />
    <Rows title="Western" fetchURL={requests.fetchWesternMovies} />
    <Rows title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
);
}

export default HomePage;